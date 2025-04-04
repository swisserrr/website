import React from 'react';
import HeaderBar from 'components/HeaderBar';
import HomePageImage from 'components/HomePageImage';
import PageNotFound from '../../public/static/images/page-not-found.webp';
import HomePageBox from 'components/HomePageBox';
import HomePageButton from 'components/HomePageButton';
import { useRouter } from 'next/router';
const Notfound = () => {
  const router = useRouter();
  return (
    <>
      <HeaderBar textColor="white" backgroundColor={'#1a1a1a'} />
      <HomePageBox
        display="flex"
        flexDirection="column"
        height={{ xs: '100vh', md: '100vh' }}
        width={{ xs: '100%', md: '100%' }}
        justifyContent="space-between"
        alignItems="center">
        <HomePageBox
          backgroundColor={{
            xs: '#FFFFFF',
            md: '#FFFFFF',
          }}
          height={{ xs: '100vh', md: '100vh' }}
          display="flex"
          justifyContent="center"
          marginTop={{ xs: '8rem', md: '8rem' }}
          alignItems="center"
          // height={{ xs: '70vh', md: '80vh' }}
        >
          <HomePageBox width={{ xs: '90%', md: '30%' }}>
            <HomePageImage src={PageNotFound} width="100%" height="100%" />
          </HomePageBox>
        </HomePageBox>

        <HomePageBox
          width={{ xs: '100%', md: '100%' }}
          boxShadow={{
            xs: '4px 0px 50px rgba(0, 0, 0, 0.1);',
            md: '4px 0px 50px rgba(0, 0, 0, 0.1);',
          }}
          display="flex"
          justifyContent="center"
          padding={{
            xs: '4.8rem 0rem',
            md: '5rem 0rem',
          }}>
          <HomePageButton
            padding={{
              xs: '1.2rem 3rem',
              md: '1.2rem 3rem',
            }}
            lineHeight={{
              xs: '1.8rem',
              md: '2.1rem',
            }}
            onClick={() => router.push('/')}
            backgroundColor={{ xs: '#1A1A1A', md: '#1A1A1A' }}
            fontWeight={{
              xs: '400',
              md: '400',
            }}
            fontSize={{
              xs: '1.5rem',
              md: '1.7rem',
            }}
            borderRadius={{ xs: '50px', md: '50px' }}>
            Go back to homepage
          </HomePageButton>
        </HomePageBox>
      </HomePageBox>
    </>
  );
};

export default Notfound;
