/**
 *
 * ChatSurvey
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const HeaderBar = dynamic(() => import('components/HeaderBar'));
const HomePageBox = dynamic(() => import('components/HomePageBox'));
const HomePageImage = dynamic(() => import('components/HomePageImage'));
const HomePageButton = dynamic(() => import('components/HomePageButton'));

import PageNotFound from '../../../public/static/images/survey_elder.webp';

import { Container } from '@mui/material';
import {
  CustomButtonSingle,
  MainContainer,
  Ques,
  Input,
  WrapContainer,
  ContainerWithPadding,
  CustomHomePageBox,
} from './styles';

import { postSurveyAns } from './actions';
import { createStructuredSelector } from 'reselect';
import makeSelectChatSurvey from './selectors';

import isEmpty from 'lodash/isEmpty';
import includes from 'lodash/includes';
import split from 'lodash/split';
import toNumber from 'lodash/toNumber';
import map from 'lodash/map';
import get from 'lodash/get';
import filter from 'lodash/filter';
import isEqual from 'lodash/isEqual';

import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { MultiMultiSelectLogic, MultiMultiSelectNullChecker, MultiSelectPostConvertor } from './logicHandler';
import MultiMultiSelectComponent from './surveyComponents';
import { pushEvent } from 'utils/cleverTap';
import { EVENT_NAME } from 'constants/constants';

export function ChatSurvey({ chatSurveyData, postSurveyAns }) {
  const router = useRouter();
  const [quesData, setQuesData] = useState([]);
  const [ansData, setAnsData] = useState('');
  const [rightIndex, setRightIndex] = useState(0);

  useEffect(() => {
    const depthLevel = toNumber(router.query.slug) - 1;
    let mainLoopData = chatSurveyData?.questions_answer_tree;
    let data = chatSurveyData?.user_responses;
    let i = 0;
    let answerArray = data;
    while (data !== null && i < depthLevel && mainLoopData) {
      if (isEqual(mainLoopData[0].question_uuid, data?.question_uuid)) {
        for (let i = 0; i < mainLoopData?.length; i++) {
          if (mainLoopData[i].is_multiselect === 0 && isEqual(mainLoopData[i].answer_uuid, data.answers_uuid)) {
            if (!isEmpty(mainLoopData[i].children)) {
              mainLoopData = mainLoopData[i].children;
            }
          } else if (
            isEqual(mainLoopData[i].is_multiselect, 1) &&
            includes(split(data.answers_uuid, ','), mainLoopData[i].answer_uuid)
          ) {
            if (!isEmpty(mainLoopData[i].children)) {
              mainLoopData = mainLoopData[i].children;
            }
          }
          // else if (
          //   mainLoopData[i].is_multiselect === 1 &&
          //   mainLoopData[i]?.children[0]?.is_multiselect === 2 &&
          //   includes(split(data.answers_uuid, ','), mainLoopData[i].answer_uuid)
          // ) {
          //   //do  nothing
          // }
        }
      }
      if (data && !isEmpty(data.children)) {
        answerArray = data.children[0];
        data = data.children[0];
      }
      i++;
    }
    setQuesData(mainLoopData[0].is_multiselect ? [...mainLoopData]?.reverse() : mainLoopData);
    setAnsData(answerArray);
    setRightIndex(i + 1);
  }, [router]);

  const onSubmit = (values, { resetForm }) => {
    let data = {
      data: [
        {
          answer_id: values.array,
          survey_question_answer_mapping_uuid: values.survey_question_answer_mapping_uuid,
          other_answer: values.other_answer,
        },
      ],
    };
    if (isEqual(quesData[0]?.is_multiselect, 2)) {
      data = { data: MultiSelectPostConvertor(values.array) };
    }

    if (!isEmpty(values.array) && !isEmpty(values.survey_question_answer_mapping_uuid)) {
      if (
        !(isEqual(quesData[0]?.is_multiselect, 0) || isEqual(quesData[0]?.is_multiselect, 1)) &&
        !(isEqual(quesData[0]?.is_multiselect, 2) && MultiMultiSelectNullChecker(values.array))
      ) {
        toast.error('Please select a value', {
          autoClose: 10000,
          draggable: false,
        });
        return;
      }

      postSurveyAns(
        data,
        () => {
          if (isEmpty(quesData[0]?.children)) {
            if (isEqual(router?.query?.edit, 'true')) {
              router.push('/preferences');
            } else {
              router.push('/');
            }
          } else {
            router
              .push(`/survey/${rightIndex + 1}${isEqual(router?.query?.edit, 'true') ? '?edit=true' : ''}`)
              .then(() => {
                resetForm();
              });
          }
        },
        err => {
          toast.error(err?.message ?? 'Something went wrong!!!', {
            autoClose: 10000,
            draggable: false,
          });
        }
      );
    } else {
      toast.error('Please select a value', {
        autoClose: 10000,
        draggable: false,
      });
    }
  };
  return (
    <Formik
      enableReinitialize
      initialValues={{
        array:
          quesData[0]?.is_multiselect === 0
            ? ansData?.answers_uuid
            : isEqual(quesData[0]?.is_multiselect, 1)
            ? split(ansData?.answers_uuid, ',')
            : MultiMultiSelectLogic(quesData, ansData?.answers_uuid),
        other_answer: ansData?.other_answer,
        survey_question_answer_mapping_uuid: isEqual(quesData[0]?.is_multiselect, 2)
          ? 'none'
          : ansData?.survey_question_answer_mapping_uuid,
      }}
      onSubmit={onSubmit}>
      {({ values, setFieldValue, handleSubmit, handleChange }) => (
        <div>
          <MainContainer>
            <HeaderBar disableScroll textColor="white" backgroundColor={'#1a1a1a'} />
            <ContainerWithPadding sx={{ height: { xs: '100%', md: '100%' }, position: 'relative' }} maxWidth="sm">
              <HomePageBox
                display="flex"
                flexDirection="column"
                height={{ xs: '100%', md: '100%' }}
                width={{ xs: '100%', md: '100%' }}>
                <HomePageBox
                  backgroundColor={{
                    xs: '#FFFFFF',
                    md: '#FFFFFF',
                  }}
                  height={{ xs: '100%', md: '100%' }}
                  display="flex"
                  flexDirection="column"
                  margin={{ xs: '2rem 0', md: '3rem 0' }}
                  alignItems="center">
                  {toNumber(quesData[0]?.depth_level) <= 2 ? (
                    <HomePageBox width={{ xs: '90%', md: '100%' }}>
                      <HomePageImage src={PageNotFound} width="100%" height="100%" />
                    </HomePageBox>
                  ) : null}

                  <Ques>{quesData[0]?.questions}</Ques>
                  <WrapContainer>
                    {map(quesData, (data, index) => {
                      if (quesData[0]?.is_multiselect === 0) {
                        return (
                          <CustomButtonSingle
                            key={index}
                            onClick={() => {
                              setFieldValue('array', data.answer_uuid);
                              setFieldValue(
                                'survey_question_answer_mapping_uuid',
                                data.survey_question_answer_mapping_uuid
                              );
                            }}
                            toggle={!isEqual(values.array, data.answer_uuid)}>
                            {data.answers}
                          </CustomButtonSingle>
                        );
                      } else if (isEqual(quesData[0]?.is_multiselect, 1)) {
                        return (
                          <CustomButtonSingle
                            key={index}
                            widthToggle
                            length={quesData.length}
                            onClick={() => {
                              if (includes(values.array, data.answer_uuid)) {
                                const filteredArray = values.array.filter(val => val !== data.answer_uuid);
                                setFieldValue('array', filteredArray);
                              } else {
                                setFieldValue('array', [data.answer_uuid, ...values.array]);
                              }
                              setFieldValue(
                                'survey_question_answer_mapping_uuid',
                                data.survey_question_answer_mapping_uuid
                              );
                            }}
                            toggle={!includes(values.array, data.answer_uuid)}>
                            {data.answers}
                          </CustomButtonSingle>
                        );
                      } else if (isEqual(quesData[0]?.is_multiselect, 2)) {
                        return (
                          <MultiMultiSelectComponent
                            key={index}
                            isOpen={isEmpty(get(values, `array[${index}].mapped_array`))}
                            mainIndex={index}
                            heading={data.answers}
                            mapArray={data.mapped_array}
                            mainFunc={isOpen => {
                              if (isOpen) {
                                setFieldValue(`array[${index}].mapped_array`, []);
                              }
                            }}
                            values={values}
                            subFunc={mapData => {
                              if (
                                !isEmpty(
                                  filter(get(values, `array[${index}].mapped_array`), e =>
                                    isEqual(mapData.answer_uuid, e.answer_uuid)
                                  )
                                )
                              ) {
                                const filteredArray = filter(
                                  get(values, `array[${index}].mapped_array`),
                                  e => mapData.answer_uuid !== e.answer_uuid
                                );
                                setFieldValue(`array[${index}].mapped_array`, filteredArray);
                              } else {
                                setFieldValue(`array[${index}].mapped_array`, [
                                  {
                                    answer_uuid: mapData.answer_uuid,
                                    survey_question_answer_mapping_uuid: mapData.survey_question_answer_mapping_uuid,
                                  },
                                  ...get(values, `array[${index}].mapped_array`, []),
                                ]);
                              }
                              setFieldValue(
                                'survey_question_answer_mapping_uuid',
                                data.survey_question_answer_mapping_uuid
                              );
                            }}
                          />
                        );
                      }
                    })}
                    {!includes(values.array, 'baf09602-ad5f-4024-9305-b14338765a7d') ? null : (
                      <Input
                        placeholder="Reason"
                        name="other_answer"
                        value={values.other_answer}
                        onChange={handleChange}
                      />
                    )}
                  </WrapContainer>
                </HomePageBox>
              </HomePageBox>
            </ContainerWithPadding>
          </MainContainer>
          <CustomHomePageBox
            width={{ xs: '100%', md: '100%' }}
            boxShadow={{
              xs: '4px 0px 50px rgba(0, 0, 0, 0.1);',
              md: '4px 0px 50px rgba(0, 0, 0, 0.1);',
            }}
            position={{
              xs: 'fixed',
              md: 'fixed',
            }}
            bottom={{
              xs: 0,
              md: 0,
            }}
            backgroundColor={{ xs: '#ffffff', md: '#ffffff' }}
            display="flex"
            padding={{
              xs: '3rem 0rem',
              md: '5rem 0rem',
            }}
            height={{
              xs: '100px',
              md: '150px',
            }}>
            <Container
              maxWidth="sm"
              sx={{ display: 'flex', justifyContent: { md: 'space-between', xs: 'space-evenly' } }}>
              <HomePageButton
                padding={{
                  xs: '1.2rem 3rem',
                  md: '1.2rem 3rem',
                }}
                textTransform={{ xs: 'none', md: 'none' }}
                width={{ xs: '9.5rem', md: '16rem' }}
                variant="outlined"
                lineHeight={{
                  xs: '1.8rem',
                  md: '2.1rem',
                }}
                onClick={() => {
                  const eventPayload = {};
                  eventPayload['Question skipped on'] = quesData[0]?.questions;
                  pushEvent(EVENT_NAME.SKIP_PREFERENCE, eventPayload);
                  if (isEqual(router?.query?.edit, 'true')) {
                    router.push('/preferences');
                  } else {
                    router.push('/');
                  }
                }}
                backgroundColor={{ xs: 'transparent', md: '#transparent' }}
                fontWeight={{
                  xs: '400',
                  md: '400',
                }}
                color={{ xs: '#1a1a1a', md: '#1a1a1a' }}
                borderColor={{ xs: '#1a1a1a', md: '#1a1a1a' }}
                fontSize={{
                  xs: '1.5rem',
                  md: '1.7rem',
                }}
                borderRadius={{ xs: '50px', md: '50px' }}>
                Skip
              </HomePageButton>
              <HomePageButton
                padding={{
                  xs: '1.2rem 3rem',
                  md: '1.2rem 3rem',
                }}
                textTransform={{ xs: 'none', md: 'none' }}
                width={{ xs: '9.5rem', md: '16rem' }}
                lineHeight={{
                  xs: '1.8rem',
                  md: '2.1rem',
                }}
                onClick={handleSubmit}
                backgroundColor={{ xs: '#cc4746', md: '#cc4746' }}
                fontWeight={{
                  xs: '400',
                  md: '400',
                }}
                fontSize={{
                  xs: '1.5rem',
                  md: '1.7rem',
                }}
                borderRadius={{ xs: '50px', md: '50px' }}>
                Submit
              </HomePageButton>
            </Container>
          </CustomHomePageBox>
        </div>
      )}
    </Formik>
  );
}

ChatSurvey.propTypes = {
  dispatch: PropTypes.func.isRequired,
  chatSurveyData: PropTypes.object,
  postSurveyAns: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  chatSurveyData: makeSelectChatSurvey(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    postSurveyAns: (payload, successCallback, failCallback) =>
      dispatch(postSurveyAns(payload, successCallback, failCallback)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ChatSurvey);
