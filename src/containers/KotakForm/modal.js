import React, { useEffect, useRef } from 'react';
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  HeadingH2,
  PlanCardWrapper,
  PlanCard,
  PlanTitle,
  PlanPrice,
  ProceedButton,
} from './modal.styles';
import PlanCardContainer from 'components/PlanCardHomeContainer';
import { plansForSingle } from '../Home/constantValues';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import Card from './card';
import { getKotakPlans } from 'containers/KotakPlans/actions';
import round from 'lodash/round';
import isEqual from 'lodash/isEqual';

// const CardWrapper = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   overflow-x: auto;
//   // flex-wrap: wrap;
//   flex-direction: row;
//   padding: 2.8rem;
//   white-space: nowrap;
//   padding-bottom: 10rem;
// `;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row; /* Horizontal arrangement */
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem; /* Spacing between cards */
  overflow-x: auto; /* Enable horizontal scrolling */
  white-space: nowrap; /* Prevent line wrapping */
  padding: 2.8rem;
  scroll-behavior: smooth;

  /* Optional: Style the scrollbar */
  &::-webkit-scrollbar {
    height: 8px; /* Horizontal scrollbar height */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #f0f0f0;
  }
`;

function Modal({
  onClose,
  setFieldValue,
  index,
  setIsModalOpen,
  handleGetPlans,
  plansData,
  updateValues,
  initialValues,
  changePlan,
  planUuid,
  mobileNumber,
  uuid,
  dispatch,
  setLoading,
  data,
  selectedPlanName,
}) {
  const scrollContainerRef = useRef(null);

  const cards = [
    <>
      {plansData?.map((plan, indexKey) => (
        <Card
          key={indexKey}
          index={index}
          title={plan?.name}
          description={plan?.description}
          price={round(plan?.plan_prices[0]?.price / 12)}
          id={plan?.plan_prices[0]?.node_item_uuid}
          duration={plan?.plan_prices[0]?.duration}
          features={plan?.plan_services.slice(0, 6)}
          setFieldValue={setFieldValue}
          setIsModalOpen={setIsModalOpen}
          onClose={onClose}
          data={data}
          primary={isEqual(plan?.name, selectedPlanName) ? true : false}
          updateValues={updateValues}
          initialValues={initialValues}
          changePlan={changePlan}
          planUuid={planUuid}
          mobileNumber={mobileNumber}
          uuid={uuid}
          dispatch={dispatch}
          setLoading={setLoading}
        />
      ))}
    </>,
  ];

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <img src="/static/images/modalClose.png" alt="Close" />
        </CloseButton>
        <HeadingH2>Plans for you</HeadingH2>

        <CardWrapper ref={scrollContainerRef}>{cards}</CardWrapper>
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;
