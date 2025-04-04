/**
 *
 * PlansContainer
 *
 */
import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import map from 'lodash/map';
import toLower from 'lodash/toLower';
import isEqual from 'lodash/isEqual';
import split from 'lodash/split';
import useMediaQuery from '@mui/material/useMediaQuery';
import dynamic from 'next/dynamic';

import { Container, Heading, HeadingContainer } from './styles';
const PlansBenefitCard = dynamic(() => import('components/PlansBenefitCard'));
function PlansContainer({ data, activePlan, changesFromCorporate, from }) {
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <Container>
      {map(
        data,
        (user, index) =>
          isEqual(toLower(get(user, 'category')), toLower(activePlan)) && (
            <Grid container key={index}>
              <HeadingContainer>
                <Grid size lg={12} md={12} sm={12} xs={12}>
                  <>
                    {from && (
                      <Heading matches={matches}>{`${split(get(user, 'plan[0].name'), ' ')[0]} ${from}`}</Heading>
                    )}
                    {!from && (
                      <Heading matches={matches}>{`${split(get(user, 'plan[0].name'), ' ')[0]} Benefits`}</Heading>
                    )}
                  </>
                </Grid>
              </HeadingContainer>
              <PlansBenefitCard data={get(user, 'plan[0].plan_services')} changesFromCorporate={changesFromCorporate} />
            </Grid>
          )
      )}
    </Container>
  );
}

PlansContainer.propTypes = {
  addMoreData: PropTypes.func,
  data: PropTypes.array,
  changesFromCorporate: PropTypes.bool,
  setViewAllTopic: PropTypes.func,
  activePlan: PropTypes.string,
  from: PropTypes.string,
};

export default PlansContainer;
