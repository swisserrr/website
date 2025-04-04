/**
 *
 * Account
 *
 */

import React, { memo, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Formik, Form } from 'formik';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import Image from 'utils/CustomImage';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { AccountDetailsSchema } from 'utils/validationSchema';
import makeSelectAccount from './selectors';
import { makeSelectUser } from '../Login/selectors';
import {
  Container,
  Heading,
  ButtonContainer,
  ErrorContainer,
  LoginImageContainer,
  GridMainContainer,
  LoginContainer,
  LoginSubContainer,
} from './styles';
import dynamic from 'next/dynamic';
const Input = dynamic(() => import('components/CustomInput'));
const CustomButton = dynamic(() => import('components/CustomButton'));
const HeaderBar = dynamic(() => import('components/HeaderBar'));

import theme from '../../utils/theme';
import { updateUser } from '../Login/actions';
import { pushEvent, utmDataHandler } from '../../utils/cleverTap';
import { EVENT_NAME } from '../../constants/constants';
export function Account({ handleUpdateUser, user, subcat }) {
  const router = useRouter();

  useEffect(() => {
    pushEvent(EVENT_NAME.PAGE_VIEWED, {
      ...{ source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath },
      ...utmDataHandler(router.query),
    });
  }, [router]);

  useEffect(() => {
    const checkCookies = () => {
      const cookies = document.cookie;
      if (!cookies) {
        router.push('/enterprise/kotak/login?enterprise=kotak');
      }
    };

    checkCookies();

    const interval = setInterval(checkCookies, 500);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <Container>
      <Head>
        <title>Emoha | Account</title>
      </Head>
      <HeaderBar position={'relative'} backgroundColor={theme.palette.black.main} />
      <GridMainContainer>
        <div>
          <LoginImageContainer>
            <Image
              src="/static/images/login_cover.jpg"
              alt="Login screen image"
              fill
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            />
          </LoginImageContainer>
        </div>
        <LoginContainer>
          <LoginSubContainer>
            <Heading>Confirm your information</Heading>
            <Formik
              initialValues={{
                first_name: '',
                last_name: '',
                email: '',
              }}
              validationSchema={AccountDetailsSchema}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={values => {
                pushEvent(EVENT_NAME.SAVE_DETAILS, {
                  ...{ page_name: isEqual(router.asPath, '/') ? '/Home' : router.asPath },
                  ...utmDataHandler(router.query),
                });
                const payload = {
                  ...values,
                  userId: user?.uuid,
                  timezone: Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone,
                };
                handleUpdateUser(payload, () => {
                  if (router.asPath.startsWith('/enterprise/medibuddy')) {
                    router.push(`/enterprise/medibuddy/${subcat}/services`);
                  } else if (router.asPath.startsWith('/enterprise/kotak')) {
                    router.push('/enterprise/kotak/plans');
                  } else if (router.asPath.startsWith('/enterprise/federal')) {
                    router.push('/enterprise/federal/plans');
                  } else {
                    router.push('/survey/1');
                  }
                });
              }}>
              {({ errors, values, handleChange, handleSubmit }) => (
                <Form style={{ width: '100%' }}>
                  <Input
                    id="first_name"
                    width={'100%'}
                    value={values.first_name}
                    type="text"
                    onChange={handleChange}
                    margin="1rem 0"
                    placeholder="First name*"
                    error={errors.first_name}
                  />
                  <Input
                    id="last_name"
                    width={'100%'}
                    value={values.last_name}
                    type="text"
                    onChange={handleChange}
                    margin="1rem 0"
                    placeholder="Last name*"
                    error={errors.last_name}
                  />
                  <Input
                    id="email"
                    width={'100%'}
                    value={values.email}
                    type="text"
                    onChange={handleChange}
                    margin="1rem 0"
                    placeholder="Email*"
                    error={errors.email}
                  />
                  {!isEmpty(errors) ? <ErrorContainer>Please fill full information</ErrorContainer> : null}
                  <ButtonContainer>
                    <CustomButton type="submit" variant="contained" color="primary" onPress={handleSubmit}>
                      Proceed
                    </CustomButton>
                  </ButtonContainer>
                </Form>
              )}
            </Formik>
          </LoginSubContainer>
        </LoginContainer>
      </GridMainContainer>
    </Container>
  );
}

Account.propTypes = {
  ...Account,
};

const mapStateToProps = createStructuredSelector({
  account: makeSelectAccount(),
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleUpdateUser: (payload, callback) => dispatch(updateUser(payload, callback)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Account);
