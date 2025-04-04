/* Styles for KotakForm container module */

import styled from '@emotion/styled';

export const Card = styled.div`
  border: 1px solid #e0e0e0;
  // border-radius: 8px;
  padding: 2.8rem 2.237rem 3.2rem 0.995rem;
  margin-bottom: 0.8rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const CardTitle = styled.h2`
  color: #212121;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #f44336;
`;

export const ChangePlanButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #f44336;
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const AddMemberButton = styled.button`
  margin-top: 2.094rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #cb4747;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #cb4747;

  width: 296px;
  height: 45px;
  padding: 6px 12px;
  gap: 10px;

  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
`;

export const ProceedButton = styled.button`
  display: flex;
  background-color: #da504a;
  color: white;
  border: none;
  cursor: pointer;

  width: 329.28px;
  height: 48px;
  padding: 5.76px 11.52px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 7.68px;

  text-align: center;
  font-size: 16.32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
