/**
 *
 * ConciergeCalendar
 *
 */

import React, { memo, useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Container from '@mui/material/Container';
import isEqual from 'lodash/isEqual';
import find from 'lodash/find';
import map from 'lodash/map';
import uniq from 'lodash/uniq';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import get from 'lodash/get';
import useMediaQuery from '@mui/material/useMediaQuery';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createStructuredSelector } from 'reselect';
import dynamic from 'next/dynamic';
import HeaderBar from 'components/HeaderBar';
import HomePageBox from 'components/HomePageBox';
import HomePageText from 'components/HomePageText';
import HomePageButton from 'components/HomePageButton';
import { createConcierge } from '../ConciergeServices/actions';
const Footer = dynamic(() => import('components/Footer'));
import {
  ImageContainer,
  BlueImageContainer,
  TextArea,
  BpCheckedIcon,
  BpIcon,
  CardContainer,
  Image,
  AddressContainer,
  AddImageContainer,
  ScrollContainerDiv,
  BlueImageContainer1,
} from './styles';
import makeSelectConciergeCalendar from './selectors';
import { timeValues } from './constantValues';
import { pushEvent } from 'utils/cleverTap';
import { EVENT_NAME } from 'constants/constants';

const BpRadio = props => {
  return <Radio disableRipple color="default" checkedIcon={<BpCheckedIcon />} icon={<BpIcon />} {...props} />;
};

const RadioLabel = props => {
  return (
    <HomePageBox padding={{ xs: '0.5rem 0 0 0rem', md: '0 0 0 2rem' }}>
      <HomePageText
        padding={{ xs: '0s 0 0 0', md: '0 0 0 0' }}
        fontSize={{ xs: '1.5rem', md: '3.6rem' }}
        lineHeight={{ xs: '1.815rem', md: '4.357rem' }}
        letterSpacing={{ xs: '-1%', md: '-1%' }}
        textTransform={{ xs: 'none !important', md: 'none !important' }}
        fontWeight={{ xs: '500', md: '500' }}>
        {get(props, 'item.tag', 'N/A')}
      </HomePageText>
      <HomePageText
        padding={{ xs: '0.225rem 0 0 0', md: '0 0 0 0' }}
        fontSize={{ xs: '1.1rem', md: '2.2rem' }}
        lineHeight={{ xs: '1.142rem', md: '3.8rem' }}
        letterSpacing={{ xs: '-1%', md: '-1%' }}
        textTransform={{ xs: 'none !important', md: 'none !important' }}
        fontWeight={{ xs: '400', md: '500' }}>
        {get(props, 'item.full_address', 'N/A')}
      </HomePageText>
    </HomePageBox>
  );
};
export function ConciergeCalendar({ handleCreateConcierge, conciergeData }) {
  const [calender, setCalender] = useState();
  const [defaultAddress, setDefaultAddress] = useState('');
  const [timeValue, setTimeValue] = useState('');
  const [calenderDate, setCalenderDate] = useState(dayjs());
  const instruction = useRef(null);
  const scrollRef = useRef(null);
  const container1 = useRef(null);
  const router = useRouter();
  // const { pathname, query } = router;

  const redirectUserToServiceBack = useCallback(() => {
    if (!router?.query?.from) {
      // Default case when "from" query parameter doesn't exist
      router.push(
        {
          pathname: '/services',
          query: {
            from: router.asPath,
            fromServiceCreated: true,
          },
        },
        '/services'
      );
      return;
    }

    if (router.query.from.includes('medibuddy')) {
      router.push(
        {
          pathname: router.query.from,
          query: {
            from: router.asPath,
            fromServiceCreated: true,
          },
        },
        router.query.from
      );
    } else if (router.query.from.startsWith('/enterprise/kotak')) {
      router.push(
        {
          pathname: '/enterprise/kotak/services',
          query: {
            from: router.asPath,
            fromServiceCreated: true,
          },
        },
        '/enterprise/kotak/services'
      );
    } else if (router.query.from.startsWith('/enterprise/federal')) {
      router.push(
        {
          pathname: '/enterprise/federal/services',
          query: {
            from: router.asPath,
            fromServiceCreated: true,
          },
        },
        '/enterprise/federal/services'
      );
    } else {
      router.push(
        {
          pathname: '/services',
          query: {
            from: router.asPath,
            fromServiceCreated: true,
          },
        },
        '/services'
      );
    }
  }, [router.query.from, router]);

  const matches = useMediaQuery('(max-width:762px)');

  useEffect(() => {
    const months = [];
    const days = [];
    const daysCount = dayjs().add(3, 'months').diff(dayjs(), 'days');

    for (let i = 1; i <= daysCount; i++) {
      const date = dayjs().add(i - 1, 'days');
      days.push(date);
      const nextMonthName = date.format('MMMM');
      months.push(nextMonthName);
    }
    setCalender({ dates: days, month: uniq(months) });
    find(conciergeData?.addressData?.data, item => {
      if (isEqual(item?.default, true)) {
        setDefaultAddress(item?.id);
      }
    });
  }, []);

  const saveRequest = () => {
    const today = dayjs();
    let payload = {
      data: {
        service_time: today.format('DD MMM, YYYY hh:mm A'),
        elder_notes: instruction?.current,
        service_id: router.query?.service_Id,
        service_date: calenderDate.format('DD MMM, YYYY'),
        address_id: defaultAddress,
      },
      redirectUserToServiceBack,
    };

    const selectedItem = find(timeValues, item => isEqual(item.id, timeValue));

    if (selectedItem) {
      const startingTime = dayjs(`${calenderDate.format('YYYY-MM-DD')} ${selectedItem?.startTime}`);

      if (calenderDate.isSame(today, 'date') && startingTime.isAfter(today)) {
        payload['data'] = {
          ...payload?.data,
          service_time: startingTime.format('DD MMM, YYYY hh:mm A'),
        };
      }

      if (calenderDate.isAfter(today, 'date')) {
        payload['data'] = {
          ...payload?.data,
          service_time: startingTime.format('DD MMM, YYYY hh:mm A'),
        };
      }
    }
    handleCreateConcierge(payload);
    pushEvent(EVENT_NAME.REQUEST_PLACED, {
      Category: router?.query?.category,
      Sub_Category: router?.query?.service_name,
      Date: calenderDate.format('DD MMM, YYYY'),
      Time: today.format('DD MMM, YYYY hh:mm A'),
    });
  };

  useEffect(() => {
    const months = [];
    const days = [];
    const daysCount = dayjs().add(3, 'months').diff(dayjs(), 'days');

    for (let i = 1; i <= daysCount; i++) {
      const date = dayjs().add(i - 1, 'days');
      days.push(date);
      const nextMonthName = date.format('MMMM');
      months.push(nextMonthName);
    }
    setCalender({ dates: days, month: uniq(months) });
    find(conciergeData?.addressData?.data, item => {
      if (isEqual(item?.default, true)) {
        setDefaultAddress(item?.id);
      }
    });
  }, []);

  const moveToSpecificMonth = useCallback(
    months => {
      if (scrollRef.current) {
        const isCurrentMonth = dayjs().format('MMMM') === months;
        if (isCurrentMonth) {
          const containerNode = scrollRef.current.container;
          let itemNode = containerNode?.current?.childNodes[0];
          if (itemNode) {
            setCalenderDate(dayjs());
            const scrollLeft = itemNode.offsetLeft - containerNode?.current?.offsetLeft;
            container1.current.scrollTo(scrollLeft, 0);
            itemNode = null;
          }
        } else {
          map(calender?.dates, (value, index) => {
            if (dayjs(value).format('DD-MM-YYYY') === dayjs().month(months).startOf('month').format('DD-MM-YYYY')) {
              const containerNode = scrollRef.current.container;
              let itemNode = containerNode?.current?.childNodes[index];
              if (itemNode) {
                setCalenderDate(value);
                const scrollLeft = itemNode.offsetLeft - containerNode?.current?.offsetLeft;
                container1.current.scrollTo(scrollLeft, 0);
                itemNode = null;
              }
            }
          });
        }
      }
    },
    [calender, scrollRef]
  );

  const moveToAddAddress = useCallback(
    item => {
      // router.push(
      //   {
      //     pathname: '/address',
      //     query: { id: item?.id },
      //   },
      //   '/address'
      // );
      // console.log('pathname', router.query.from);
      if (router.query.from.includes('kotak')) {
        router.push(
          {
            pathname: '/address?enterprise=kotak', // Replace with your desired route
            query: { id: item?.id },
          },
          '/address?enterprise=kotak'
        );
      } else if (router.query.from.includes('federal')) {
        router.push(
          {
            pathname: '/address?enterprise=federal', // Replace with your desired route
            query: { id: item?.id },
          },
          '/address?enterprise=federal'
        );
      } else if (router.query.from.includes('medibuddy')) {
        router.push(
          {
            pathname: '/address?enterprise=medibuddy', // Replace with your desired route
            query: { id: item?.id },
          },
          '/address?enterprise=medibuddy'
        );
      } else {
        router.push(
          {
            pathname: '/address',
            query: { id: item?.id },
          },
          '/address'
        );
      }
    },
    [router]
  );

  useEffect(() => {
    let flag = true;
    timeValues.forEach((item, index) => {
      const endTime = dayjs(`${calenderDate.format('YYYY-MM-DD')} ${item.endTime}`);
      const isBefore = endTime.isBefore(dayjs());
      if (!isBefore && flag) {
        setTimeValue(item?.id);
        flag = false;
      }
      if (!isBefore) {
        timeValues[index].isDisabled = false;
      }
      if (isBefore) {
        timeValues[index].isDisabled = true;
      }
    });
  }, [calenderDate]);

  const calenderComponent = useCallback(() => {
    return (
      <HomePageBox
        padding={{ xs: '1.368rem 0 0 0', md: '3.75rem 0 0 0' }}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <ScrollContainerDiv className="scrollerXs" innerRef={container1} ref={scrollRef} style={{ display: 'flex' }}>
          {map(calender?.dates, item => (
            <HomePageBox
              padding={{ xs: '0.668rem 2.4rem', md: '0.8rem 5.2rem' }}
              backgroundColor={{
                xs: isEqual(dayjs(calenderDate).format('DD-MM-YYYY'), dayjs(item).format('DD-MM-YYYY'))
                  ? '#CC4746'
                  : '#ffffff',
                md: isEqual(dayjs(calenderDate).format('DD-MM-YYYY'), dayjs(item).format('DD-MM-YYYY'))
                  ? '#CC4746'
                  : '#ffffff',
              }}
              margin={{ xs: '0 0.8rem 0 0', md: '0 2.5rem 0 0' }}
              borderRadius={{ xs: '0.607rem', md: '1.25rem' }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              onClick={() => setCalenderDate(item)}>
              <HomePageText
                fontSize={{ xs: '1.3rem', md: '2.8rem' }}
                lineHeight={{ xs: '2.815rem', md: '5.8rem' }}
                letterSpacing={{ xs: '-4%', md: '-4%' }}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                color={{
                  xs: isEqual(dayjs(calenderDate).format('DD-MM-YYYY'), dayjs(item).format('DD-MM-YYYY'))
                    ? '#ffffff'
                    : '#000000',
                  md: isEqual(dayjs(calenderDate).format('DD-MM-YYYY'), dayjs(item).format('DD-MM-YYYY'))
                    ? '#ffffff'
                    : '#000000',
                }}
                fontWeight={{ xs: '600', md: '600' }}>
                {dayjs(item).date()}
              </HomePageText>
              <HomePageText
                fontSize={{ xs: '1.3rem', md: '2.2rem' }}
                lineHeight={{ xs: '2.815rem', md: '5.8rem' }}
                letterSpacing={{ xs: '-4%', md: '-4%' }}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                color={{
                  xs: isEqual(dayjs(calenderDate).format('DD-MM-YYYY'), dayjs(item).format('DD-MM-YYYY'))
                    ? '#ffffff'
                    : '#7B7B7B',
                  md: isEqual(dayjs(calenderDate).format('DD-MM-YYYY'), dayjs(item).format('DD-MM-YYYY'))
                    ? '#ffffff'
                    : '#7B7B7B',
                }}
                fontWeight={{ xs: '600', md: '600' }}>
                {dayjs(item).format('ddd')}
              </HomePageText>
            </HomePageBox>
          ))}
        </ScrollContainerDiv>
      </HomePageBox>
    );
  });

  return (
    <>
      <HeaderBar backgroundColor="#000000" />
      <div style={{ backgroundColor: '#F7F7F7' }}>
        <HomePageBox padding={{ xs: '13.5rem 0 0 0', md: '12.359rem 0 0 0' }}>
          <Container maxWidth="lg">
            <HomePageBox display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
              <HomePageText
                fontSize={{ xs: '1.7rem', md: '3.6rem' }}
                lineHeight={{ xs: '1.743rem', md: '5.8rem' }}
                letterSpacing={{ xs: '-4%', md: '-4%' }}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                fontWeight={{ xs: '600', md: '600' }}>
                Select date
              </HomePageText>
              <HomePageText
                fontSize={{ xs: '1.7rem', md: '3.6rem' }}
                lineHeight={{ xs: '1.743rem', md: '5.8rem' }}
                letterSpacing={{ xs: '-4%', md: '-4%' }}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                fontWeight={{ xs: '600', md: '600' }}>
                {calenderDate.format('YYYY')}
              </HomePageText>
            </HomePageBox>

            <HomePageBox
              padding={{ xs: '2.188rem 6rem 0 6rem', md: '3.125rem 24rem 0 24rem' }}
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              cursor="pointer"
              alignItems="center">
              {map(calender?.month, item => {
                return (
                  <HomePageBox
                    onClick={() => moveToSpecificMonth(item)}
                    borderBottom={{
                      xs: isEqual(calenderDate.format('MMMM'), item) ? '0.94px solid #CC4746' : 'none',
                      md: isEqual(calenderDate.format('MMMM'), item) ? '3.12px solid #CC4746' : 'none',
                    }}>
                    <HomePageText
                      padding={{ xs: '0 0.5rem 1rem 0.5rem', md: '0 1rem 2rem 1rem' }}
                      fontSize={{ xs: '1.3rem', md: '2.2rem' }}
                      lineHeight={{ xs: '0.961rem', md: '3.2rem' }}
                      letterSpacing={{ xs: '-1%', md: '-1%' }}
                      textTransform={{ xs: 'none !important', md: 'none !important' }}
                      color={{
                        xs: isEqual(calenderDate.format('MMMM'), item) ? '#CC4746' : '#7B7B7B',
                        md: isEqual(calenderDate.format('MMMM'), item) ? '#CC4746' : '#7B7B7B',
                      }}
                      fontWeight={{ xs: '500', md: '500' }}>
                      {item}
                    </HomePageText>
                  </HomePageBox>
                );
              })}
            </HomePageBox>
          </Container>
          {!matches && <Container maxWidth="lg">{calenderComponent()}</Container>}
          {matches && calenderComponent()}
          <Container maxWidth="lg">
            <HomePageBox
              padding={{ xs: '0 0 0 0.809rem', md: '0 0 0 2.625rem' }}
              margin={{ xs: '1.243rem 0 0 0', md: '1.25rem 0 0 0' }}
              borderRadius={{ xs: '0.5rem', md: '2.5rem' }}
              border={{ xs: '0.1rem solid #2447FF', md: '0.1rem solid #2447FF' }}
              backgroundColor={{ xs: '#ffffff', md: '#ffffff' }}
              display="flex"
              alignItems="center"
              flexDirection="row">
              <BlueImageContainer>
                <Image fill src={'/static/images/info.webp'} style={{ objectFit: 'cover' }} />
              </BlueImageContainer>
              <HomePageText
                padding={{ xs: '0.607rem 0', md: '1.25rem 0 1.25rem 0' }}
                margin={{ xs: '0 0 0 0.564rem', md: '0 0 0 1.813rem' }}
                fontSize={{ xs: '1rem', md: '1.7rem' }}
                lineHeight={{ xs: '1.21', md: '3.2rem' }}
                color={{ xs: '#2447FF', md: '#2447FF' }}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                fontWeight={{ xs: '500', md: '500' }}>
                This section is optional. Current date is selected by default
              </HomePageText>
            </HomePageBox>
          </Container>
        </HomePageBox>
        <Container maxWidth="lg">
          <HomePageText
            padding={{ xs: '1.296rem 0 0 0', md: '2.5rem 0 0 0' }}
            fontSize={{ xs: '1.7rem', md: '3.6rem' }}
            lineHeight={{ xs: '1.743rem', md: '5.8rem' }}
            letterSpacing={{ xs: '-4%', md: '-4%' }}
            textTransform={{ xs: 'none !important', md: 'none !important' }}
            fontWeight={{ xs: '600', md: '600' }}>
            Select time
          </HomePageText>
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 1, md: 3, lg: 4 }}
            sx={{ margin: { md: '1.25rem 0 0 -3rem', xs: '0.864rem 0  0 -0.7rem' } }}>
            {map(timeValues, (item, key) => {
              return (
                <Grid item xs={3} sm={3} md={3} index={key}>
                  <CardContainer
                    onClick={() => {
                      !item?.isDisabled && setTimeValue(item?.id);
                    }}
                    item
                    timeValue={timeValue}
                    data={item}>
                    <ImageContainer>
                      <Image
                        fill
                        src={
                          isEqual(timeValue, item?.id)
                            ? `/static/images/${item?.selectedIcon}`
                            : `/static/images/${item?.unSelectedIcon}`
                        }
                        style={{ objectFit: 'cover' }}
                      />
                    </ImageContainer>
                    <HomePageText
                      fontSize={{ xs: '1.3rem', md: '2.2rem' }}
                      lineHeight={{ xs: '1.6rem', md: '3.2rem' }}
                      letterSpacing={{ xs: '-1%', md: '-1%' }}
                      fontWeight={{ xs: '500', md: '500' }}
                      textAlign="center"
                      color={{
                        xs: isEqual(timeValue, item?.id) ? '#ffffff' : '#12181F',
                        md: isEqual(timeValue, item?.id) ? '#ffffff' : '#12181F',
                      }}>
                      {item?.title}
                    </HomePageText>
                  </CardContainer>
                </Grid>
              );
            })}
          </Grid>
          <HomePageBox
            padding={{ xs: '0 0 0 0.809rem', md: '0 0 0 2.625rem' }}
            margin={{ xs: '1.243rem 0 0 0', md: '1.25rem 0 0 0' }}
            borderRadius={{ xs: '0.5rem', md: '2.5rem' }}
            border={{ xs: '0.1rem solid #2447FF', md: '0.1rem solid #2447FF' }}
            backgroundColor={{ xs: '#ffffff', md: '#ffffff' }}
            display="flex"
            alignItems="center"
            flexDirection="row">
            <BlueImageContainer>
              <Image fill src={'/static/images/info.webp'} style={{ objectFit: 'cover' }} />
            </BlueImageContainer>
            <HomePageText
              padding={{ xs: '0.407rem 0 0.407rem 0', md: '1.25rem 0 1.25rem 0' }}
              margin={{ xs: '0 0 0 0.564rem', md: '0 0 0 1.813rem' }}
              fontSize={{ xs: '1rem', md: '1.7rem' }}
              lineHeight={{ xs: '1.21', md: '3.2rem' }}
              color={{ xs: '#2447FF', md: '#2447FF' }}
              textTransform={{ xs: 'none !important', md: 'none !important' }}
              fontWeight={{ xs: '500', md: '500' }}>
              This section is optional. Current time slot is selected by default
            </HomePageText>
          </HomePageBox>
          <HomePageBox margin={{ xs: '0.864rem 0 0 0', md: '1.25rem 0 0 0' }}>
            <HomePageText
              fontSize={{ xs: '1.7rem', md: '3.6rem' }}
              lineHeight={{ xs: '1.743rem', md: '5.8rem' }}
              letterSpacing={{ xs: '-4%', md: '-4%' }}
              textTransform={{ xs: 'none !important', md: 'none !important' }}
              fontWeight={{ xs: '600', md: '600' }}>
              Add instructions
            </HomePageText>
            <TextArea
              placeholder="Add instruction"
              multiline
              maxRows={15}
              rows={9}
              name="instruction"
              sx={{
                '& fieldset': { border: 'none' },
              }}
              value={instruction?.current}
              onChange={event => {
                instruction.current = event.target.value;
              }}
              inputProps={{
                sx: {
                  letterSpacing: { xs: '-0.01em;', md: '-0.01em;' },
                  lineHeight: { xs: '1.3rem', md: '2.1rem' },
                  fontSize: { xs: '1.1rem', md: '1.7rem' },
                  fontWeight: { xs: 400, md: 400 },
                },
              }}
            />
          </HomePageBox>
          <HomePageBox
            padding={{ xs: '0.407rem 0.809rem ', md: '1.25rem 2.625rem' }}
            margin={{ xs: '1.243rem 0 0 0', md: '1.25rem 0 0 0' }}
            borderRadius={{ xs: '0.5rem', md: '2.5rem' }}
            border={{ xs: '0.1rem solid #2447FF', md: '0.1rem solid #2447FF' }}
            backgroundColor={{ xs: '#ffffff', md: '#ffffff' }}
            display="flex"
            alignItems="center"
            flexDirection="row">
            <BlueImageContainer1>
              <Image fill src={'/static/images/info.webp'} style={{ objectFit: 'cover' }} />
            </BlueImageContainer1>
            <HomePageBox>
              <HomePageText
                margin={{ xs: '0 0 0 0.564rem', md: '0 0 0 1.813rem' }}
                fontSize={{ xs: '1rem', md: '1.7rem' }}
                lineHeight={{ xs: '1.21', md: '2.057rem' }}
                color={{ xs: '#2447FF', md: '#2447FF' }}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                fontWeight={{ xs: '500', md: '500' }}>
                Emoha daughter and employees will try their best to follow your instructions. However, its not Emoha’s
                fault if the vendor cannot fulfil your request
              </HomePageText>
            </HomePageBox>
          </HomePageBox>
          <HomePageBox
            margin={{ xs: '0.869rem 0 0 0', md: '1.25rem 0 0 0' }}
            onClick={moveToAddAddress}
            cursor="pointer">
            <HomePageText
              fontSize={{ xs: '1.7rem', md: '3.6rem' }}
              lineHeight={{ xs: '1.743rem', md: '5.8rem' }}
              letterSpacing={{ xs: '-4%', md: '-4%' }}
              textTransform={{ xs: 'none !important', md: 'none !important' }}
              fontWeight={{ xs: '600', md: '600' }}>
              Select address
            </HomePageText>
            <HomePageBox
              margin={{ xs: '0.869rem 0 0 0' }}
              padding={{ xs: '0.8rem 0.877rem 0.8rem 0.564rem', md: '1.25rem 4.5rem 1.25rem 1.813rem' }}
              borderRadius={{ xs: '1.5rem', md: '4rem' }}
              backgroundColor={{ xs: '#ffffff', md: '#ffffff' }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flexDirection="row">
              <HomePageText
                margin={{ xs: '0 0 0 0.564rem', md: '0 0 0 1.813rem' }}
                fontSize={{ xs: '1.3rem', md: '2.8rem' }}
                letterSpacing={{ xs: '-1%', md: '-1%' }}
                lineHeight={{ xs: '1.142rem', md: '3.8rem' }}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                fontWeight={{ xs: '500', md: '500' }}>
                Add new address
              </HomePageText>
              <AddImageContainer>
                <Image fill src={'/static/images/AddIconBlack.webp'} style={{ objectFit: 'cover' }} />
              </AddImageContainer>
            </HomePageBox>
          </HomePageBox>
          <HomePageBox padding={{ xs: '0.891rem 0 1.186rem 0 ', md: '1.25rem 0 4.313rem 0 ' }}>
            <HomePageBox>
              <HomePageText
                margin={{ xs: '0 0 0 1.709rem', md: '0 0 0 5.688rem' }}
                fontSize={{ xs: '0.8rem', md: '1.3rem' }}
                lineHeight={{ xs: '1.1rem', md: '3.8rem' }}
                letterSpacing={{ xs: '0.8px', md: '1.3px' }}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                fontWeight={{ xs: '500', md: '500' }}>
                CURRENTLY AT USE
              </HomePageText>
              <HomePageBox padding={{ xs: '0.5rem 0 0 0', md: '0 0 0 0' }}>
                <RadioGroup
                  value={`${defaultAddress}`}
                  aria-labelledby="demo-customized-radios"
                  name="address"
                  onChange={e => setDefaultAddress(e?.target?.value)}>
                  {map(conciergeData?.addressData?.data, item => {
                    return (
                      <AddressContainer>
                        <FormControlLabel
                          value={get(item, 'id')}
                          control={<BpRadio item={item} />}
                          label={<RadioLabel item={item} />}
                        />
                        <HomePageBox
                          padding={{ xs: '0.5rem 0 0 0', md: '0 0 0 0' }}
                          display="flex"
                          justifyContent="flex-end"
                          alignItems="center"
                          flexDirection="row"
                          cursor="pointer"
                          onClick={() => moveToAddAddress(item)}>
                          <BlueImageContainer>
                            <Image fill src={'/static/images/edit.webp'} style={{ objectFit: 'cover' }} />
                          </BlueImageContainer>
                          <HomePageText
                            padding={{ xs: '0.407rem 0 0.407rem 0', md: '1.25rem 0 1.25rem 0' }}
                            margin={{ xs: '0 0 0 0.564rem', md: '0 0 0 1.813rem' }}
                            fontSize={{ xs: '1rem', md: '2.2rem' }}
                            lineHeight={{ xs: '1.361rem', md: '3.2rem' }}
                            textTransform={{ xs: 'none !important', md: 'none !important' }}
                            fontWeight={{ xs: '500', md: '500' }}>
                            Edit
                          </HomePageText>
                        </HomePageBox>
                      </AddressContainer>
                    );
                  })}
                </RadioGroup>
              </HomePageBox>
            </HomePageBox>
          </HomePageBox>
        </Container>
      </div>
      <HomePageBox display="flex" justifyContent="center">
        <HomePageButton
          hover={{ opacity: '1' }}
          boxShadow="none"
          onClick={() => saveRequest()}
          textTransform={{ xs: 'none !important', md: 'none !important' }}
          fontSize={{ xs: '1.3rem ', md: '1.7rem' }}
          lineHeight={{ xs: '1.573rem', md: '2.057rem' }}
          padding={{ xs: '0.906rem 1.926rem', md: '1.125rem 2.25rem' }}
          borderRadius={{ xs: '6.1rem', md: '3.5rem' }}
          margin={{ xs: '1.9rem 0 6.188rem 0', md: '6.25rem 6.625rem' }}
          fontWeight={{ xs: 500, md: 500 }}>
          Request
        </HomePageButton>
      </HomePageBox>
    </>
  );
}

ConciergeCalendar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleCreateConcierge: PropTypes.func,
  conciergeData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  conciergeData: makeSelectConciergeCalendar(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleCreateConcierge: payload => dispatch(createConcierge(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ConciergeCalendar);
