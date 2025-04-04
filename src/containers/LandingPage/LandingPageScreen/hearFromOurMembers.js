import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import get from 'lodash/get';
import map from 'lodash/map';
import { CarouselMainContainer, MembersContainer } from './styles';
import Image from 'utils/CustomImage';
import HearFromOurMembers from 'components/HearFromOurMembers';
import CarouselContainer from 'components/CarouselContainer';
import HomePageBox from 'components/HomePageBox';
import HomePageText from 'components/HomePageText';

const HearFromOurMembersSection = ({ data }) => {
  const refer = useRef();
  return (
    <>
      {get(data, 'is_visible') && (
        <>
          <HomePageBox backgroundColor={{ xs: '#CC4746', md: '#CC4746' }} overflow="hidden">
            <Container
              maxWidth="lg"
              style={{ position: 'relative' }}
              sx={{ padding: { md: '120px 0 100px 0', xs: '10px 0' } }}>
              <HomePageBox padding={{ xs: '2.3rem 0rem', md: '5rem 0rem' }}>
                <MembersContainer>
                  <HomePageBox
                    display="flex"
                    justifyContent="center"
                    padding={{ xs: '25px 0rem 30px 0rem', md: '0rem 0rem 5.0rem 0rem' }}>
                    <HomePageText
                      fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                      fontWeight={{ xs: '600', md: '600' }}
                      variant={'h2'}
                      color={{ xs: '#ffffff', md: '#ffffff' }}
                      lineHeight={{ xs: '2.7rem', md: '4.7rem' }}>
                      Hear From Our Members
                    </HomePageText>
                  </HomePageBox>
                </MembersContainer>
                <HomePageBox display="flex" flexDirection="row">
                  <HomePageBox
                    display={{ xs: 'none', md: 'flex' }}
                    width={{ xs: 'auto', md: '30vw !important' }}
                    margin={{ md: '0 70px 0 0' }}>
                    <HomePageBox
                      display="flex"
                      flexDirection="column"
                      height={{ xs: '100%', md: '100%' }}
                      justifyContent={{ xs: 'space-around', md: 'space-around' }}
                      padding={{ xs: '0rem 0rem 1.2rem 0rem', md: '0rem 0rem 5.0rem 0rem' }}>
                      <HomePageText
                        fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                        fontWeight={{ xs: '600', md: '600' }}
                        variant={'h2'}
                        width={{ md: '15vw' }}
                        textTransform={{ xs: 'none !important', md: 'none !important' }}
                        letterSpacing={{ xs: '-1.95px', md: '-1.95px' }}
                        color={{ xs: '#ffffff', md: '#ffffff' }}
                        lineHeight={{ xs: '3.4rem', md: '4.7rem' }}>
                        Hear from our members
                      </HomePageText>
                      <HomePageBox display="flex" flexDirection="row">
                        <div
                          style={{ width: 50, height: 50, position: 'relative', margin: '0 30px 0 0' }}
                          onClick={() => refer.current.slickPrev()}>
                          <Image
                            src="/static/images/arrow_circle_left.webp"
                            fill
                            alt="Cover Image"
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <div
                          style={{ width: 50, height: 50, position: 'relative' }}
                          onClick={() => refer.current.slickNext()}>
                          <Image
                            src="/static/images/arrow_circle_right.webp"
                            fill
                            alt="Cover Image"
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      </HomePageBox>
                    </HomePageBox>
                  </HomePageBox>
                  <CarouselMainContainer>
                    <CarouselContainer
                      sliderRef={refer}
                      nextArrrow={false}
                      dotsInMobile={false}
                      centerPadding="8%"
                      ArrrowInMobile={false}
                      prevArrow={false}>
                      {map(get(data, 'data'), (item, key) => (
                        <HearFromOurMembers data={item} key={key} />
                      ))}
                    </CarouselContainer>
                  </CarouselMainContainer>
                </HomePageBox>
              </HomePageBox>
            </Container>
          </HomePageBox>
        </>
      )}
    </>
  );
};

HearFromOurMembersSection.propTypes = {
  data: PropTypes.obj,
};

export default HearFromOurMembersSection;
