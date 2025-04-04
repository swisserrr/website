/**
 *
 * HomePageCarouselCard
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { useRouter } from 'next/router';

import { CustomDiv, Textforxs, Contents, LinkTag, ContainerMobileStyle } from './styles';
import HomePageBox from 'components/HomePageBox';
import HomePageText from 'components/HomePageText';
import HomePageButton from 'components/HomePageButton';
import ReactHtmlParser from 'react-html-parser';

function HomePageCarouselCard({ item, mohtv, imageToggle }) {
  const router = useRouter();

  const handleKnowMore = () => {
    if (mohtv) {
      router.push(`/showDetails/${get(item, 'meeting_details_uuid', '/')}`);
    } else {
      router.push(get(item, 'href', '/'));
    }
  };
  return (
    <LinkTag
      onClick={handleKnowMore}
      className="__container"
      margin={{ xs: '0rem 0rem', md: '0rem rem' }}
      padding={{ xs: '0rem 0rem', md: '0 0 1.5rem 0rem' }}
      width={{ xs: '100%', md: '95%' }}>
      <ContainerMobileStyle>
        <CustomDiv>
          <HomePageBox height={{ xs: '21rem', md: '35rem' }}>
            <img
              width="100%"
              height="100%"
              style={{ objectFit: `${imageToggle ? 'contain' : 'cover'}`, borderRadius: '2rem' }}
              src={get(item, 'meeting_thumbnail_image')}
            />
          </HomePageBox>
          <HomePageButton
            zIndex={1}
            opacity="1"
            position={{ xs: 'absolute', md: 'absolute' }}
            top={{ xs: '18px', md: '24px' }}
            borderRadius={{ xs: '40px', md: '40px' }}
            left={{ xs: '15px', md: '13px' }}
            fontSize={{ xs: '1.1rem', md: '1.1rem' }}
            textTransform={{ xs: 'capitalize', md: 'capitalize' }}
            color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
            backgroundColor={{ xs: '#ffffff', md: '#ffffff' }}>
            {get(item, 'meeting_topic', get(item, 'session_topic'))}
          </HomePageButton>
        </CustomDiv>

        <HomePageBox
          borderRadius={{ xs: '0 0 2rem 2rem', md: '0 0 2rem 2rem' }}
          backgroundColor={{ xs: 'transparent', md: 'transparent' }}>
          <HomePageText
            overflow={{ xs: 'hidden', md: 'hidden' }}
            letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
            fontWeight={{ xs: '600', md: '600' }}
            className="truncate"
            textTransform={{ xs: 'none !important', md: 'none !important' }}
            fontSize={{ xs: '1.7rem', md: '2.2rem' }}
            padding={{ xs: '1.4rem 0', md: '2.8rem 2rem' }}>
            {mohtv ? (
              <Textforxs className="truncate">{get(item, 'session_description')}</Textforxs>
            ) : (
              <Textforxs className="truncate">{ReactHtmlParser(get(item, 'session_description'))}</Textforxs>
            )}
          </HomePageText>
          <Contents>
            <HomePageButton
              onClick={handleKnowMore}
              className="xs-text"
              letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
              margin={{ xs: '0 0 8px 0', md: '2rem 2rem 1rem 2rem' }}
              padding={{ xs: '15px 30px', md: '22px 36px' }}
              borderRadius={{ xs: '40px' }}
              fontSize={{ xs: '1.3rem !important', md: '1.7rem' }}
              height={{ xs: '4rem', md: '4rem' }}
              textTransform={{ xs: 'none !important', md: 'none !important' }}>
              {mohtv ? 'Watch Now' : 'Read More'}
            </HomePageButton>
          </Contents>
        </HomePageBox>
      </ContainerMobileStyle>
    </LinkTag>
  );
}

HomePageCarouselCard.propTypes = {
  item: PropTypes.object,
  mohtv: PropTypes.object,
  imageToggle: PropTypes.bool,
};

export default memo(HomePageCarouselCard);
