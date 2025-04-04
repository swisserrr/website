/**
 *
 * BpCard
 *
 */

import HomePageBox from 'components/HomePageBox';
import HomePageText from 'components/HomePageText';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import { Li } from './styles';

function BpCard({ heading, list, listNo }) {
  return (
    <HomePageBox display={'flex'} gap={{ xs: '1.5rem', md: '0rem' }}>
      <HomePageBox
        marginTop={{ md: '2rem', sm: '0rem', xs: '0rem' }}
        display={'flex'}
        flexDirection={{ md: 'column', sm: 'column', xs: 'column' }}
        alignItems={{ md: 'center', sm: 'center', xs: 'center' }}
        width={{ md: '10%', sm: '10%', xs: '10%' }}
        justifyContent={{ md: 'center', sm: 'center', xs: 'center' }}>
        <div
          style={{
            height: '4rem',
            width: '3rem',
            backgroundColor: '#CC4746',
            borderRadius: '10rem',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1rem',
            alignItems: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.5rem',
          }}>
          {listNo}
        </div>
        <div
          style={{
            height: '100%',
            width: '0.5rem',
            backgroundColor: '#CC4746',
          }}></div>
      </HomePageBox>
      <HomePageBox
        display="flex"
        flexDirection="column"
        gap={{ xs: '1rem', md: '0rem' }}
        width={{ md: '90%', sm: '90%', xs: '90%' }}>
        <HomePageText
          fontSize={{ xs: '1.6rem', sm: '1.6rem', md: '3.2rem' }}
          fontWeight={{ xs: '600' }}
          padding={{ md: '1rem 0 2rem 0rem' }}>
          {heading}
        </HomePageText>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <div
            style={{
              border: '1px solid',
              borderColor: ' #F6D3D2',
              borderRadius: '1rem',
              borderWidth: '1.5px',
              padding: '1rem 1rem 1rem 2rem',
              backgroundColor: '#FFFCF7',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}>
              {map(list, (item, index) => (
                <Li>
                  <HomePageText
                    // letterSpacing={{ xs: '3rem', md: '3rem' }}
                    padding={{ xs: '0', md: '0' }}
                    textTransform={{ xs: 'normal', md: 'normal' }}
                    lineHeight={{ xs: '2.1rem', md: '3rem' }}
                    fontSize={{ xs: '1.4rem', sm: '1.4rem', md: '2.0rem' }}>
                    <span
                      style={{
                        fontWeight: '600',
                      }}>
                      {item?.title}:{' '}
                    </span>
                    {item?.content}
                  </HomePageText>
                </Li>
              ))}
            </ul>
          </div>
        </div>
      </HomePageBox>
    </HomePageBox>
  );
}

BpCard.propTypes = {
  heading: PropTypes.string,
  list: PropTypes.array,
};

export default memo(BpCard);
