import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Helpers from 'utils/helpers';
import APIS from '../../constants/apis';
import { axiosInstance } from 'utils/request';
import { useRouter } from 'next/router';
import { checkoutSuccess } from './actions';
import { set } from 'lodash';
// Styled components for the card layout
const CardContainer = styled.div`
  background-color: ${props => (props.primary ? '#D95550' : '#FFFFFF')};
  color: ${props => (props.primary ? '#FFFFFF' : '#000000')};
  border-radius: 1.6rem;
  padding: 2.847rem 3rem;
  width: 30rem; /* Fixed width */
  height: 45rem; /* Fixed height */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 0.3rem;
  position: relative;
  flex: 0 0 auto; /* Prevent stretching or shrinking */
`;

const Price = styled.h2`
  margin-top: 10px;
  font-family: 'Rupee Foradian';
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.168px;
`;
const PriceRef = styled.h2`
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.09px;
`;

const PlanTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.132px;
  text-align: left;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
`;

const Feature = styled.li`
  margin: 10px 0;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.078px;
`;

const FeatureDescription = styled.p`
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 116.339% */
  letter-spacing: -0.09px;
  white-space: normal;
  word-wrap: break-word;
  width: 100%;
  align-items: left;
`;

const Button = styled.button`
  background-color: ${props => (props.primary ? '#FFFFFF' : '#D95550')};
  color: ${props => (props.primary ? '#000000' : '#FFFFFF')};
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  width: 7.26rem;
  height: 2.98rem;
  font-size: 7.79px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.078px;
  text-align: center;
  position: absolute;
  left: 2.59rem;
  bottom: 2.84rem;

  &:hover {
    opacity: 0.9;
  }
`;

const Card = ({
  title,
  description,
  price,
  id,
  duration,
  features,
  primary,
  updateValues,
  index,
  key,
  data,
  setIsModalOpen,
  onClose,
  initialValues,
  changePlan,
  planUuid,
  mobileNumber,
  uuid,
  dispatch,
  setLoading,
}) => {
  const router = useRouter();

  const [formState, setFormState] = useState({
    uuid: null,
    plan: '',
    duration: '',
    price: '',
    expiry: '',
    first_name: '',
    last_name: '',
    mobile_number: '',
    country_code: '',
    base_plan_id: '',
    age: '',
    email: '',
    add_ons: [],
    address_data: {
      address_line_1: '',
      address_line_2: '',
      city: '',
      state: '',
      country: '',
      pincode: '',
      geo_latitude: '',
      geo_longitude: '',
      locality: '',
      landmark: '',
    },
  });

  useEffect(() => {
    if (data) {
      const storedUserData = data?.flatMap(dataItem => dataItem?.membership_details || []);
      const parsedUserData = storedUserData.find(data => data.uuid === index);
      setFormState(parsedUserData);
    }
  }, [index]);

  const handleSubmit = async values => {
    let url = Helpers.getUrl(APIS.SINGLE_EDIT);
    if (router.asPath.startsWith('/enterprise/kotak')) {
      url = url + '?return_coins=true';
    } else {
      url = url + '?return_coins=false';
    }
    const dataObj = {
      uuid: index,
      index_id: values?.index_id,
      first_name: values.first_name,
      last_name: values.last_name,
      age: values.age,
      country_code: '+91',
      mobile_number: values.mobile_number,
      email: values.email,
      same_as_buyer: values.same_as_buyer,
      base_plan_id: id,
      add_ons: [],
      address_data: {
        address_line_1: values?.address_data?.address_line_1 || values?.membership_address_data?.address_line_1,
        address_line_2: values?.address_data?.address_line_2 || values?.membership_address_data?.address_line_2,
        city: values?.address_data?.city || values?.membership_address_data?.city,
        state: values?.address_data?.state || values?.membership_address_data?.state,
        country: values?.address_data?.country || values?.membership_address_data?.country,
        pincode: values?.address_data?.pincode || values?.membership_address_data?.pincode,
        locality: values?.address_data?.locality || values?.membership_address_data?.locality,
        landmark: values?.address_data?.landmark || values?.membership_address_data?.landmark,
      },
    };

    try {
      const res = await axiosInstance.put(url, dataObj);
      dispatch(checkoutSuccess(res.data));
      // setLoading(true);
    } catch (err) {
      //console.log('err', err);
    } finally {
      // setLoading(false);
    }
  };

  const handleButtonClick = async () => {
    if (changePlan) {
      handleSubmit(formState);
    } else {
      // Perform default operation
      updateValues(prevValues => {
        prevValues[index] = {
          ...prevValues[index],
          plan: title,
          price: price,
          base_plan_id: id,
          duration,
        };
        return prevValues;
      });
    }
    setIsModalOpen(false);
  };

  return (
    <CardContainer primary={primary}>
      <PlanTitle>{title}</PlanTitle>
      <FeatureDescription>{description}</FeatureDescription>
      <Price>₹{price}</Price>
      <PriceRef>per month</PriceRef>
      <FeatureList>
        {features.map((feature, index) => (
          <Feature key={index}>{feature?.name}</Feature>
        ))}
      </FeatureList>
      <Button primary={primary} type="button" onClick={handleButtonClick}>
        Proceed
      </Button>
    </CardContainer>
  );
};

export default Card;
