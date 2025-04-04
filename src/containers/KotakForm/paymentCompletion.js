import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { getActivePlan } from '../KotakPlans/actions';

// Styled Components
const CheckoutContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #fff;
`;

const SectionTitle = styled.h2`
  margin-top: 2.8rem;
  margin-left: 1.6rem;
  margin-bottom: 1.9rem;
  color: #cc4746;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.64px;
`;

const ItemCard = styled.div`
  display: flex;
  padding: 1.6rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  align-self: stretch;

  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.13);

  background: #fff;
  width: 31.82rem;
  height: 12.2rem;
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const ItemUser = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  color: #538cee;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 23.571px;
`;

const PlanName = styled.div`
  color: #000;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 23.571px;
`;

const ItemPrice = styled.div`
  color: #000;

  text-align: right;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 23.571px;
`;

const ChangePlanButton = styled.button`
  background: none;
  border: none;
  color: #a83232;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: 10px;
`;

const DeleteButton = styled.button`
  // position: absolute;
  // top: 16px;
  // right: 16px;
  // background: none;
  // border: none;
  // color: #a83232;
  // cursor: pointer;
  width: 15px;
  height: 18px;
  flex-shrink: 0;
`;

const BillingDetails = styled.div`
  background: white;
  padding: 2.3rem;
  border-radius: 2.4rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 1.6rem;

  width: 328px;
  height: 189px;
  flex-shrink: 0;
`;

const BillingItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 0.9rem;
  align-items: center;
`;

const TotalPay = styled.div`
  color: #212121;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`;

const ProceedButton = styled.button`
  background-color: #da504a;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  width: 343px;
  height: 45px;
  padding: 11px 18px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

const ProceedButtonFlip = styled.button`
  background-color: white;
  color: #da504a;
  border: 1px solid #da504a;
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
  margin-bottom: 20px;
`;

const PaymentFailed = styled.p`
  color: #da504a;
  font-size: 28px;
  font-weight: 600;
  line-height: 42px;
  text-align: center;
`;

const PaymentSuccess = styled.p`
  color: #128760;
  font-size: 28px;
  font-weight: 600;
  line-height: 42px;
  text-align: center;
  padding-top: 20px;
`;

const SuccessText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #1a1a1a;
  margin-top: 30px;
`;

const SuccessTextRed = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #da504a;
  margin-top: 30px;
`;

const BackButton = styled.button`
  margin-top: 6.1rem;
  margin-left: 1.557rem;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  flex-direction: column;
  width: 100%;
  background-color: white;
  padding-bottom: 2.016rem;
  padding-top: 2.112rem;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

const CheckoutPage = ({ toggle }) => {
  const router = useRouter();
  const dispatch = useDispatch();

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

  if (toggle) {
    useEffect(() => {
      dispatch(getActivePlan());
    }, [dispatch]);
    return (
      <CheckoutContainer>
        {/* <BackButton>
          <img style={{ width: '2.4rem', height: '2.4rem' }} src="/static/images/arrow_back_stick.webp" alt="Edit" />
        </BackButton> */}
        <div
          style={{
            height: '70vh',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#FFF',
            paddingBottom: '2rem',
          }}>
          <img src="/static/images/success.png" />
          <PaymentSuccess>
            Payment <br /> Completed!
          </PaymentSuccess>
          <SuccessText>
            You have successfully
            <br />
            redeemed the plan.
          </SuccessText>
          {/* <SuccessTextRed>
            Do ensure to share this <br />
            news with your loved ones
          </SuccessTextRed> */}
        </div>
        <ButtonContainer>
          {/* <ProceedButton type="submit">Share</ProceedButton> */}
          <ProceedButtonFlip
            type="submit"
            onClick={() => {
              localStorage.setItem('paymentDone', '1');
              if (router.asPath.startsWith('/enterprise/kotak')) {
                router.push('/enterprise/kotak/services');
              } else {
                router.push('/enterprise/federal/services');
              }
            }}>
            Go to Home
          </ProceedButtonFlip>
        </ButtonContainer>
      </CheckoutContainer>
    );
  }
  return (
    <CheckoutContainer>
      <BackButton>
        <img style={{ width: '2.4rem', height: '2.4rem' }} src="/static/images/arrow_back_stick.webp" alt="Edit" />
      </BackButton>
      <div
        style={{
          height: '70vh',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#FFF',
          paddingBottom: '2rem',
        }}>
        <img src="/static/images/fail.png" />
        <PaymentFailed>Payment failed</PaymentFailed>
      </div>
      <ButtonContainer>
        <ProceedButton
          type="submit"
          onClick={() => {
            if (router.asPath.startsWith('/enterprise/kotak')) {
              router.push('/enterprise/kotak/kotakFlow');
            } else {
              router.push('/enterprise/federal/federalflow');
            }
          }}>
          Retry
        </ProceedButton>
        <ProceedButtonFlip
          type="submit"
          onClick={() => {
            if (router.asPath.startsWith('/enterprise/kotak')) {
              router.push('/enterprise/kotak/kotakFlow');
            } else {
              router.push('/enterprise/federal/federalflow');
            }
          }}>
          Go to Cart
        </ProceedButtonFlip>
      </ButtonContainer>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
