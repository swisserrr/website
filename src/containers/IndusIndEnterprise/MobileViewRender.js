import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { config_exclusive_discount, config_services } from './dataConfig';
import MuiContainer from '@mui/material/Container';
import { OnlyDiv, SubContainer, CardImage, MobileCardWrapper } from './styles';
import HomePageText from 'components/HomePageText';
import { get, map } from 'lodash';
import index from 'components/StepsToStartElderCare';

const MobileViewRender = () => {
  const matchesXSM = useMediaQuery('(max-width:400px)');

  const renderCard = ({ data, dimension, exclusive }) => {
    return (
      <MobileCardWrapper>
        <OnlyDiv
          style={{
            height: get(dimension, 'height'),
            width: get(dimension, 'width'),
          }}>
          <CardImage src={`${get(data, 'mobileImage')}`} />
        </OnlyDiv>

        <OnlyDiv style={{ padding: '1rem 1.5rem' }}>
          <HomePageText
            variant={'h1'}
            fontSize={{
              xs: '2rem',
            }}
            padding={{ xs: '0rem 1.5rem' }}
            letterSpacing={{ xs: '-0.04em' }}
            margin={{ xs: '1.5rem 0' }}
            fontWeight={{ xs: '600' }}
            textAlign={{ xs: 'center' }}
            width={{
              xs: '100%',
            }}
            lineHeight={{ xs: '2.4rem' }}>
            {exclusive ? get(data, 'title') : get(data, 'titleLineOne') + ' ' + get(data, 'titleLineTwo')}
          </HomePageText>
          <HomePageText
            width={{
              xs: '100%',
            }}
            variant={'h2'}
            textTransform={{ xs: 'normal' }}
            padding={{ xs: '0rem 1rem' }}
            fontSize={{ xs: '1.4rem' }}
            letterSpacing={{ xs: '-0.04em' }}
            lineHeight={{ xs: '1.6rem' }}
            textAlign={{ xs: 'center' }}
            margin={{ xs: '1.5rem 0' }}
            fontWeight={{ xs: '400' }}>
            {get(data, 'description')}
          </HomePageText>
        </OnlyDiv>
      </MobileCardWrapper>
    );
  };

  return (
    <>
      <OnlyDiv
        style={{
          width: '100%',
          backgroundColor: '#F4F1EB',
        }}>
        <MuiContainer
          sx={{
            height: { xs: '100%' },
            display: { xs: 'flex' },
            alignItems: { xs: 'center' },
            zIndex: { xs: 1 },
          }}>
          <SubContainer>
            <OnlyDiv style={{ padding: '3rem 0rem' }}>
              <HomePageText
                variant={'h1'}
                fontSize={{ xs: '2.4rem' }}
                letterSpacing={{ xs: '-0.04em' }}
                margin={{ xs: '1.5rem 0' }}
                fontWeight={{ xs: '600' }}
                textAlign={{ xs: 'center' }}
                width={{ xs: '100%' }}
                lineHeight={{ xs: '2.9rem' }}>
                Care Services Designed Just for You
              </HomePageText>
            </OnlyDiv>
            {map(config_services, (data, index) => {
              return (
                <OnlyDiv key={data.titleLineOne} style={{ marginBottom: '3rem' }}>
                  {renderCard({
                    data: data,
                    dimension: {
                      width: '100%',
                      height: '23rem',
                    },
                  })}
                </OnlyDiv>
              );
            })}
          </SubContainer>
        </MuiContainer>
      </OnlyDiv>

      <OnlyDiv
        style={{
          width: '100%',
          backgroundColor: '#F8F8F8',
        }}>
        <MuiContainer
          sx={{
            height: { xs: '100%' },
            display: { xs: 'flex' },
            alignItems: { xs: 'center' },
            zIndex: { xs: 1 },
          }}>
          <SubContainer>
            <OnlyDiv style={{ padding: '3rem 0rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <HomePageText
                variant={'h1'}
                fontSize={{ xs: '2.4rem' }}
                letterSpacing={{ xs: '-0.04em' }}
                margin={{ xs: '1.5rem 0' }}
                fontWeight={{ xs: '600' }}
                textAlign={{ xs: 'center' }}
                width={{ xs: '70%' }}
                lineHeight={{ xs: '2.9rem' }}>
                Exclusive Discounts Just for You
              </HomePageText>
              <HomePageText
                variant={'h2'}
                fontSize={{ xs: '1.5rem' }}
                letterSpacing={{ xs: '-0.02em' }}
                margin={{ xs: '1.5rem' }}
                fontWeight={{ xs: '400' }}
                textAlign={{ xs: 'center' }}
                width={{ xs: '90%' }}
                lineHeight={{ xs: '1.8rem' }}>
                Use your Indus Care debit card on the Emoha App to get exciting discounts on Emoha memberships, nurses,
                attendants, care services, and more.
              </HomePageText>
            </OnlyDiv>

            {map(config_exclusive_discount, data => {
              return (
                <OnlyDiv key={data.titleLineOne} style={{ marginBottom: '3rem' }}>
                  {renderCard({
                    data: data,
                    dimension: {
                      width: '100%',
                      height: '16rem',
                    },
                    exclusive: true,
                  })}
                </OnlyDiv>
              );
            })}
          </SubContainer>
        </MuiContainer>
      </OnlyDiv>
    </>
  );
};

export default MobileViewRender;
