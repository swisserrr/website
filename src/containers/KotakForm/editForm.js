/**
 *
 * KotakForm
 *
 */

import React, { memo, useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';
import UserAddress from './UserAddress';
import CheckoutPage from './checkoutPage';
import { createStructuredSelector } from 'reselect';
import { Card, CardHeader, CardTitle, EditButton, Label, AddMemberButton, ProceedButton } from './styles';
import makeSelectKotakForm from './selectors';
import { Formik, Form, Field } from 'formik';
import styled from '@emotion/styled';
import { getKotakPlans } from 'containers/KotakPlans/actions';
import { membershipCheckoutAction } from './actions';

import makeSelectConciergeCalendar from '../ConciergeCalendar/selectors';
import makeSelectKotakPlans from '../KotakPlans/selectors';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { get } from 'lodash';
import Modal from './modal';
import * as Yup from 'yup';
// import Router from 'next/router';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import AddAddress from '../AddAddress';
import { axiosInstance } from 'utils/request';
import Helpers from 'utils/helpers';
import APIS from '../../constants/apis';

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const Card2 = styled.div`
  display: flex;
  background-color: ${props => (props.planName && props.planName.toLowerCase()[0] === 'e' ? '#1e1e1e' : '#DA504A')};
  color: #fff;
  padding: 2.5rem;
  border-radius: 2.0501rem;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 34.3rem;
  height: 18.7rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-left: 1.6rem;
  margin-right: 1.6rem;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: 27.375px;
`;

const Duration = styled.h2`
  color: #fff;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: 27.375px;
`;

const Amount = styled.h2`
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 22.5px;
`;

const PlanDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin: 12px 0;
`;

const Expiry = styled.h2`
  color: #fff;

  text-align: center;
  font-size: 15px;
  font-style: normal;
  // font-weight: 400;
  line-height: 22.5px;
  width: 80px;
  margin-top: 30px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  width: auto;
  height: 39px;
  cursor: pointer;
  border: ${({ selected }) => (selected ? '1px solid #DA504A' : 'none')};
  background-color: #fff;
  color: ${({ selected }) => (selected ? '#000' : '#DA504A')};
  transition: background-color 0.3s ease;
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);

  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 18.6px;
`;

const Label2 = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;

  color: #1d1d1d;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 23.571px; /* 235.71% */
`;

const Input = styled(Field)`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;

  width: 311.434px;
  height: 47.433px;

  border-radius: 10px;
  border: 1px solid #e0e0e0;

  color: #1d1d1d;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 23.571px;
`;

const TextArea = styled(Field)`
  // width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;

  display: flex;
  width: 311.434px;
  align-items: center;
  gap: 41px;

  color: #1d1d1d;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 23.571px;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;

const CustomField = styled(Form)`
  margin-left: 3.114rem;
  margin-right: 3.207rem;
`;

const UserH1 = styled.h1`
  color: #212121;
  font-size: 2.1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.8rem; /* 133.333% */

  margin-top: 3.45rem;
  margin-left: 1.59rem;
`;

const BuyText = styled.h2`
  color: #1d1d1d;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 23.571px; /* 138.651% */
`;

const AmountText = styled.h2`
  color: #fff;

  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22.5px;
`;

export const BackButton = styled.button`
  margin-top: 6.1rem;
  margin-left: 1.557rem;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const UserDetailsForm = ({ conciergeData }) => {
  const [showAddress, updateToggle] = useState('form');
  const router = useRouter();
  const [loading, setLoading] = useState(false);
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
    same_as_buyer: '',
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
  const { mobileNumber, uuid, planDetails, index_id } = router.query;
  // console.log('ppppppppppppppppp', planDetails);

  // useLayoutEffect(() => {
  //   // console.log('ppppppppppppppppp',router.query);
  //   if (mobileNumber) {
  //     const storedUserData = localStorage.getItem('checkoutData');
  //     if (storedUserData) {
  //       const parsedUserData = JSON.parse(storedUserData)?.membership_items?.find(
  //         data => data.mobile_number === mobileNumber
  //       );
  //       setFormState(parsedUserData);
  //     }
  //   }
  // }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('checkoutDataNew'));
    if (data) {
      //console.log('index_id',parseInt(index_id));
      const allUsers = data?.data?.flatMap(dataItem => dataItem?.membership_details || []);
      //console.log('allUsers', allUsers);
      const parsedUserData = allUsers?.find(data => data.index_id === parseInt(index_id));
      //console.log('parsedUserData', parsedUserData);
      parsedUserData.address_data = parsedUserData?.membership_address_data;
      // delete parsedUserData[membership_address_data];
      setFormState(parsedUserData);
    }
  }, []);

  const decodedPlanDetails = decodeURIComponent(planDetails);
  const parsedPlanData = JSON.parse(decodedPlanDetails);
  // console.log('PARSED', planDetails);

  // console.log('p',planDetails);

  const validationSchema = Yup.object({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    mobile_number: Yup.string().required('Phone number is required'),
    age: Yup.number()
      .required('Age is required')
      .test('minimum-age-is-55', 'Minimum age is 55', value => {
        const parsedValue = parseInt(value);
        return parsedValue > 54;
      })
      .nullable(),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    address_data: Yup.object().shape({}),
  });

  const handleSubmit = async (values, action) => {
    let url = Helpers.getUrl(APIS.SINGLE_EDIT);
    if (router.asPath.startsWith('/enterprise/kotak')) {
      url = url + '?return_coins=true';
    } else {
      url = url + '?return_coins=false';
    }
    const dataObj = {
      uuid: uuid,
      first_name: values.first_name,
      last_name: values.last_name,
      age: values.age,
      index_id: parseInt(index_id),
      email: values.email,
      same_as_buyer: values.same_as_buyer,
      country_code: '+91',
      mobile_number: values.mobile_number,
      base_plan_id: values.base_plan_id,
      add_ons: [],
      address_data: {
        address_line_1: values?.address_data?.address_line_1,
        address_line_2: values?.address_data?.address_line_2,
        city: values?.address_data?.city,
        state: values?.address_data?.state,
        country: values?.address_data?.country,
        pincode: values?.address_data?.pincode,
        locality: values?.address_data?.locality,
        landmark: values?.address_data?.landmark,
      },
    };
    console.log('dataObj', dataObj);
    try {
      setLoading(true);
      await axiosInstance.put(url, dataObj);
      const storedUserData = localStorage.getItem('checkoutData');
      if (storedUserData) {
        const data = JSON.parse(storedUserData);
        const findIndex = data?.membership_items?.findIndex(data => data.mobile_number === values.mobile_number);
        const parsedUserData = JSON.parse(storedUserData)?.membership_items?.find(
          data => data.mobile_number === mobileNumber
        );
        if (data && data.membership_items && findIndex >= 0) {
          data.membership_items[findIndex] = { ...parsedUserData, ...dataObj };
          localStorage.setItem('checkoutData', JSON.stringify(data));
        }
      }
      if (router.asPath.startsWith('/enterprise/kotak')) {
        router.push('/enterprise/kotak/checkout').then(() => setLoading(false));
      } else {
        router.push('/enterprise/federal/checkout').then(() => setLoading(false));
      }
    } catch (err) {
      if (err) {
        setLoading(false);
        action.setFieldError('mobile_number', 'Plan is already attached with this number');
      }
    }
  };
  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
    };
    const handleRouteChangeComplete = () => {
      setLoading(false);
    };
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeComplete);
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, [router.events]);

  useEffect(() => {
    const checkCookies = () => {
      const cookies = document.cookie;
      if (!cookies) {
        if (router.asPath.startsWith('/enterprise/kotak')) {
          router.push('/enterprise/kotak/login');
        } else {
          router.push('/enterprise/federal/login');
        }
      }
    };

    checkCookies();

    const interval = setInterval(checkCookies, 500);

    return () => clearInterval(interval);
  }, [router]);

  const backButton = () => {
    if (router.asPath.startsWith('/enterprise/kotak')) {
      router.push('/enterprise/kotak/checkout');
    } else {
      router.push('/enterprise/federal/checkout');
    }
  };
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1
  const day = String(currentDate.getDate()).padStart(2, '0');
  const futureDate = `${day}/${month}/${year + 1}`;

  return (
    <>
      {loading && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            zIndex: 9999,
          }}>
          <CircularProgress />
        </Box>
      )}
      <div
        style={{
          paddingBottom: '15rem',
          height: '100%',
          overflowY: 'scroll',
          maxHeight: '75rem',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}>
        {isEqual(showAddress, 'form') && (
          <>
            <BackButton onClick={() => backButton()}>
              <img
                style={{ width: '2.4rem', height: '2.4rem' }}
                src="/static/images/arrow_back_stick.webp"
                alt="Edit"
              />
            </BackButton>
            <div>
              <UserH1>Edit Form</UserH1>
            </div>
            <Container>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card2 planName={parsedPlanData?.itemName}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <Title>{parsedPlanData?.itemName}</Title>
                        <Duration>{parsedPlanData?.duration} Months</Duration>
                      </div>
                      {parsedPlanData?.itemName?.charAt(0).toLowerCase() === 'k' ? (
                        <img
                          style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                          src="/static/images/logoRedCrown.png"
                          alt="RedCrown"
                        />
                      ) : (
                        <img
                          style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                          src="/static/images/LogoblackCrown.png"
                          alt="BlackCrown"
                        />
                      )}
                    </div>
                    <PlanDetails style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div style={{ marginTop: '30px' }}>
                        <AmountText>Amount</AmountText>
                        <Amount>₹ {parsedPlanData?.price}</Amount>
                      </div>
                      <Expiry>Expiry on {futureDate}</Expiry>
                    </PlanDetails>
                  </div>
                </Card2>
              </div>
            </Container>
          </>
        )}
        <Formik
          initialValues={formState}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={values => {
            handleSubmit(values);
          }}>
          {({ values, setFieldValue, errors, resetForm, isSubmitting, validateField, submitForm }) => {
            return (
              <Form>
                {isEqual(showAddress, 'form') && (
                  <>
                    <CustomField>
                      {/* First Name */}
                      <div>
                        <Label2>First Name</Label2>
                        <Input
                          name="first_name"
                          placeholder="Enter First Name"
                          onChange={e => {
                            setFieldValue('first_name', e.target.value);
                            validateField('first_name');
                          }}
                          value={values.first_name}
                          disabled={values.same_as_buyer}
                        />
                        {errors.first_name && <ErrorText>{errors.first_name}</ErrorText>}
                      </div>

                      {/* Last Name */}
                      <div>
                        <Label2>Last Name</Label2>
                        <Input
                          name="last_name"
                          placeholder="Enter Last Name"
                          onChange={e => {
                            setFieldValue('last_name', e.target.value);
                            validateField('last_name');
                          }}
                          value={values.last_name}
                          disabled={values.same_as_buyer}
                        />
                        {errors.last_name && <ErrorText>{errors.last_name}</ErrorText>}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <Label2>Phone Number</Label2>
                        <Input
                          name="mobile_number"
                          placeholder="Enter Phone Number"
                          onChange={e => {
                            setFieldValue('mobile_number', e.target.value);
                            validateField('mobile_number');
                          }}
                          value={values.mobile_number}
                          disabled={values.same_as_buyer}
                        />
                        {errors.mobile_number && <ErrorText>{errors.mobile_number}</ErrorText>}
                      </div>

                      {/* Age */}
                      <div>
                        <Label2>Age</Label2>
                        <Input
                          name="age"
                          type="number"
                          placeholder="Enter Age"
                          onChange={e => {
                            setFieldValue('age', e.target.value);
                            validateField('age');
                          }}
                          value={values.age}
                        />
                        {errors.age && <ErrorText>{errors.age}</ErrorText>}
                      </div>

                      {/* Email */}
                      <div>
                        <Label2>Email</Label2>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Enter Email"
                          value={values.email}
                          onChange={e => {
                            setFieldValue('email', e.target.value);
                            validateField('email');
                          }}
                          disabled={values.same_as_buyer}
                        />
                        {errors.email && <ErrorText>{errors.email}</ErrorText>}
                      </div>

                      {/* Address */}
                      <div>
                        <Label2>Address</Label2>
                        <TextArea
                          name="addressDisplay"
                          placeholder="Enter Address"
                          rows="3"
                          onClick={() => updateToggle('addressList')}
                          value={get(values, 'address_data.address_line_1', '')}
                        />
                      </div>
                    </CustomField>

                    {/* Submit Button */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'fixed',
                        bottom: '0',
                        width: '100%',
                        backgroundColor: 'white',
                        paddingBottom: '2.016rem',
                        paddingTop: '2.112rem',
                        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
                      }}>
                      <ProceedButton type="button" onClick={submitForm}>
                        Proceed
                      </ProceedButton>
                    </div>
                  </>
                )}
                {isEqual(showAddress, 'addressList') && (
                  <UserAddress
                    setFieldValueUserForm={setFieldValue}
                    updateToggle={updateToggle}
                    addressesList={conciergeData}
                  />
                )}
                {isEqual(showAddress, 'addAddress') && (
                  <AddAddress setFieldValueUserForm={setFieldValue} isFromKotak={true} updateToggle={updateToggle} />
                )}
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

UserDetailsForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleGetPlans: PropTypes.func,
  kotakForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  conciergeData: makeSelectConciergeCalendar(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleGetPlans: id => dispatch(getKotakPlans(id)),
    membershipCheckout: payload => dispatch(membershipCheckoutAction(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(UserDetailsForm);
