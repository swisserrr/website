/**
 *
 * Otp
 *
 */

import React, { memo, useState, useEffect, useRef } from 'react';

import { Custombox } from './styles';
import CustomModal from 'components/CustomModal';
import CircularProgress from '@mui/material/CircularProgress';
import OtpInput from 'react-otp-input';
import isEmpty from 'lodash/isEmpty';
function Otp({ error, isModalShow, setisModalShow, resendOtpFunc, verifyOtp, verifyLoading }) {
  const [otpValue, setotpValue] = useState();
  const [reSendCode, setreSendCode] = useState(false);
  const [counter, setcounter] = useState(15);
  const ref = useRef();

  const handleVerify = () => {
    verifyOtp(otpValue);
  };

  useEffect(() => {
    setotpValue();
  }, [isModalShow]);

  const clearSetTimeInterval = () => {
    let remainingSeconds = 15;
    ref.current = setInterval(() => {
      if (remainingSeconds > 0) {
        setcounter(e => e - 1);
      }
      if (remainingSeconds == 0) {
        setreSendCode(true);
        clearInterval(ref.current);
      }
      remainingSeconds--;
    }, 1000);
  };

  const reSendButtonClick = e => {
    setcounter(15);
    setreSendCode(e => !e);
    resendOtpFunc();
    clearSetTimeInterval();
  };

  const closeModal = () => {
    setisModalShow(false);
  };

  useEffect(() => {
    clearSetTimeInterval();
    return () => {};
  }, []);

  return (
    <>
      <CustomModal open={isModalShow} handleClose={closeModal}>
        <Custombox
          className="remove_incemented_icon"
          style={{
            padding: '3rem',
          }}>
          <h1
            style={{
              color: '#1A1A1A',
              fontFamily: 'Inter',
              fontSize: '1.6rem',
              fontWeight: '500',
              paddingBottom: '1rem',
            }}>
            Please enter the OTP shared on your corporate email address.
          </h1>
          <OtpInput
            style={{
              justifyContent: 'center',
            }}
            inputStyle={error ? 'otp_style error_style' : 'otp_style'}
            containerStyle={{ justifyContent: 'center' }}
            value={otpValue}
            onChange={e => {
              setotpValue(e);
            }}
            numInputs={4}
            inputType={'number'}
            renderInput={props => <input {...props} />}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 30,
            }}>
            <button
              onClick={() => {
                setotpValue();
                reSendButtonClick();
              }}
              style={{
                color: !reSendCode ? 'gray' : 'blue',
              }}
              disabled={!reSendCode}>
              {`Resend Code ${counter > 0 ? `(${counter}s)` : ''} `}
            </button>
            <button
              disabled={isEmpty(otpValue) || verifyLoading}
              style={{
                background: '#DA504A',
                fontSize: 12,
                padding: '1rem 2rem',
                borderRadius: '2rem',
                color: 'white',
              }}
              onClick={handleVerify}>
              {verifyLoading ? <CircularProgress size={24} color="inherit" /> : 'Verify'}
            </button>
          </div>
        </Custombox>
      </CustomModal>
    </>
  );
}

Otp.propTypes = { ...Otp };

export default memo(Otp);
