import styled from '@emotion/styled';
import { Field } from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  //   padding: 16px;
  height: 100vh;
  box-sizing: border-box;
`;

export const BackButton = styled.button`
  margin-top: 6.1rem;
  margin-left: 1.557rem;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const AddAddressButton = styled.button`
  background: none;
  border: 1px solid #ccc;
  padding: 12px;
  font-size: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 31.07832rem;
  height: 4.4rem;
`;

export const AddressList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding-bottom: 20rem;
  max-height: 100vh;
`;

export const AddressItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 0.8rem;
  padding: 1.2rem 0.8rem;
  margin-bottom: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 31.07832rem;
`;

export const AddressDetails = styled.div`
  display: flex;
  width: 20.3rem;
  flex-direction: column;
  flex-grow: 1;
`;

export const AddressTitle = styled.div`
  margin-bottom: 4px;

  color: #5f5f5f;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 200%;
  border-bottom: 1px solid #ccc;
`;

export const AddressText = styled.div`
  color: #1a1a1a;
  font-size: 13.424px;
  font-style: normal;
  font-weight: 500;
  line-height: 17.898px;
`;

export const SelectButton = styled(Field)`
  margin-right: 8px;
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  padding-bottom: 2.016rem;
  padding-top: 2.112rem;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

export const UseButton = styled.button`
  background-color: #da504a;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  display: flex;
  width: 343px;
  height: 45px;
  padding: 11px 18px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;
