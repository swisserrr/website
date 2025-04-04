export const singleFaqConverter = data => {
  const array = data?.map(val => {
    return {
      faq_category: 'General',
      faq_ques: val.question,
      faq_ans: val.answer,
      id: val.id,
      uuid: val.id,
    };
  });
  return {
    General: array,
  };
};
