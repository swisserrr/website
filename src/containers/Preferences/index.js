/**
 *
 * Preferences
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import MuiContainer from '@mui/material/Container';
import {
  BannerContainer,
  ContainerItemHeading,
  EditText,
  Heading,
  ItemAnswerContainer,
  ItemContainerInnerText,
  ItemHeading,
  LeftPrefMainContainer,
  PrefComponentMainContainer,
  PreferenceSubContainer,
  PreferencesContainer,
  RedDot,
} from './styles';
import Image from 'utils/CustomImage';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button } from '@mui/material';
import makeSelectChatSurvey from 'containers/ChatSurvey/selectors';
import isEmpty from 'lodash/isEmpty';
import includes from 'lodash/includes';
import split from 'lodash/split';
import map from 'lodash/map';
import isEqual from 'lodash/isEqual';
import get from 'lodash/get';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const HeaderBar = dynamic(() => import('components/HeaderBar'));
const HomePageText = dynamic(() => import('components/HomePageText'));

const PreferenceComponent = ({ ques, answerArray, isMultiSelect, editPath, otherAnswer }) => {
  return (
    <PrefComponentMainContainer>
      <LeftPrefMainContainer>
        <ContainerItemHeading>
          <ItemHeading>{ques}</ItemHeading>
          <div>{isEqual(answerArray, 'N/A') ? <RedDot /> : ''}</div>
        </ContainerItemHeading>
        {isEqual(isMultiSelect, 1) && !isEmpty(answerArray) ? (
          map(split(answerArray, ','), data => {
            return (
              <ItemAnswerContainer>
                <ItemContainerInnerText>
                  {isEqual(data, 'Other') ? `Other Reason:  ${otherAnswer ?? 'N/A'}` : data}
                </ItemContainerInnerText>
              </ItemAnswerContainer>
            );
          })
        ) : isMultiSelect === 0 ? (
          <ItemAnswerContainer>
            <ItemContainerInnerText>{answerArray}</ItemContainerInnerText>
          </ItemAnswerContainer>
        ) : (
          map(answerArray, (data, key) => {
            if (isEmpty(data.mapped_array)) {
              return;
            }
            return (
              <>
                <ItemAnswerContainer key={key}>
                  <ItemContainerInnerText>{data.answers}</ItemContainerInnerText>
                </ItemAnswerContainer>
                {map(data?.mapped_array, (data, key) => {
                  return (
                    <ItemAnswerContainer key={key}>
                      <ItemContainerInnerText key={key}>{data.answers}</ItemContainerInnerText>
                    </ItemAnswerContainer>
                  );
                })}
              </>
            );
          })
        )}
      </LeftPrefMainContainer>
      <div style={{ alignSelf: 'flex-end' }}>
        <Button
          onClick={editPath}
          padding={'0.8rem 0.1rem'}
          variant="text"
          disableRipple={true}
          startIcon={<Image priority src={'/static/images/edit.png'} height={15} width={15} alt="View All" />}>
          <EditText>Edit</EditText>
        </Button>
      </div>
    </PrefComponentMainContainer>
  );
};
PreferenceComponent.propTypes = {
  ...PreferenceComponent,
};

export function Preferences({ chatSurveyData }) {
  const matches = useMediaQuery('(max-width:600px)');
  const [quesData, setQuesData] = useState([]);
  const [flattenedObj, setFlattenedObj] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const func = () => {
      let mainLoopData = chatSurveyData.questions_answer_tree;
      let data = chatSurveyData.user_responses;
      let arrayData = [];
      while (!isEmpty(data) && mainLoopData) {
        if (
          isEqual(mainLoopData[0]?.question_uuid, data?.question_uuid) ||
          (isEqual(mainLoopData[0]?.is_multiselect, 2) && data)
        ) {
          for (let i = 0; i < mainLoopData?.length; i++) {
            if (mainLoopData[i].is_multiselect === 0 && isEqual(mainLoopData[i]?.answer_uuid, data?.answers_uuid)) {
              arrayData = [...arrayData, mainLoopData[i]];
              if (!isEmpty(mainLoopData[i].children)) {
                mainLoopData = mainLoopData[i].children;
              }
            } else if (
              isEqual(mainLoopData[i].is_multiselect, 1) &&
              includes(split(data.answers_uuid, ','), mainLoopData[i].answer_uuid)
            ) {
              arrayData = [...arrayData, mainLoopData[i]];
              if (!isEmpty(mainLoopData[i].children)) {
                mainLoopData = mainLoopData[i].children;
                break;
              }
            } else if (isEqual(mainLoopData[i].is_multiselect, 2)) {
              arrayData = [...arrayData, mainLoopData[i]];
              mainLoopData = mainLoopData[i].children;
              break;
            }
          }
        }
        if (data) {
          data = get(data, 'children[0]', []);
        }
      }
      setQuesData(arrayData);
      if (isEmpty(chatSurveyData.user_responses)) {
        setQuesData(mainLoopData);
      }
    };
    const flattenObj = () => {
      let data = chatSurveyData.user_responses;
      let flattenArray = [];
      while (!isEmpty(data)) {
        flattenArray.push(data);
        if (data) {
          data = get(data, 'children[0]', []);
        }
      }
      setFlattenedObj(flattenArray);
    };
    func();
    flattenObj();
  }, [chatSurveyData]);
  return (
    <>
      <HeaderBar />
      <BannerContainer style={{ position: 'relative' }}>
        <Image alt="banner_image" src="/static/images/preference_banner.webp" fill style={{ objectFit: 'cover' }} />
        <MuiContainer
          sx={{
            height: { xs: '100%' },
            display: { xs: 'flex' },
            alignItems: { xs: 'end', md: 'center' },
            justifyContent: { xs: 'center', sm: 'flex-start' },
          }}>
          <HomePageText
            width={{ xs: '31.6rem', md: '62.2rem' }}
            textAlign={matches ? 'center' : 'left'}
            fontSize={{ xs: '2.2rem', md: '4.6rem' }}
            fontWeight={{ xs: '600', md: '500' }}
            variant={'h2'}
            height={{ xs: '8.1rem', md: 'auto' }}
            position={{ xs: 'relative', md: 'relative' }}
            margin={{ xs: '0 0 8vh 0', md: '0 0 0 0' }}
            display="flex"
            color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
            letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
            lineHeight={{ xs: '2.7rem', md: '5.6rem' }}>
            &quot;Personalize Your Care: Update Your Preferences Today!&quot;
          </HomePageText>
        </MuiContainer>
      </BannerContainer>
      <PreferencesContainer maxWidth="md">
        <PreferenceSubContainer>
          <Heading>Update your preferences</Heading>
          {!isEmpty(chatSurveyData.user_responses) &&
            flattenedObj.map((data, index) => {
              return (
                <PreferenceComponent
                  key={index}
                  editPath={() => router.push({ pathname: `/survey/${index + 1}`, query: { edit: true } })}
                  ques={data.questions}
                  answerArray={data.answers}
                  isMultiSelect={data.is_multiselect}
                  otherAnswer={data.other_answer}
                />
              );
            })}
          {isEmpty(chatSurveyData.user_responses) ? (
            <PreferenceComponent
              ques={quesData[quesData.length - 1]?.questions}
              answerArray={'N/A'}
              isMultiSelect={0}
              editPath={() => router.push({ pathname: `/survey/${flattenedObj.length + 1}`, query: { edit: true } })}
            />
          ) : isEmpty(quesData[quesData.length - 1]?.children) && quesData?.length === flattenedObj?.length ? null : (
            <PreferenceComponent
              isMultiSelect={0}
              ques={
                isEmpty(quesData)
                  ? ''
                  : quesData[quesData.length - 1]?.children[0]?.questions || quesData[quesData.length - 1]?.questions
              }
              answerArray={'N/A'}
              editPath={() => router.push({ pathname: `/survey/${flattenedObj.length + 1}`, query: { edit: true } })}
            />
          )}
        </PreferenceSubContainer>
      </PreferencesContainer>
    </>
  );
}

Preferences.propTypes = {
  dispatch: PropTypes.func.isRequired,
  chatSurveyData: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  chatSurveyData: makeSelectChatSurvey(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Preferences);
