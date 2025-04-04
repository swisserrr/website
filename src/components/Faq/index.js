/* eslint-disable react/prop-types */
/**
 *
 * Faq
 *
 */

import React, { memo, useState } from 'react';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import get from 'lodash/get';
import map from 'lodash/map';
import split from 'lodash/split';
import filter from 'lodash/filter';
import replace from 'lodash/replace';
import isObject from 'lodash/isObject';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { CustomAccordion, CustomTabs, CustomList } from './styles';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import dynamic from 'next/dynamic';

const HomePageBox = dynamic(() => import('components/HomePageBox'));
const HomePageText = dynamic(() => import('components/HomePageText'));
function Faq({ data, singlePanel, isfromBusinessPartner, IndusIndEnterprise }) {
  const [value, setValue] = useState('General');
  const [expanded, setExpanded] = useState(false);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const handleClickAccordian = e => {
    if (isEqual(e, expanded)) {
      setExpanded(false);
    } else {
      setExpanded(e);
    }
  };

  function AnsObjectResolver(ans) {
    if (ans?.type === 'numeric') {
      return (
        <>
          <ListItem disablePadding>
            <HomePageText
              textTransform={{ xs: 'none !important', md: 'none !important' }}
              fontSize={{ xs: '1.3rem', md: '1.5rem' }}
              color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
              fontWeight={{ xs: '400', md: '400' }}
              lineHeight={{ xs: '16px', md: '18px' }}>
              {ans?.line1}
            </HomePageText>
          </ListItem>
          {map(ans?.options, (item, index) => (
            <ListItem disablePadding>
              <HomePageText
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                fontWeight={{ xs: '400', md: '400' }}
                lineHeight={{ xs: '16px', md: '18px' }}>
                {1 + index}. {item}
              </HomePageText>
            </ListItem>
          ))}
        </>
      );
    }
    if (ans?.type === 'alphabets') {
      return (
        <>
          <ListItem disablePadding>
            <HomePageText
              textTransform={{ xs: 'none !important', md: 'none !important' }}
              fontSize={{ xs: '1.3rem', md: '1.5rem' }}
              color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
              fontWeight={{ xs: '400', md: '400' }}
              lineHeight={{ xs: '16px', md: '18px' }}>
              {ans?.line1}
            </HomePageText>
          </ListItem>
          {map(ans?.options, (item, index) => (
            <ListItem disablePadding>
              <HomePageText
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                fontWeight={{ xs: '400', md: '400' }}
                lineHeight={{ xs: '16px', md: '18px' }}>
                {String.fromCharCode(97 + index)}. {item}
              </HomePageText>
            </ListItem>
          ))}
        </>
      );
    }
    if (ans?.type === 'steps') {
      return map(
        filter(split(ans?.line1, 'Step-'), item => !isEmpty(item)),
        item => (
          <ListItem disablePadding>
            <HomePageText
              textTransform={{ xs: 'none !important', md: 'none !important' }}
              fontSize={{ xs: '1.3rem', md: '1.5rem' }}
              color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
              fontWeight={{ xs: '400', md: '400' }}
              lineHeight={{ xs: '16px', md: '18px' }}>
              {`Step${item}`}
            </HomePageText>
          </ListItem>
        )
      );
    }
    if (ans?.type === 'options') {
      return map(ans, (item, index) => {
        if (item === 'options') return;
        return (
          <>
            <ListItem disablePadding>
              <HomePageText
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                fontWeight={{ xs: '400', md: '400' }}
                lineHeight={{ xs: '16px', md: '18px' }}>
                {`Option  ${replace(index, 'line', '')}`}
              </HomePageText>
            </ListItem>
            {map(
              filter(split(item, 'Step-'), item => !isEmpty(item)),
              item => {
                return (
                  <ListItem disablePadding>
                    <HomePageText
                      textTransform={{ xs: 'none !important', md: 'none !important' }}
                      fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                      color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                      fontWeight={{ xs: '400', md: '400' }}
                      lineHeight={{ xs: '16px', md: '18px' }}>
                      {`Step${item}`}
                    </HomePageText>
                  </ListItem>
                );
              }
            )}
          </>
        );
      });
    }
    if (ans?.type === 'paragraph') {
      return map(ans, item => {
        if (item === 'paragraph') return;
        return (
          <ListItem disablePadding>
            <HomePageText
              textTransform={{ xs: 'none !important', md: 'none !important' }}
              fontSize={{ xs: '1.3rem', md: '1.5rem' }}
              color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
              fontWeight={{ xs: '400', md: '400' }}
              lineHeight={{ xs: '16px', md: '18px' }}>
              {item}
            </HomePageText>
          </ListItem>
        );
      });
    }
    return;
  }

  function TabPanel(props) {
    return (
      <div
        role="tabpanel"
        hidden={get(props, 'value') !== get(props, 'index')}
        id={`simple-tabpanel-${get(props, 'index')}`}
        aria-labelledby={`simple-tab-${get(props, 'index')}`}>
        {get(props, 'value') === get(props, 'index') && (
          <Box sx={{ p: 3 }}>
            <Typography component={'span'}>{get(props, 'children')}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const FAQqueAns = ({ que, ans, uniqueKey }) => {
    return (
      <CustomAccordion
        expanded={expanded === uniqueKey}
        className="accorTitle"
        background={singlePanel ? '#f8f8f8' : null}
        onClick={() => handleClickAccordian(uniqueKey)}>
        <AccordionSummary
          expandIcon={expanded === uniqueKey ? <CloseIcon /> : <AddIcon />}
          className="accorTitle"
          aria-controls="panel1a-content"
          id="panel1a-header">
          <HomePageText
            textTransform={{ xs: 'none !important', md: 'none !important' }}
            color={expanded === uniqueKey && { xs: '#2447FF', md: '#2447FF' }}
            lineHeight={{ xs: '18px', md: '21px' }}
            fontSize={{ xs: '1.5rem', md: '1.7rem' }}
            fontWeight={{ xs: '500', md: '500' }}
            padding={expanded === uniqueKey && { xs: '0 !important', md: '0 !important' }}
            margin={{ xs: '0 10px 0 0', md: '0' }}>
            {que}
          </HomePageText>
        </AccordionSummary>
        <AccordionDetails className="accorDetail">
          <Typography component={'span'}>
            <CustomList>
              {!isObject(ans) ? (
                <HomePageText
                  textTransform={{ xs: 'none !important', md: 'none !important' }}
                  color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                  fontWeight={{ xs: '400', md: '400' }}
                  padding={{ xs: '0 !important', md: '0 !important' }}
                  lineHeight={{ xs: '18px', md: '21px' }}
                  fontSize={{ xs: '1.5rem', md: '1.7rem' }}>
                  {`${ans}`}
                </HomePageText>
              ) : (
                AnsObjectResolver(ans)
              )}
            </CustomList>
          </Typography>
        </AccordionDetails>
      </CustomAccordion>
    );
  };
  if (singlePanel) {
    return (
      <>
        {map(data, item => {
          return (
            <Grid justifyContent="space-between" size container>
              {map(item, (item_2, key_2) => {
                return (
                  <Grid
                    key={key_2}
                    xs={12}
                    md={6}
                    size
                    padding={{ xs: '0.5rem 1rem 0rem 1rem', md: '0rem 1rem 0rem 1rem' }}>
                    <div className="tabText">
                      <FAQqueAns uniqueKey={key_2} que={get(item_2, 'faq_ques')} ans={get(item_2, 'faq_ans')} />
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          );
        })}
      </>
    );
  }

  if (IndusIndEnterprise) {
    return (
      <>
        {map(data, item => {
          return (
            <Grid alignItems="center" flexDirection="column" justifyContent="space-between" size container>
              {map(item, (item_2, key_2) => {
                return (
                  <Grid
                    key={key_2}
                    xs={12}
                    md={6}
                    size
                    padding={{ xs: '0.5rem 1rem 0rem 1rem', md: '0rem 1rem 0rem 1rem' }}>
                    <div className="tabText">
                      <FAQqueAns uniqueKey={key_2} que={get(item_2, 'faq_ques')} ans={get(item_2, 'faq_ans')} />
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          );
        })}
      </>
    );
  }

  return (
    <>
      <HomePageBox width={{ xs: '100%', md: isfromBusinessPartner ? '70%' : '100%' }}>
        {!isfromBusinessPartner && (
          <HomePageBox display="flex" justifyContent="center">
            <CustomTabs
              sx={{ display: 'flex', justifyContent: 'center' }}
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example">
              {map(data, (item, key) => (
                <Tab key={key} value={key} label={key} />
              ))}
            </CustomTabs>
          </HomePageBox>
        )}

        {map(data, (item, key) => {
          if (isfromBusinessPartner) {
            return (
              <Grid key={key} xs={12} md={6} size padding={{ xs: '1rem 1rem 1rem 1rem', md: '0rem 1rem 0rem 1rem' }}>
                <div className="tabText">
                  <FAQqueAns uniqueKey={key} que={get(item, 'faq_ques')} ans={get(item, 'faq_ans')} />
                </div>
              </Grid>
            );
          } else {
            return (
              <TabPanel key={key} value={value} index={key}>
                <Grid justifyContent="space-between" size container>
                  {map(item, (item_2, key_2) => {
                    return (
                      <Grid
                        key={key_2}
                        xs={12}
                        md={6}
                        size
                        padding={{ xs: '1rem 1rem 1rem 1rem', md: '0rem 1rem 0rem 1rem' }}>
                        <div className="tabText">
                          <FAQqueAns uniqueKey={key_2} que={get(item_2, 'faq_ques')} ans={get(item_2, 'faq_ans')} />
                        </div>
                      </Grid>
                    );
                  })}
                </Grid>
              </TabPanel>
            );
          }
        })}
      </HomePageBox>
    </>
  );
}

Faq.propTypes = {
  data: PropTypes.object,
  singlePanel: PropTypes.bool,
};

export default memo(Faq);
