import React from 'react';
import {
  AboutUsText,
  AboutSection,
  HtmlContainer,
  LeftContainer,
  RightContainer,
  TextAbout,
  AboutSectionFlip,
} from './styles';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import get from 'lodash/get';
import Image from 'utils/CustomImage';
import HomePageButton from 'components/HomePageButton';
import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';

const AboutUsContainer = ({ data, changePosition, red }) => {
  const matches = useMediaQuery('(max-width:905px)');
  const router = useRouter();
  if (red) {
    return (
      <AboutSection id="about">
        <Grid container>
          {!changePosition ? (
            <>
              <Grid
                position="relative"
                item
                sm={6}
                xs={12}
                height={{
                  xs: '100%',
                  md: '100%',
                }}>
                <LeftContainer changePosition style={{ position: 'relative', height: '100%' }}>
                  <Image
                    src={get(data, 'image')}
                    width={5000}
                    height={5000}
                    quality={70}
                    style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                  />
                </LeftContainer>
              </Grid>
              <Grid
                item
                sm={6}
                xs={12}
                padding={{ xs: '0', sm: '50px 20px' }}
                display="flex"
                flexDirection="column"
                justifyContent="space-between">
                <RightContainer changePosition style={{ margin: '0 20px 0 0' }}>
                  <AboutUsText red>{get(data, 'title', 'N/A')}</AboutUsText>
                  <TextAbout>Your extended family</TextAbout>
                  <HtmlContainer>{get(data, 'description', 'N/A')}</HtmlContainer>
                  <HtmlContainer>{get(data, 'description1', 'N/A')}</HtmlContainer>
                </RightContainer>
                <div>
                  {!matches ? (
                    <HomePageButton
                      hover={{ opacity: '1' }}
                      boxShadow="none"
                      onClick={() => {
                        router.push(get(data, 'redirect', '/'));
                      }}
                      backgroundColor={{
                        xs: 'transparent',
                        md: 'transparent',
                      }}
                      color={{
                        xs: '#DA504A',
                        md: '#DA504A',
                      }}
                      border={{
                        xs: '2px solid #DA504A',
                        md: '2px solid #DA504A',
                      }}
                      borderWidth={{ xs: 2, md: 2 }}
                      textTransform={{ xs: 'none !important', md: 'none !important' }}
                      fontSize={{ xs: '1.5rem ', md: '2.2rem' }}
                      lineHeight={{ xs: '0.7rem', md: '2.7rem' }}
                      padding={{ xs: '1.5rem 3rem', md: '1.8rem 3.6rem' }}
                      borderRadius={{ xs: '6.1rem', md: '3.5rem' }}
                      fontWeight={{ xs: 500, md: 500 }}>
                      {get(data, 'button')}
                    </HomePageButton>
                  ) : null}
                </div>
              </Grid>
            </>
          ) : (
            <>
              <Grid
                item
                sm={6}
                xs={12}
                padding={{ xs: '0', sm: '0 20px' }}
                display="flex"
                flexDirection="column"
                justifyContent="space-between">
                <RightContainer changePosition style={{ margin: '0 20px 0 0' }}>
                  <AboutUsText toggle red>
                    {get(data, 'title', 'N/A')}
                  </AboutUsText>
                  <TextAbout>Your extended family</TextAbout>
                  <HtmlContainer>{get(data, 'description', 'N/A')}</HtmlContainer>
                  <HtmlContainer>{get(data, 'description1', 'N/A')}</HtmlContainer>
                </RightContainer>
                <div>
                  <HomePageButton
                    hover={{ opacity: '1' }}
                    boxShadow="none"
                    onClick={() => {
                      router.push(get(data, 'redirect', '/'));
                    }}
                    backgroundColor={{
                      xs: 'transparent',
                      md: 'transparent',
                    }}
                    color={{
                      xs: '#DA504A',
                      md: '#DA504A',
                    }}
                    border={{
                      xs: '2px solid #DA504A',
                      md: '2px solid #DA504A',
                    }}
                    borderWidth={{ xs: 2, md: 2 }}
                    textTransform={{ xs: 'none !important', md: 'none !important' }}
                    fontSize={{ xs: '1.5rem ', md: '2.2rem' }}
                    lineHeight={{ xs: '0.7rem', md: '2.7rem' }}
                    padding={{ xs: '2rem 2.5rem', md: '1.8rem 3.6rem' }}
                    borderRadius={{ xs: '6.1rem', md: '3.5rem' }}
                    margin={{ xs: '18px 0 30px 0', md: '0' }}
                    fontWeight={{ xs: 500, md: 500 }}>
                    {get(data, 'button')}
                  </HomePageButton>
                </div>
              </Grid>
              <Grid
                position="relative"
                item
                sm={6}
                xs={12}
                height={{
                  xs: '100%',
                  md: '100%',
                }}>
                <LeftContainer changePosition style={{ position: 'relative', height: '100%' }}>
                  <Image
                    src={get(data, 'image')}
                    width={5000}
                    height={5000}
                    quality={70}
                    style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                  />
                </LeftContainer>
              </Grid>
            </>
          )}
        </Grid>
      </AboutSection>
    );
  }
  if (changePosition) {
    return (
      <AboutSectionFlip id="about">
        <Grid container>
          <Grid
            position="relative"
            item
            sm={6}
            xs={12}
            height={{
              xs: '100%',
              md: '100%',
            }}>
            <RightContainer changePosition={changePosition} style={{ position: 'relative', height: '100%' }}>
              <Image
                src={get(data, 'image')}
                width={5000}
                height={5000}
                quality={70}
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
            </RightContainer>
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
            padding={{ xs: '0', sm: '50px 20px' }}
            display="flex"
            flexDirection="column"
            sx={{ position: 'relative', zIndex: 2 }}
            justifyContent="space-between">
            <LeftContainer style={{ margin: '0 20px 0 0' }}>
              <AboutUsText>{get(data, 'title', 'N/A')}</AboutUsText>
              <HtmlContainer>{get(data, 'description', 'N/A')}</HtmlContainer>
              <HtmlContainer>{get(data, 'description1', 'N/A')}</HtmlContainer>
            </LeftContainer>
            <div>
              {!matches ? (
                <HomePageButton
                  hover={{ opacity: '1' }}
                  boxShadow="none"
                  onClick={() => {
                    router.push(get(data, 'redirect', '/'));
                  }}
                  backgroundColor={{
                    xs: 'transparent',
                    md: 'transparent',
                  }}
                  zIndex={2}
                  color={{
                    xs: '#DA504A',
                    md: '#DA504A',
                  }}
                  border={{
                    xs: '2px solid #DA504A',
                    md: '2px solid #DA504A',
                  }}
                  borderWidth={{ xs: 2, md: 2 }}
                  textTransform={{ xs: 'none !important', md: 'none !important' }}
                  fontSize={{ xs: '1.5rem ', md: '2.2rem' }}
                  lineHeight={{ xs: '0.7rem', md: '2.7rem' }}
                  margin={{ md: '0 0 50px 0' }}
                  padding={{ xs: '1.5rem 3rem', md: '1.8rem 3.6rem' }}
                  borderRadius={{ xs: '6.1rem', md: '3.5rem' }}
                  fontWeight={{ xs: 500, md: 500 }}>
                  {get(data, 'button')}
                </HomePageButton>
              ) : null}
            </div>
          </Grid>
        </Grid>
        {matches ? (
          <HomePageButton
            hover={{ opacity: '1' }}
            boxShadow="none"
            onClick={() => {
              router.push(get(data, 'redirect', '/'));
            }}
            backgroundColor={{
              xs: '#f3f1eb',
              md: '#f3f1eb',
            }}
            zIndex={2}
            color={{
              xs: '#DA504A',
              md: '#DA504A',
            }}
            border={{
              xs: '2px solid #DA504A',
              md: '2px solid #DA504A',
            }}
            margin={{ xs: '18px 0 20px 0', md: '0' }}
            borderWidth={{ xs: 2, md: 2 }}
            textTransform={{ xs: 'none !important', md: 'none !important' }}
            fontSize={{ xs: '1.5rem ', md: '2.2rem' }}
            lineHeight={{ xs: '0.7rem', md: '2.7rem' }}
            padding={{ xs: '1.8rem 2.8rem', md: '1.8rem 3.6rem' }}
            borderRadius={{ xs: '6.1rem', md: '3.5rem' }}
            fontWeight={{ xs: 500, md: 500 }}>
            {get(data, 'button')}
          </HomePageButton>
        ) : null}
      </AboutSectionFlip>
    );
  }
  return (
    <AboutSection id="about">
      <Grid container>
        <Grid
          item
          sm={6}
          xs={12}
          padding={{ xs: '0', sm: '50px 20px' }}
          display="flex"
          flexDirection="column"
          justifyContent="space-between">
          <LeftContainer style={{ margin: '0 20px 0 0' }}>
            <AboutUsText>{get(data, 'title', 'N/A')}</AboutUsText>
            <HtmlContainer>{get(data, 'description', 'N/A')}</HtmlContainer>
            <HtmlContainer>{get(data, 'description1', 'N/A')}</HtmlContainer>
          </LeftContainer>
          <div>
            {!matches ? (
              <HomePageButton
                hover={{ opacity: '1' }}
                boxShadow="none"
                onClick={() => {
                  router.push(get(data, 'redirect', '/'));
                }}
                backgroundColor={{
                  xs: 'transparent',
                  md: 'transparent',
                }}
                color={{
                  xs: '#DA504A',
                  md: '#DA504A',
                }}
                border={{
                  xs: '2px solid #DA504A',
                  md: '2px solid #DA504A',
                }}
                borderWidth={{ xs: 2, md: 2 }}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                fontSize={{ xs: '1.5rem ', md: '2.2rem' }}
                lineHeight={{ xs: '0.7rem', md: '2.7rem' }}
                margin={{ md: '0 0 50px 0' }}
                padding={{ xs: '1.5rem 3rem', md: '1.8rem 3.6rem' }}
                borderRadius={{ xs: '6.1rem', md: '3.5rem' }}
                fontWeight={{ xs: 500, md: 500 }}>
                {get(data, 'button')}
              </HomePageButton>
            ) : null}
          </div>
        </Grid>
        <Grid
          position="relative"
          item
          sm={6}
          xs={12}
          height={{
            xs: '100%',
            md: '100%',
          }}>
          <RightContainer style={{ position: 'relative', height: '100%' }}>
            <Image
              src={get(data, 'image')}
              width={5000}
              height={5000}
              quality={70}
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            />
          </RightContainer>
        </Grid>
      </Grid>
      {matches ? (
        <HomePageButton
          hover={{ opacity: '1' }}
          boxShadow="none"
          onClick={() => {
            router.push(get(data, 'redirect', '/'));
          }}
          backgroundColor={{
            xs: 'transparent',
            md: 'transparent',
          }}
          color={{
            xs: '#DA504A',
            md: '#DA504A',
          }}
          border={{
            xs: '2px solid #DA504A',
            md: '2px solid #DA504A',
          }}
          margin={{ xs: '18px 0 20px 0', md: '0' }}
          borderWidth={{ xs: 2, md: 2 }}
          textTransform={{ xs: 'none !important', md: 'none !important' }}
          fontSize={{ xs: '1.5rem ', md: '2.2rem' }}
          lineHeight={{ xs: '0.7rem', md: '2.7rem' }}
          padding={{ xs: '1.5rem 3rem', md: '1.8rem 3.6rem' }}
          borderRadius={{ xs: '6.1rem', md: '3.5rem' }}
          fontWeight={{ xs: 500, md: 500 }}>
          {get(data, 'button')}
        </HomePageButton>
      ) : null}
    </AboutSection>
  );
};

AboutUsContainer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutUsContainer;
