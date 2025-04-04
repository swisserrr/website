import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: fixed;
  bottom: 0;
  height: 85%;
  left: 0;
  width: 100%;
  max-width: 100%;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  // padding: 1.5rem;
  text-align: left;
  z-index: 1001;

  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.1);
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: -10%; /* Adjusted to float slightly outside the modal */
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  color: #fff;
  z-index: 1002; /* Ensure it's above the modal content */

  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #464646;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const PlanCard = styled.div`
  background-color: #cc4746;
  color: white;
  padding: 1.5rem;
  border-radius: 15px;
  margin-bottom: 1rem;
  height: 100%;
`;

export const PlanTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

export const PlanPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const ProceedButton = styled.button`
  background-color: white;
  color: #cc4746;
  padding: 0.75rem;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 1rem;
  border: none;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const HeadingH2 = styled.h2`
  color: #000;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.42px;
  margin-top: 3.5rem;
  margin-left: 1.5rem;
`;

export const PlanCardWrapper = styled.div``;
