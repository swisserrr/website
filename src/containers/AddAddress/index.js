/**
 *
 * AddAddress
 *
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import find from 'lodash/find';
import { toast } from 'react-toastify';
import { createStructuredSelector } from 'reselect';
import {
  CustomInput,
  CityContainer,
  MainContainer,
  AutoCompleteWrapper,
  AutoCompleteSearchIcon,
  Image,
  ButtonIconContainer,
} from './styles';
import makeSelectAddAddress from './selectors';
import makeSelectConciergeCalendar from '../ConciergeCalendar/selectors';
import dynamic from 'next/dynamic';
const HeaderBar = dynamic(() => import('components/HeaderBar'));
const Footer = dynamic(() => import('components/Footer'));
const GoogleMap = dynamic(() => import('components/GoogleMap'), { ssr: false });
const Autocomplete = dynamic(() => import('./customAutoComplete'), { ssr: false });
const HomePageButton = dynamic(() => import('components/HomePageButton'));
const HomePageText = dynamic(() => import('components/HomePageText'));
const HomePageBox = dynamic(() => import('components/HomePageBox'));
import { addAddress, editAddress } from './actions';
import { AddressSchema } from 'utils/validationSchema';
import { getCurrentLocation, getAddressFromLatLng } from 'utils/getGeoLocationData';
import { CONSTANTS } from '../../constants';
import { setLoading } from 'containers/Loading/actions';
import { useDispatch } from 'react-redux';
import { getAddress } from 'containers/ConciergeCalendar/actions';
export function AddAddress({
  addAddressHandler,
  editAddressHandler,
  conciergeData,
  handleSetLoading,
  setFieldValue,
  isFromKotak,
  updateToggle,
  nonce,
}) {
  const [latLang, setLatLang] = useState(null);
  const [infoWindowShow, setInfoWindowShow] = useState(false);
  const matches = useMediaQuery('(max-width:600px)');
  const autoCompleteRef = useRef(null);
  const router = useRouter();

  const mapStyle = {
    height: matches ? '24rem' : '50rem',
    borderRadius: matches ? '0.75rem' : '2.5rem',
  };

  const dispatch = useDispatch();

  const moveToConciergeBack = useCallback(() => {
    if (isFromKotak) {
      updateToggle('addressList');
      dispatch(getAddress());
    } else {
      router.back();
    }

    handleSetLoading(false);
  }, []);

  const addressFormik = useFormik({
    initialValues: {
      address_line_1: '',
      state: '',
      city: '',
      country: '',
      pincode: '',
      landmark: '',
      geo_latitude: latLang?.latitude || 28.425019515073743,
      geo_longitude: latLang?.longitude || 77.06804049612484,
    },
    validationSchema: AddressSchema,
    validateOnBlur: false,
    onSubmit: values => {
      handleSetLoading(true);
      if (router?.query?.id) {
        editAddressHandler({ data: { ...values, id: router?.query?.id }, moveToConciergeBack });
      } else {
        addAddressHandler({ data: { ...values }, moveToConciergeBack });
      }
    },
  });

  const getCurrentLocationData = useCallback(() => {
    if (autoCompleteRef.current) {
      autoCompleteRef.current.value = '';
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log('Geolocation success:', position);
        },
        error => {
          console.error('Geolocation error:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }

    getCurrentLocation()
      .then(coords => {
        const geo_latitude = coords.latitude;
        const geo_longitude = coords.longitude;
        return getAddressFromLatLng(geo_latitude, geo_longitude);
      })
      .then(place => {
        const geo_latitude = place.geometry?.location?.lat();
        const geo_longitude = place.geometry?.location?.lng();
        setLatLang({ latitude: geo_latitude, longitude: geo_longitude, addressName: place?.formatted_address });

        let city = '';
        let state = '';
        let country = '';
        let pincode = '';
        for (let i = 0; i < place?.address_components?.length; i++) {
          const addressType = place?.address_components[i]?.types[0];
          if (addressType == 'locality') {
            city = place?.address_components[i]?.long_name;
          }
          if (addressType == 'administrative_area_level_1') {
            state = place?.address_components[i]?.long_name;
          }
          if (addressType == 'country') {
            country = place?.address_components[i]?.long_name;
          }
          if (addressType == 'postal_code') {
            pincode = place?.address_components[i]?.long_name;
          }
        }
        addressFormik.setValues({
          address_line_1: '',
          geo_latitude,
          geo_longitude,
          city,
          state,
          country,
          pincode,
        });
      })
      .catch(() => {
        // Handle the error
      });
  }, [addressFormik]);

  const onPlaceSelected = useCallback(
    place => {
      setInfoWindowShow(true);
      const geo_latitude = place.geometry?.location?.lat();
      const geo_longitude = place.geometry?.location?.lng();
      let city = '';
      let state = '';
      let country = '';
      let pincode = '';
      setLatLang({ latitude: geo_latitude, longitude: geo_longitude, addressName: place?.name });
      for (let i = 0; i < place?.address_components?.length; i++) {
        const addressType = place?.address_components[i]?.types[0];
        if (addressType == 'locality') {
          city = place?.address_components[i]?.long_name;
        }
        if (addressType == 'administrative_area_level_1') {
          state = place?.address_components[i]?.long_name;
        }
        if (addressType == 'country') {
          country = place?.address_components[i]?.long_name;
        }
        if (addressType == 'postal_code') {
          pincode = place?.address_components[i]?.long_name;
        }
      }
      addressFormik.setValues({
        geo_latitude,
        geo_longitude,
        city,
        state,
        country,
        pincode,
      });
    },
    [addressFormik]
  );

  useEffect(() => {
    if (router?.query?.id) {
      find(conciergeData?.addressData?.data, item => {
        if (isEqual(item?.default, true)) {
          addressFormik.setValues({
            address_line_1: item?.address_line_1,
            state: item?.state,
            city: item?.city,
            country: item?.country,
            pincode: item?.pincode,
            landmark: item?.landmark,
            geo_latitude: item?.geo_latitude,
            geo_longitude: item?.geo_longitude,
          });
        }
        setLatLang({
          latitude: item?.geo_latitude,
          longitude: item?.geo_longitude,
          addressName: item?.address_line_1,
        });
      });
    } else {
      getCurrentLocationData();
    }
  }, [router]);

  useEffect(() => {
    const checkCookies = () => {
      const cookies = document.cookie;
      if (!cookies) {
        router.push('/enterprise/kotak/login?enterprise=kotak');
      }
    };

    checkCookies();

    const interval = setInterval(checkCookies, 500);

    return () => clearInterval(interval);
  }, [router]);

  const runError = useCallback(() => {
    if (!isEmpty(addressFormik?.errors)) {
      toast.error(
        addressFormik?.errors?.address_line_1 ||
          addressFormik?.errors?.state ||
          addressFormik?.errors?.city ||
          addressFormik?.errors?.country ||
          addressFormik?.errors?.pincode ||
          addressFormik?.errors?.landmark,
        {
          autoClose: CONSTANTS.TOAST_AUTOCLOSE_TIMEOUT,
          draggable: false,
        }
      );
    }
  }, [addressFormik?.errors]);
  return (
    <>
      <HeaderBar backgroundColor={'#000000'} />
      {matches && (
        <div style={{ marginTop: '11rem' }}>
          <HomePageBox
            position={{ xs: 'absolute', md: 'absolute' }}
            margin={{ xs: '19rem 0 0 11.8rem', md: '43rem 0 0 46.5rem' }}
            zIndex={{ xs: '999', md: '999' }}
            cursor="pointer"
            justifyContent="center"
            alignItem="center">
            <HomePageBox
              padding={{ xs: '0.75rem 0.938rem', md: '0.9rem 0.13rem' }}
              onClick={() => getCurrentLocationData()}
              display="flex"
              justifyContent="center"
              alignItem="center"
              width={{ xs: '18', md: '22rem' }}
              borderRadius={{ xs: '2.125rem', md: '2.688rem' }}
              backgroundColor={{
                xs: '#CC4746',
                md: '#CC4746',
              }}
              flexDirection="row">
              <ButtonIconContainer>
                <Image src={'/static/images/my_location.webp'} fill />
              </ButtonIconContainer>

              <HomePageText
                padding={{ xs: '0 0 0 0.6rem', md: '0 0 0 1.875rem' }}
                fontSize={{ xs: '1.3rem ', md: '1.7rem' }}
                lineHeight={{ xs: '1.573rem', md: '2.029rem' }}
                letterSpacing={{ xs: '-0.04rem', md: '-0.04rem' }}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                borderRadius={{ xs: '6.1rem', md: '3.5rem' }}
                color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
                fontWeight={{ xs: 500, md: 600 }}>
                Detect my location
              </HomePageText>
            </HomePageBox>
          </HomePageBox>
          <GoogleMap
            zoom={14}
            containerStyle={mapStyle}
            latLang={latLang}
            setInfoWindowShow={setInfoWindowShow}
            infoWindowShow={infoWindowShow}
          />
        </div>
      )}
      <MainContainer>
        <Container maxWidth="lg">
          {!matches && (
            <>
              <HomePageBox
                position={{ xs: 'absolute', md: 'absolute' }}
                margin={{ xs: '13.1rem 0 0 10rem', md: '43rem 0 0 46.5rem' }}
                zIndex={{ xs: '999', md: '999' }}
                cursor="pointer"
                justifyContent="center"
                alignItem="center">
                <HomePageBox
                  padding={{ xs: '0.75rem 0.938rem', md: '0.9rem 0.13rem' }}
                  onClick={() => getCurrentLocationData()}
                  display="flex"
                  justifyContent="center"
                  alignItem="center"
                  width={{ xs: '18', md: '22rem' }}
                  borderRadius={{ xs: '2.125rem', md: '2.688rem' }}
                  backgroundColor={{
                    xs: '#CC4746',
                    md: '#CC4746',
                  }}
                  flexDirection="row">
                  <ButtonIconContainer>
                    <Image src={'/static/images/my_location.webp'} fill />
                  </ButtonIconContainer>

                  <HomePageText
                    padding={{ xs: '0 0 0 0.6rem', md: '0 0 0 1.875rem' }}
                    fontSize={{ xs: '1.3rem ', md: '1.7rem' }}
                    lineHeight={{ xs: '1.573rem', md: '2.029rem' }}
                    letterSpacing={{ xs: '-0.04rem', md: '-0.04rem' }}
                    textTransform={{ xs: 'none !important', md: 'none !important' }}
                    borderRadius={{ xs: '6.1rem', md: '3.5rem' }}
                    color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
                    fontWeight={{ xs: 500, md: 600 }}>
                    Detect my location
                  </HomePageText>
                </HomePageBox>
              </HomePageBox>
              <GoogleMap
                zoom={14}
                containerStyle={mapStyle}
                latLang={latLang}
                setInfoWindowShow={setInfoWindowShow}
                infoWindowShow={infoWindowShow}
              />
            </>
          )}

          <HomePageBox padding={{ xs: '1.889rem 0', md: '1.25rem 0 6.391rem 0' }}>
            <HomePageBox padding={{ xs: '0 0 0 0', md: '0 0 0 0' }}>
              <HomePageText
                padding={{ xs: '0 0 0.5rem 0.514rem', md: '0 0 0.904rem 1.875rem' }}
                fontSize={{ xs: '1.32rem', md: '2.2rem' }}
                lineHeight={{ xs: '1.147rem', md: '3.8rem' }}
                letterSpacing={{ xs: '-1%', md: '-1%' }}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                color={{
                  xs: '#000000',
                  md: '#000000',
                }}
                fontWeight={{ xs: '500', md: '500' }}>
                Locality
              </HomePageText>
              <AutoCompleteWrapper>
                <Autocomplete
                  apiKey="AIzaSyC5i2xBMc10GAeGvEjq58C5CrvVkPEZFbY"
                  onPlaceSelected={onPlaceSelected}
                  libraries={['places']}
                  ref={autoCompleteRef}
                  options={{
                    fields: ['address_components', 'geometry', 'icon', 'name', 'formatted_address'],
                    types: ['establishment', 'geocode'],
                  }}
                />
                <AutoCompleteSearchIcon>
                  <Image fill src={'/static/images/search.webp'} />
                </AutoCompleteSearchIcon>
              </AutoCompleteWrapper>
            </HomePageBox>
            <HomePageBox padding={{ xs: '1.25rem 0 0 0', md: '1.25rem 0 0 0' }}>
              <HomePageText
                padding={{ xs: '0 0 0.5rem 0.514rem', md: '0 0 0.904rem 1.875rem' }}
                fontSize={{ xs: '1.32rem', md: '2.2rem' }}
                lineHeight={{ xs: '1.147rem', md: '3.8rem' }}
                letterSpacing={{ xs: '-1%', md: '-1%' }}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                color={{
                  xs: '#000000',
                  md: '#000000',
                }}
                fontWeight={{ xs: '500', md: '500' }}>
                Address
              </HomePageText>
              <CustomInput
                name="address_line_1"
                value={addressFormik?.values?.address_line_1}
                type="text"
                onChange={addressFormik.handleChange}
                margin="1rem 0"
                placeholder="Full address"
                error={addressFormik?.errors.address_line_1}
              />
            </HomePageBox>
            <HomePageBox padding={{ xs: '1.25rem 0 0 0', md: '1.25rem 0 0 0' }}>
              <HomePageText
                padding={{ xs: '0 0 0.5rem 0.514rem', md: '0 0 0.904rem 1.875rem' }}
                fontSize={{ xs: '1.32rem', md: '2.2rem' }}
                lineHeight={{ xs: '1.147rem', md: '3.8rem' }}
                letterSpacing={{ xs: '-1%', md: '-1%' }}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                color={{
                  xs: '#000000',
                  md: '#000000',
                }}
                fontWeight={{ xs: '500', md: '500' }}>
                Pincode
              </HomePageText>
              <CustomInput
                name="pincode"
                value={addressFormik?.values?.pincode}
                type="text"
                onChange={addressFormik.handleChange}
                margin="1rem 0"
                placeholder="Pincode"
                error={addressFormik?.errors?.pincode}
              />
            </HomePageBox>
            <HomePageBox padding={{ xs: '1.25rem 0 0 0', md: '1.25rem 0 0 0' }}>
              <HomePageText
                padding={{ xs: '0 0 0.5rem 0.514rem', md: '0 0 0.904rem 1.875rem' }}
                fontSize={{ xs: '1.32rem', md: '2.2rem' }}
                lineHeight={{ xs: '1.147rem', md: '3.8rem' }}
                letterSpacing={{ xs: '-1%', md: '-1%' }}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                color={{
                  xs: '#000000',
                  md: '#000000',
                }}
                fontWeight={{ xs: '500', md: '500' }}>
                Landmark
              </HomePageText>
              <CustomInput
                name="landmark"
                value={addressFormik?.values?.landmark}
                type="text"
                onChange={addressFormik.handleChange}
                margin="1rem 0"
                placeholder="Landmark"
                error={addressFormik?.errors?.landmark}
              />
            </HomePageBox>
            <HomePageBox padding={{ xs: '1.25rem 0 0 0', md: '1.25rem 0 0 0' }}>
              <HomePageText
                padding={{ xs: '0 0 0.5rem 0.514rem', md: '0 0 0.904rem 1.875rem' }}
                fontSize={{ xs: '1.32rem', md: '2.2rem' }}
                lineHeight={{ xs: '1.147rem', md: '3.8rem' }}
                letterSpacing={{ xs: '-1%', md: '-1%' }}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                color={{
                  xs: '#000000',
                  md: '#000000',
                }}
                fontWeight={{ xs: '500', md: '500' }}>
                Country
              </HomePageText>
              <CustomInput
                name="country"
                value={addressFormik?.values?.country}
                type="text"
                margin="1rem 0"
                placeholder="Country"
                error={addressFormik?.errors?.country}
              />
            </HomePageBox>
            <Grid container>
              <CityContainer item md={5.77} sm={5.77} xs={5.77}>
                <HomePageBox padding={{ xs: '1.25rem 0 0 0', md: '1.25rem 0 0 0' }}>
                  <HomePageText
                    padding={{ xs: '0 0 0.5rem 0.514rem', md: '0 0 0.904rem 1.875rem' }}
                    fontSize={{ xs: '1.32rem', md: '2.2rem' }}
                    lineHeight={{ xs: '1.147rem', md: '3.8rem' }}
                    letterSpacing={{ xs: '-1%', md: '-1%' }}
                    textTransform={{ xs: 'none !important', md: 'none !important' }}
                    color={{
                      xs: '#000000',
                      md: '#000000',
                    }}
                    fontWeight={{ xs: '500', md: '500' }}>
                    City
                  </HomePageText>
                  <CustomInput
                    name="city"
                    value={addressFormik?.values?.city}
                    type="text"
                    margin="1rem 0"
                    placeholder="City"
                    error={addressFormik?.errors?.city}
                  />
                </HomePageBox>
              </CityContainer>
              <Grid size md={5.77} sm={5.77} xs={5.77}>
                <HomePageBox padding={{ xs: '1.25rem 0 0 0', md: '1.25rem 0 0 0' }}>
                  <HomePageText
                    padding={{ xs: '0 0 0.5rem 0.514rem', md: '0 0 0.904rem 1.875rem' }}
                    fontSize={{ xs: '1.32rem', md: '2.2rem' }}
                    lineHeight={{ xs: '1.147rem', md: '3.8rem' }}
                    letterSpacing={{ xs: '-1%', md: '-1%' }}
                    textTransform={{ xs: 'none !important', md: 'none !important' }}
                    color={{
                      xs: '#000000',
                      md: '#000000',
                    }}
                    fontWeight={{ xs: '500', md: '500' }}>
                    State
                  </HomePageText>
                  <CustomInput
                    name="state"
                    value={addressFormik?.values?.state}
                    type="text"
                    margin="1rem 0"
                    placeholder="State"
                    error={addressFormik?.errors?.state}
                  />
                </HomePageBox>
              </Grid>
            </Grid>
          </HomePageBox>
        </Container>
      </MainContainer>
      <HomePageBox display="flex" justifyContent="center" margin={{ xs: '1.905rem 0 5.905rem 0', md: '6.156rem 0' }}>
        <HomePageButton
          hover={{ opacity: '1' }}
          boxShadow="none"
          onClick={() => {
            if (isFromKotak) {
              updateToggle('addressList');
            } else {
              addressFormik.resetForm();
              moveToConciergeBack();
            }
          }}
          textTransform={{ xs: 'none !important', md: 'none !important' }}
          fontSize={{ xs: '1.3rem ', md: '2.2rem' }}
          lineHeight={{ xs: '1.573rem', md: '2.663rem' }}
          padding={{ xs: '0.906rem 1.926rem', md: '1.125rem 2.25rem' }}
          borderRadius={{ xs: '6.1rem', md: '3.5rem' }}
          backgroundColor={{ xs: '#ffffff', md: '#ffffff' }}
          color={{ xs: '#1C1B1F', md: '#1C1B1F' }}
          fontWeight={{ xs: 500, md: 600 }}>
          Cancel
        </HomePageButton>
        <HomePageButton
          hover={{ opacity: '1' }}
          boxShadow="none"
          onClick={() => {
            addressFormik.submitForm();
            runError();
          }}
          textTransform={{ xs: 'none !important', md: 'none !important' }}
          fontSize={{ xs: '1.3rem ', md: '2.2rem' }}
          lineHeight={{ xs: '1.573rem', md: '2.663rem' }}
          padding={{ xs: '0.906rem 1.926rem', md: '1.125rem 2.25rem' }}
          borderRadius={{ xs: '6.1rem', md: '3.5rem' }}
          margin={{ xs: '0 0 0 0.25rem', md: '0 0 0 3.125rem' }}
          fontWeight={{ xs: 500, md: 600 }}>
          Save
        </HomePageButton>
      </HomePageBox>
      {!isFromKotak && !router.asPath.includes('medibuddy') && <Footer />}
    </>
  );
}

AddAddress.propTypes = {
  ...AddAddress,
};

const mapStateToProps = createStructuredSelector({
  addAddress: makeSelectAddAddress(),
  conciergeData: makeSelectConciergeCalendar(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    addAddressHandler: payload => dispatch(addAddress(payload)),
    editAddressHandler: payload => dispatch(editAddress(payload)),
    handleSetLoading: payload => dispatch(setLoading(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(AddAddress);
