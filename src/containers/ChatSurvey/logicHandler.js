import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import forEach from 'lodash/forEach';
import get from 'lodash/get';

export const MultiMultiSelectLogic = (quesData, answers) => {
  if (!isEmpty(answers)) {
    return answers;
  }
  return map(quesData, data => {
    return {
      survey_question_answer_mapping_uuid: data.survey_question_answer_mapping_uuid,
      answer_uuid: data.answer_uuid,
      mapped_array: [],
    };
  });
};

export const MultiSelectPostConvertor = quesData => {
  return map(quesData, data => {
    const obj = map(data?.mapped_array, val => {
      return {
        answer_id: [val.answer_uuid],
        survey_question_answer_mapping_uuid: val.survey_question_answer_mapping_uuid,
      };
    });
    return {
      answer_id: [data.answer_uuid],
      survey_question_answer_mapping_uuid: data.survey_question_answer_mapping_uuid,
      mapped_array: obj,
    };
  });
};

export const MultiMultiSelectNullChecker = array => {
  let flag = false;
  forEach(array, i => {
    if (!isEmpty(i.mapped_array)) {
      flag = true;
    }
  });
  return flag;
};

export function surveyEventHandler(obj) {
  if (!obj?.['children']?.[0]) {
    return obj;
  }
  return surveyEventHandler(obj?.['children']?.[0]);
}

export function surveyMultiCheckEventHandler(answers) {
  if (Array.isArray(answers)) {
    let allAnswers = [];
    forEach(answers, ans => {
      if (get(ans, 'mapped_array')) {
        forEach(get(ans, 'mapped_array'), val => {
          allAnswers.push(val?.answers, ',');
        });
      }
    });
    return ''.concat(...allAnswers);
  }
  return answers;
}
