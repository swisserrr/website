import React, { useCallback, useEffect } from 'react';
import { Formik, Form } from 'formik';
import {
  Container,
  BackButton,
  AddAddressButton,
  AddressList,
  AddressItem,
  AddressDetails,
  AddressTitle,
  AddressText,
  SelectButton,
  EditButton,
  Footer,
  UseButton,
} from './userAddress.styled';
import { get, map } from 'lodash';

import CircularProgress from '@mui/material/CircularProgress';

const UserAddress = ({ addressesList, setFieldValueUserForm, updateToggle }) => {
  const churnData = () => {
    //console.log("address list",get(addressesList, 'addressData.data', []));
    const addressesLists = map(get(addressesList, 'addressData.data', []), item => {
      if (get(item, 'default')) {
        return { ...item, title: 'Default Address' };
      }
      if (get(item, 'is_zoho_book_shipping_address')) {
        return { ...item, title: 'Shipping Address' };
      }
      if (get(item, 'is_zoho_book_billing_address')) {
        return { ...item, title: 'Billing Address' };
      }
      return { ...item, title: '' };
    });
    return addressesLists;
  };

  const moveToAddAddress = useCallback(() => {
    updateToggle('addAddress');
  });

  const handleAddressSelect = (item, setFieldValue) => {
    const addressOb = {
      address_line_1: get(item, 'address_line_1'),
      address_line_2: get(item, 'address_line_2'),
      city: get(item, 'city'),
      state: get(item, 'state'),
      country: get(item, 'country'),
      pincode: get(item, 'pincode'),
      geo_latitude: get(item, 'geo_latitude'),
      geo_longitude: get(item, 'geo_longitude'),
      locality: get(item, 'locality'),
      landmark: get(item, 'landmark'),
    };

    const concatenatedAddress = get(item, 'full_address');

    // Update Formik state
    setFieldValueUserForm('addressDisplay', concatenatedAddress); // For display purposes
    setFieldValueUserForm('address_data', addressOb);
    setFieldValue('selectedAddress', item.id); // Update the selected address
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {get(addressesList, 'loading', false) ? (
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
        <div
          style={{
            height: '100vh',
            // height: '-webkit-fill-available', // Fix for iOS Safari
            overflowY: 'scroll',
            // paddingBottom: '35%', // Fix for safe area insets in iPhone
            paddingBottom: 'calc(35%+env(safe-area-inset-bottom))', // Fix for safe area insets in iPhone
            // paddingBottom: 'calc(35%+env(safe-area-inset-bottom))', // Fix for safe area insets in iPhone
            maxHeight: '100vh', // Ensure max height respects viewport changes
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            // Fix for iOS Safari
            //  WebkitTransform: 'translate3d(0,0,0)',
          }}
          // style={{
          //   height: '-webkit-fill-available',
          //   overflowY: 'scroll',
          //   paddingBottom: '35%',
          //   maxHeight: '75rem',
          //   scrollBehavior: 'smooth',
          //   WebkitOverflowScrolling: 'touch',
          // }}
        >
          <Container>
            <BackButton onClick={() => updateToggle('form')}>
              <img
                style={{ width: '2.4rem', height: '2.4rem' }}
                src="/static/images/arrow_back_stick.webp"
                alt="Back"
              />
            </BackButton>

            <div style={{ display: 'grid', placeItems: 'center', marginTop: '2.3rem' }}>
              <AddAddressButton onClick={moveToAddAddress}>
                Add Address
                <span>
                  <img src="/static/images/locationRed.png" alt="Location Icon" />
                </span>
              </AddAddressButton>
            </div>

            <Formik
              initialValues={{ selectedAddress: '', addressDisplay: '', address: {} }} // Ensure all fields are present
              onSubmit={values => {
                //console.log('Form submitted with:', values);
                // Check if the selected address is available
              }}>
              {({ values, setFieldValue, errors }) => {
                //console.log('errors', errors);
                return (
                  <Form>
                    <AddressList>
                      {map(churnData(), address => {
                        if (get(address, 'is_active')) {
                          return (
                            <div style={{ display: 'grid', placeItems: 'center' }} key={address.id}>
                              <AddressItem>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                  <SelectButton
                                    type="radio"
                                    name="selectedAddress"
                                    value={address.id}
                                    checked={values.selectedAddress === address.id}
                                    onChange={() => handleAddressSelect(address, setFieldValue)} // Ensure correct handling
                                  />
                                  <AddressDetails>
                                    {address.title.length > 0 && <AddressTitle>{address.title}</AddressTitle>}
                                    <AddressText>{address.full_address}</AddressText>
                                  </AddressDetails>
                                </div>
                              </AddressItem>
                            </div>
                          );
                        }
                        return null; // Ensure to return null for inactive addresses
                      })}
                    </AddressList>
                    <Footer>
                      <UseButton onClick={() => updateToggle('form')}>Use this address</UseButton>
                    </Footer>
                  </Form>
                );
              }}
            </Formik>
          </Container>
        </div>
      )}
    </>
  );
};

export default UserAddress;
