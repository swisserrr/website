/**
 *
 * KotakForm
 *
 */

import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';
import { parse } from 'cookie';
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
import s from 'csd';
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

const KotakForm = ({ handleGetPlans, conciergeData, membershipCheckout, kotakForm }) => {
  const [renderUI, updateUI] = useState(
    get(kotakForm, 'submittedData.membership_items') && !localStorage.getItem('paymentDone')
      ? 'UserDetailsForm'
      : 'UserForm'
  );
  const [loading, setLoading] = useState(false);
  const currentDate = new Date();
  const router = useRouter();

  // Add 12 months to the current date
  currentDate.setMonth(currentDate.getMonth() + 12);

  // Display the future date in a specific format (e.g., YYYY-MM-DD)
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1
  const day = String(currentDate.getDate()).padStart(2, '0');
  const futureDate = `${day}/${month}/${year}`;
  // const dispatch = useDispatch();
  const kotakPlans = useSelector(state => state.kotakPlans);

  const plansData = get(kotakPlans, 'plans.plans', []);

  const initialStateArr = {
    uuid: null,
    index_id: 0,
    plan: '',
    duration: '',
    price: '',
    expiry: futureDate,
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
    same_as_buyer: '',
    buyingFor: 'Relative',
  };
  // const [initialValues, updateValues] = useState(
  //   get(kotakForm, 'submittedData.membership_items')
  //     ? get(kotakForm, 'submittedData.membership_items')
  //     : [initialStateArr]
  // );
  const [initialValues, updateValues] = useState([initialStateArr]);

  const [users, setUsers] = useState(initialValues);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [selfSelectedUser, setSelfSelectedUser] = useState(null); // Track who selected "Self"
  const [isSelfSelected, setIsSelfSelected] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('paymentDone')) {
      if (get(kotakForm, 'submittedData')) {
        //console.log(get(kotakForm, 'submittedData.membership_items'));
        updateValues(get(kotakForm, 'submittedData.membership_items'));
        setUsers(get(kotakForm, 'submittedData.membership_items'));
        setCurrentUserIndex(get(kotakForm, 'submittedData.membership_items').length - 1);
        const anySameAsBuyerTrue = get(kotakForm, 'submittedData.membership_items').some(
          user => user.same_as_buyer === true
        );
        const sameAsBuyerTrueIndex = get(kotakForm, 'submittedData.membership_items').findIndex(
          user => user.same_as_buyer === true
        );
        //console.log('sameAsBuyerTrueIndex', sameAsBuyerTrueIndex);
        //console.log('anySameAsBuyerTrue', anySameAsBuyerTrue);
        if (sameAsBuyerTrueIndex !== -1) {
          setSelfSelectedUser(sameAsBuyerTrueIndex);
        }

        setIsSelfSelected(anySameAsBuyerTrue);
      }
    }
  }, []);
  // useEffect(() => {
  //   if (get(kotakForm, 'submittedData.membership_items')) {
  //     console.log('testestestestes');
  //     setUsers(get(kotakForm, 'submittedData.membership_items'));
  //   }
  // }, []);

  useEffect(() => {
    setUsers(initialValues);
  }, [initialValues]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Access localStorage in a safe way
      const userString = localStorage.getItem('selectedPlan');

      if (userString) {
        try {
          const userObject = JSON.parse(userString); // Declare and parse inside try block
          if (userObject && userObject.plan && userObject.plan[0]) {
            updateValues(prevValues => {
              // Create a new array with the first element updated
              const updatedArray = [...prevValues]; // Copy the array
              updatedArray[0] = {
                ...updatedArray[0], // Spread the existing properties of the first object
                plan: userObject.plan[0]?.name ?? updatedArray[0].plan, // Fallback to previous value if undefined
                duration: userObject.plan[0]?.plan_prices[0]?.duration ?? updatedArray[0].duration,
                price: userObject.plan[0]?.plan_prices[0]?.price ?? updatedArray[0].price,
                base_plan_id: userObject.plan[0]?.plan_prices[0]?.node_item_uuid ?? updatedArray[0].node_item_uuid,
              };

              return updatedArray; // Return the updated array
            });
          }
        } catch (error) {
          //console.error('Error parsing localStorage data:', error);
        }
      }
    }
  }, []);

  const membershipCheckoutSubmit = (users, bool) => {
    //console.log('users', users);
    if (typeof window !== 'undefined') {
      // Access localStorage in a safe way
      const userOb = localStorage.getItem('user_data');
      const selectedPlan = localStorage.getItem('selectedPlan');

      if (userOb && selectedPlan) {
        try {
          const userObject = JSON.parse(userOb); // Declare and parse inside try block
          const planObject = JSON.parse(selectedPlan); // Declare and parse inside try block
          //console.log('userObject', userObject);

          if (bool) {
            let checkoutOb = {
              uuid: get(userObject, 'consumer_data,uuid'),

              first_name: get(userObject, 'first_name'),
              last_name: get(userObject, 'full_name'),
              mobile_number: get(userObject, 'mobile_number'),
              country_code: '+91',
              email: get(userObject, 'email'),

              same_as_buyer: true,
            };
            return checkoutOb;
          } else {
            let checkoutOb = {
              customer_id: get(userObject, 'uuid'),
              customer_type: 'registered',
              return_coins: 'true',
              node_id: get(planObject, 'plan.[0].pos_node_id'),
              membership_items: users,
            };
            membershipCheckout(checkoutOb);
          }
          // console.log(checkoutOb); // Output the object to ensure the structure is correct
        } catch (error) {
          console.error('Error parsing localStorage data:', error);
        }
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

  return (
    <div style={{ overflowY: 'auto', paddingBottom: '35%' }}>
      {get(kotakForm, 'checkoutLoading') || loading ? (
        <div
          style={{
            width: '100%',
            display: 'flex',
            margin: '20px 0',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}>
          <CircularProgress />
        </div>
      ) : (
        <>
          {renderUI === 'UserForm' && (
            <UserForm
              updateUI={updateUI}
              initialValues={initialValues}
              updateValues={updateValues}
              // handleGetPlans={handleGetPlans(partnerUUID)}
              plansData={plansData}
              futureDate={futureDate}
            />
          )}
          {renderUI === 'UserDetailsForm' && (
            <UserDetailsForm
              updateUI={updateUI}
              initialValues={initialValues}
              updateValues={updateValues}
              users={users}
              setUsers={setUsers}
              currentUserIndex={currentUserIndex}
              setCurrentUserIndex={setCurrentUserIndex}
              conciergeData={conciergeData}
              membershipCheckoutSubmit={membershipCheckoutSubmit}
              futureDate={futureDate}
              setSelfSelectedUser={setSelfSelectedUser}
              selfSelectedUser={selfSelectedUser}
              isSelfSelected={isSelfSelected}
              setIsSelfSelected={setIsSelfSelected}
            />
          )}
        </>
      )}
    </div>
  );
};

const UserDetailsForm = ({
  updateUI,
  initialValues,
  updateValues,
  users,
  setUsers,
  currentUserIndex,
  setCurrentUserIndex,
  conciergeData,
  membershipCheckoutSubmit,
  setSelfSelectedUser,
  selfSelectedUser,
  isSelfSelected,
  setIsSelfSelected,
  futureDate,
}) => {
  const [showAddress, updateToggle] = useState('form');
  // const [selfSelectedUser, setSelfSelectedUser] = useState(null); // Track who selected "Self"
  // const [isSelfSelected, setIsSelfSelected] = useState(false);

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    mobile_number: Yup.string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(10, 'Must be exactly 10 digits')
      .max(10, 'Must be exactly 10 digits')
      .required('Phone Number is required'),
    age: Yup.number()
      .required('Age is required')
      .min(55, 'Minimum age is 55'),

    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    addressDisplay: Yup.string().required('Address is required'),
    same_as_buyer: Yup.string().required('Select who you are buying for'),
  });

  const backButton = () => {
    if (currentUserIndex == 0) {
      updateUI('UserForm');
    } else {
      setCurrentUserIndex(prev => prev - 1);
    }
  };

  const handleSameAsBuyerChange = (value, setFieldValue) => {
    setIsSelfSelected(value);
    if (value) {
      // If 'Self' is selected
      setSelfSelectedUser(currentUserIndex);

      if (typeof window !== 'undefined') {
        // Access localStorage in a safe way
        const userOb = localStorage.getItem('user_data');
        // console.log('DATATATA',userOb);

        if (userOb) {
          try {
            const userObject = JSON.parse(userOb); // Declare and parse inside try block

            setFieldValue('first_name', get(userObject, 'first_name')); // Example autofill data
            setFieldValue('last_name', get(userObject, 'last_name'));
            setFieldValue('mobile_number', get(userObject, 'mobile_number'));
            setFieldValue('email', get(userObject, 'email'));
            setFieldValue('same_as_buyer', true);
            setFieldValue('age', '');
            setFieldValue('addressDisplay', '');
            setFieldValue('address_data', {
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
            });
            // console.log(checkoutOb); // Output the object to ensure the structure is correct
          } catch (error) {
            console.error('Error parsing localStorage data:', error);
          }
        }
      }
    } else if (value === false && selfSelectedUser === currentUserIndex) {
      setSelfSelectedUser(null);
      setFieldValue('first_name', '');
      setFieldValue('last_name', '');
      setFieldValue('mobile_number', '');
      setFieldValue('email', '');
      setFieldValue('age', '');
      setFieldValue('addressDisplay', '');
      setFieldValue('address_data', {
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
      });
    }
    setFieldValue('same_as_buyer', value);
  };
  // Autofill and clear logic

  const handleNext = values => {
    // Update the current user's data in the users array before switching to the next user
    const updatedUsers = [...users];
    updatedUsers[currentUserIndex] = values;
    setUsers(updatedUsers); // Update the users array in state

    // Move to the next user
    setCurrentUserIndex(prev => prev + 1);
  };

  const handleSubmit = values => {
    // Before submitting, update the current user's data in the users array
    const updatedUsers = [...users];
    updatedUsers[currentUserIndex] = values;
    setUsers(updatedUsers);

    // Submit the entire users array
    membershipCheckoutSubmit(updatedUsers); // This is now an array of all users
  };

  const userPlan = () => {
    const userData = JSON.parse(localStorage.getItem('user_data'));
    return get(userData, 'active_user_plan', null) ? true : false;
  };

  return (
    <div>
      {isEqual(showAddress, 'form') && (
        <>
          <BackButton onClick={() => backButton()}>
            <img style={{ width: '2.4rem', height: '2.4rem' }} src="/static/images/arrow_back_stick.webp" alt="Edit" />
          </BackButton>
          <div>
            <UserH1>User {currentUserIndex + 1}</UserH1>
          </div>
          <Container>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Card2 planName={initialValues[currentUserIndex]?.plan}>
                <div
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                      <Title>{initialValues[currentUserIndex]?.plan}</Title>
                      <Duration>{initialValues[currentUserIndex]?.duration} Months</Duration>
                    </div>
                    {initialValues[currentUserIndex]?.plan?.charAt(0).toLowerCase() === 'k' ? (
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
                      <Amount>₹ {initialValues[currentUserIndex]?.price * 12}</Amount>
                    </div>
                    <Expiry>Expiry on {initialValues[currentUserIndex]?.expiry}</Expiry>
                  </PlanDetails>
                </div>
              </Card2>
            </div>
          </Container>
        </>
      )}
      <Formik
        initialValues={
          users[currentUserIndex] || {
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
            same_as_buyer: '',
          }
        }
        validationSchema={validationSchema}
        enableReinitialize
        validateOnChange={false} // Disable automatic validation on field change
        validateOnBlur={false} // Disable validation on blur
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values); // Call the handleSubmit function
          setSubmitting(false);
        }}>
        {({ values, setFieldValue, errors, submitForm, validateForm, handleBlur, setErrors }) => {
          return (
            <Form>
              {isEqual(showAddress, 'form') && (
                <>
                  <CustomField>
                    <BuyText>Buying for?</BuyText>
                    <ButtonGroup>
                      <Button
                        type="button"
                        selected={values.same_as_buyer === true}
                        onClick={() => {
                          handleSameAsBuyerChange(true, setFieldValue);
                          setErrors({});
                        }}
                        disabled={(selfSelectedUser !== null && selfSelectedUser !== currentUserIndex) || userPlan()}
                        style={{
                          opacity:
                            (selfSelectedUser !== null && selfSelectedUser !== currentUserIndex) || userPlan()
                              ? 0.6
                              : 1,
                          cursor:
                            (selfSelectedUser !== null && selfSelectedUser !== currentUserIndex) || userPlan()
                              ? 'not-allowed'
                              : 'pointer',
                        }}>
                        Self
                      </Button>
                      <Button
                        type="button"
                        selected={values.same_as_buyer === false}
                        onClick={() => {
                          handleSameAsBuyerChange(false, setFieldValue);
                          setErrors({});
                        }}>
                        Relative
                      </Button>
                    </ButtonGroup>
                    {errors.same_as_buyer && <ErrorText>{errors.same_as_buyer}</ErrorText>}
                    {/* First Name */}
                    <div>
                      <Label2>First Name</Label2>
                      <Input
                        name="first_name"
                        placeholder="Enter First Name"
                        value={values.first_name}
                        onChange={e => setFieldValue('first_name', e.target.value)}
                        onBlur={handleBlur}
                        disabled={isSelfSelected && selfSelectedUser === currentUserIndex}
                      />
                      {/* Show errors only when validation is manually triggered */}
                      {errors.first_name && <ErrorText>{errors.first_name}</ErrorText>}
                    </div>

                    {/* Last Name */}
                    <div>
                      <Label2>Last Name</Label2>
                      <Input
                        name="last_name"
                        placeholder="Enter Last Name"
                        value={values.last_name}
                        onChange={e => setFieldValue('last_name', e.target.value)}
                        onBlur={handleBlur}
                        disabled={isSelfSelected && selfSelectedUser === currentUserIndex}
                      />
                      {errors.last_name && <ErrorText>{errors.last_name}</ErrorText>}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <Label2>Phone Number</Label2>
                      <Input
                        name="mobile_number"
                        placeholder="Enter Phone Number"
                        value={values.mobile_number}
                        onChange={e => setFieldValue('mobile_number', e.target.value)}
                        onBlur={handleBlur}
                        disabled={isSelfSelected && selfSelectedUser === currentUserIndex}
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
                        value={values.age}
                        onChange={e => setFieldValue('age', e.target.value)}
                        onBlur={handleBlur}
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
                        onChange={e => setFieldValue('email', e.target.value)}
                        onBlur={handleBlur}
                        disabled={isSelfSelected && selfSelectedUser === currentUserIndex}
                      />
                      {errors.email && <ErrorText>{errors.email}</ErrorText>}
                    </div>

                    {/* Address */}
                    <div>
                      <Label2>Address</Label2>
                      <TextArea
                        name="addressDisplay"
                        type="text"
                        placeholder="Enter Address"
                        rows="3"
                        value={values.address_data.address_line_1}
                        onClick={() => updateToggle('addressList')}
                        onBlur={handleBlur}
                      />
                      {errors.addressDisplay && <ErrorText>{errors.addressDisplay}</ErrorText>}
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
                    {currentUserIndex < users.length - 1 ? (
                      <ProceedButton
                        type="button"
                        onClick={() => {
                          validateForm().then(formErrors => {
                            if (Object.keys(formErrors).length === 0) {
                              handleNext(values);
                              setFieldValue('first_name', '');
                              setFieldValue('last_name', '');
                              setFieldValue('mobile_number', '');
                              setFieldValue('email', '');
                              setFieldValue('age', '');
                              setFieldValue('addressDisplay', '');
                              setFieldValue('address_data', {
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
                              });
                            } else {
                              console.error('Form validation errors:', formErrors);
                            }
                          });
                        }}>
                        Next
                      </ProceedButton>
                    ) : (
                      <ProceedButton
                        type="button"
                        onClick={() => {
                          validateForm().then(formErrors => {
                            if (Object.keys(formErrors).length === 0) {
                              localStorage.removeItem('paymentDone');
                              submitForm(); // Submit data when the form is valid
                            } else {
                              console.error('Form validation errors:', formErrors);
                            }
                          });
                        }}>
                        Proceed to Checkout
                      </ProceedButton>
                    )}
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
  );
};

const UserForm = ({ updateUI, initialValues, updateValues, plansData, futureDate }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePlan, setActivePlan] = useState('Empower Advanced');
  const sliderRef = useRef(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedPlanName, setSelectedPlanName] = useState(null);

  useEffect(() => {
    if (isEqual(activePlan, 'Empower Advanced')) {
      sliderRef.current?.slickGoTo(1);
      setCarouselIndex(1);
    } else if (isEqual(activePlan, 'Empower Basic')) {
      sliderRef.current?.slickGoTo(0);
      setCarouselIndex(0);
    } else {
      sliderRef.current?.slickGoTo(2);
      setCarouselIndex(2);
    }
  }, [activePlan]);

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

  const handleModalOpen = (member, index) => {
    setSelectedPlanName(member?.plan);
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };
  const handleBackButtonClick = () => {
    if (router.asPath.startsWith('/enterprise/kotak')) {
      router.push('/enterprise/kotak/plans');
    } else {
      router.push('/enterprise/federal/plans');
    }
  };

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
      <div style={{ overflowY: 'auto', paddingBottom: '35%' }}>
        <BackButton style={{ marginBottom: '2.8rem' }} onClick={handleBackButtonClick}>
          <img style={{ width: '2.4rem', height: '2.4rem' }} src="/static/images/arrow_back_stick.webp" alt="Edit" />
        </BackButton>

        <div style={{ paddingBottom: '200px' }}>
          {initialValues?.map((member, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{`User ${index + 1}`}</CardTitle>
                {initialValues?.length > 1 && (
                  <EditButton
                    type="button"
                    // onClick={() => arrayHelpers.remove(index)}
                    onClick={() => {
                      const newValues = initialValues.filter((_, i) => i !== index);
                      updateValues(newValues);
                    }}
                    disabled={initialValues?.length < 2}>
                    <img src="/static/images/deleteIcon.png" alt="Delete" />
                  </EditButton>
                )}
              </CardHeader>

              {/* <FormGroup> */}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Label
                  style={{
                    color: '#1D1D1D',
                    fontSize: '17px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '23.571px',
                  }}
                  htmlFor={`members[${index}].plan`}>
                  {get(member, 'plan')}
                </Label>
                <EditButton type="button">
                  <img src="/static/images/EditIconRed.png" onClick={() => handleModalOpen(member, index)} alt="Edit" />
                </EditButton>
                {isModalOpen && (
                  <Modal
                    onClose={handleModalClose}
                    // setFieldValue={setFieldValue}
                    index={selectedIndex}
                    setIsModalOpen={setIsModalOpen}
                    plansData={plansData}
                    updateValues={updateValues}
                    initialValues={initialValues}
                    selectedPlanName={selectedPlanName}
                  />
                )}
              </div>
              {/* </FormGroup> */}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Label
                  style={{
                    color: '#383838',
                    fontSize: '15px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '21px',
                  }}
                  htmlFor={`members[${index}].duration`}>
                  Duration {get(member, 'duration')} Months
                </Label>

                <Label
                  style={{
                    color: '#1D1D1D',
                    fontSize: '1.5434rem',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '150%',
                  }}
                  htmlFor={`members[${index}].price`}>
                  ₹ {get(member, 'price') * 12}
                </Label>
              </div>
            </Card>
          ))}
          {initialValues?.length <= 3 && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <AddMemberButton
                type="button"
                onClick={() =>
                  updateValues([
                    ...initialValues,
                    {
                      uuid: null,
                      index_id: initialValues.length,
                      plan: get(initialValues, '[0].plan'),
                      duration: get(initialValues, '[0].duration'),
                      price: get(initialValues, '[0].price'),
                      expiry: futureDate,
                      first_name: '',
                      last_name: '',
                      mobile_number: '',
                      country_code: '',
                      base_plan_id: get(initialValues, '[0].base_plan_id'),
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
                      same_as_buyer: '',
                    },
                  ])
                }
                disabled={initialValues?.length > 3}>
                + Add Member
              </AddMemberButton>
            </div>
          )}
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
            <ProceedButton onClick={() => updateUI('UserDetailsForm')}>Proceed</ProceedButton>
          </div>
        </div>
      </div>
    </>
  );
};

KotakForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleGetPlans: PropTypes.func,
  kotakForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  kotakForm: makeSelectKotakForm(),
  conciergeData: makeSelectConciergeCalendar(),
  kotakPlans: makeSelectKotakPlans(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleGetPlans: id => dispatch(getKotakPlans(id)),
    membershipCheckout: payload => dispatch(membershipCheckoutAction(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(KotakForm);
