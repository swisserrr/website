import React, { memo, useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import round from 'lodash/round';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { makeSelectCheckout } from './selectors';
import { parse } from 'cookie';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// import { checkoutPaymentAction } from './actions';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Modal from './modal';
import makeSelectKotakPlans from 'containers/KotakPlans/selectors';
import { get } from 'lodash';
import { getKotakPlans } from 'containers/KotakPlans/actions';
import { checkoutAction, checkoutPaymentAction, checkoutSuccess } from './actions';
import { axiosInstance } from 'utils/request';
import Helpers from 'utils/helpers';
import APIS from '../../constants/apis';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CONFIG from '../../config';

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

const EditButton = styled.button`
  width: 15px;
  height: 18px;
  color: 'red';
`;

const BillingDetails = styled.div`
  background: white;
  padding: 2.3rem;
  border-radius: 2.4rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 1.6rem;

  width: 328px;
  height: ${props => (props.isKotak ? '189 px' : '160px')};
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

  display: flex;
  width: 343px;
  height: 45px;
  padding: 11px 18px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

const BillingTitle = styled.span`
  color: #1a1a1a;

  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 200% */
  letter-spacing: -0.14px;
  display: inline-block;
`;

const BillingPrice = styled.div`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
`;

const TotalPrice = styled.div`
  color: #457a3b;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
`;

const TotalLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.2rem;
  margin-left: 1.76rem;
  margin-right: 1.34rem;
  width: 360px;
  margin-bottom: 2rem;
  padding-left: 1.76rem;
  padding-right: 1.34rem;
`;

const BackButton = styled.button`
  margin-top: 6.1rem;
  margin-left: 1.557rem;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const CoinImage = styled.img`
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
  width: 20px;
  height: 20px;
`;
// Data for mapping
const cardData = [
  {
    id: 1,
    userName: 'Anand Ahuja',
    planName: 'Empower Advance',
    price: 4999,
  },
  {
    id: 2,
    userName: 'Ritika Sharma',
    planName: 'Empower Pro',
    price: 5999,
  },
];

const EditText = styled.span`
  color: rgba(204, 71, 70, 1);
  font-size: 10px;
  font-weight: 600;
  line-height: 12.1px;
`;

const ChangePlan = styled.span`
  color: rgba(204, 71, 70, 1);
  font-size: 10px;
  font-weight: 600;
  line-height: 12.1px;
`;

const CheckoutPage = ({ checkout, checkoutDispatch, paymentDispatch, handleGetPlans }) => {
  //console.log('checkout', checkout);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const kotakPlans = useSelector(state => state.kotakPlans);
  const cookies = document.cookie;
  const parsedCookies = cookies ? parse(cookies) : {};
  const partnerUUID = parsedCookies?.partner_uuid;
  const plansData = get(kotakPlans, 'plans.plans');

  const handleChangePlanClick = data => {
    handleGetPlans(partnerUUID);
  };

  useEffect(() => {
    localStorage.setItem('checkoutDataNew', JSON.stringify(checkout));
  }, [checkout]);

  const router = useRouter();
  const dispatch = useDispatch();
  const foBackScreen = useCallback(() => {
    if (router.asPath.startsWith('/enterprise/kotak')) {
      router.push('kotakflow');
    } else {
      router.push('federalflow');
    }
  }, []);

  const handleModalOpen = index => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  const handleEditClick = useCallback((mobile, uuid, itemName, price, duration, index_id) => {
    const planData = {
      itemName,
      price,
      duration,
    };

    if (router.asPath.startsWith('/enterprise/kotak')) {
      router.push(
        {
          pathname: '/enterprise/kotak/edit',
          query: {
            mobileNumber: mobile,
            uuid,
            planDetails: encodeURIComponent(JSON.stringify(planData)),
            index_id,
          },
        },
        '/enterprise/kotak/edit'
      );
    } else {
      router.push(
        {
          pathname: '/enterprise/federal/edit',
          query: {
            mobileNumber: mobile,
            uuid,
            planDetails: encodeURIComponent(JSON.stringify(planData)),
            index_id,
          },
        },
        '/enterprise/federal/edit'
      );
    }
  }, []);

  const filterPlan = id => {
    if (typeof window !== 'undefined') {
      const allPlans = JSON.parse(localStorage.getItem('allPlans'));
      // console.log('allPlans', allPlans);
      const data = allPlans?.plans?.find(data => data?.plan_prices?.[0]?.node_item_uuid === id);
      // console.log('filter', data);

      if (data) {
        const { duration } = data?.plan_prices?.[0] || {};
        return {
          name: data?.name,
          price: round(data?.plan_prices?.[0]?.price),
          duration,
        };
      }
    }
    return 'not found';
  };

  const handleDelete = async uuid => {
    let url = Helpers.getUrl(APIS.DELETE_USER).replace(':uuid', uuid);
    if (router.asPath.startsWith('/enterprise/kotak')) {
      url = url + '?return_coins=true';
    } else {
      url = url + '?return_coins=false';
    }
    try {
      setLoading(true);
      const res = await axiosInstance.delete(url);
      dispatch(checkoutSuccess(res.data));
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const handlePayment = orderId => {
    if (router.asPath.startsWith('/enterprise/kotak')) {
      if (!orderId) {
        router.push('/enterprise/kotak/success');
        return;
      }
      const options = {
        key: CONFIG.RAZORPAY_KEY_LIVE,
        amount: checkout?.total_payable * 100,
        currency: 'INR',
        order_id: orderId,
        name: 'Emoha',
        handler: function(response) {
          //console.log('Razorpay_Response', response);
          if (response.razorpay_payment_id) {
            router.push('/enterprise/kotak/success');
            return;
          }
          router.push('/enterprise/kotak/failure');
        },
        theme: {
          color: '#3399cc',
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } else {
      if (!orderId) {
        router.push('/enterprise/federal/success');
        return;
      }
      const options = {
        key: CONFIG.RAZORPAY_KEY_LIVE,
        amount: checkout?.total_payable * 100,
        currency: 'INR',
        order_id: orderId,
        name: 'Emoha',
        handler: function(response) {
          //console.log('Razorpay_Response', response);
          if (response.razorpay_payment_id) {
            router.push('/enterprise/federal/success');
            return;
          }
          router.push('/enterprise/federal/failure');
        },
        theme: {
          color: '#3399cc',
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    }
    //console.log('Callback orderId', orderId);
    // const order_Id = JSON.parse(localStorage.getItem('orderId'));
    // console.log('orderId', order_Id);

    // if (!orderId) {
    //   router.push('/enterprise/kotak/success');
    //   return;
    // }
    // const options = {
    //   key: CONFIG.RAZORPAY_KEY_LIVE,
    //   amount: checkout?.total_payable * 100,
    //   currency: 'INR',
    //   order_id: orderId,
    //   name: 'Emoha',
    //   handler: function(response) {
    //     //console.log('Razorpay_Response', response);
    //     if (response.razorpay_payment_id) {
    //       router.push('/enterprise/kotak/success');
    //       return;
    //     }
    //     router.push('/enterprise/kotak/failure');
    //   },
    //   theme: {
    //     color: '#3399cc',
    //   },
    // };
    // const rzp1 = new window.Razorpay(options);
    // rzp1.open();
  };

  const handlePay = () => {
    // const order_Id = JSON.parse(localStorage.getItem('orderId'));
    // if (!order_Id) {
    //   router.push('/enterprise/kotak/success');
    //   return;
    // }
    const partnerId = JSON.parse(localStorage.getItem('user_data'))?.partnerObj?.userPartnerInfoUuid;

    paymentDispatch({
      data: {
        user_partner_id: partnerId,
        coins: checkout?.total_coins_used,
        total_amount: checkout?.total_payable,
        cart_items: checkout?.data.map(data => ({
          // cart_items: checkout?.data?.[0]?.membership_details?.map(data => ({
          cart_item_id: data.uuid,
          discount_percent: 0,
          description: '',
        })),
      },
      // callback: payload => console.log('payload', payload),
      callback: orderId => handlePayment(orderId),
    });
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
      <CheckoutContainer>
        <div
          style={{
            overflowY: 'scroll',
            maxHeight: '70rem',
            paddingBottom: '15rem',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
          }}>
          <BackButton onClick={() => foBackScreen()}>
            <img style={{ width: '2.4rem', height: '2.4rem' }} src="/static/images/arrow_back_stick.webp" alt="Edit" />
          </BackButton>
          <div style={{ backgroundColor: '#FFF', borderBottom: '8px solid #ECEAE7', paddingBottom: '2rem' }}>
            <SectionTitle>Checkout Details</SectionTitle>
            {checkout?.data
              ?.flatMap(dataItem => dataItem?.membership_details || [])
              ?.map((item, index) => {
                const { name: itemName, price, duration } = filterPlan(item.base_plan_id);
                const planUuid = item?.base_plan_id;
                const mobileNumber = item?.mobile_number;
                const uuid = item?.uuid;

                return (
                  <div
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0.55rem 0' }}
                    key={index}>
                    <ItemCard>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          width: '100%',
                        }}>
                        <div>
                          <UserName>
                            {item?.first_name} {item?.last_name}
                          </UserName>
                          <div
                            style={{ display: 'flex', alignItems: 'center', marginTop: '2px', cursor: 'pointer' }}
                            onClick={() =>
                              handleEditClick(
                                item?.mobile_number,
                                item?.uuid,
                                itemName,
                                price,
                                duration,
                                item?.index_id
                              )
                            }>
                            <EditText>Edit</EditText>
                            <img src="/static/images/chevron_right.png" alt="Edit" style={{ marginLeft: '8px' }} />
                          </div>
                        </div>
                        {checkout?.data?.flatMap(dataItem => dataItem?.membership_details || []).length > 1 && (
                          <DeleteButton type="button" onClick={() => handleDelete(item?.uuid)}>
                            <img src="/static/images/deleteIcon.png" alt="Delete" />
                          </DeleteButton>
                        )}
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          width: '100%',
                        }}>
                        <div>
                          <PlanName>{filterPlan(item.base_plan_id).name}</PlanName>
                          <div
                            style={{ display: 'flex', alignItems: 'center', marginTop: '4px', cursor: 'pointer' }}
                            onClick={() => {
                              handleModalOpen(item?.uuid);
                              handleChangePlanClick();
                            }}>
                            <ChangePlan>Change plan</ChangePlan>

                            <img src="/static/images/chevron_right.png" alt="Edit" style={{ marginLeft: '8px' }} />
                          </div>
                        </div>
                        {isModalOpen && (
                          <Modal
                            onClose={handleModalClose}
                            index={selectedIndex}
                            setIsModalOpen={setIsModalOpen}
                            plansData={plansData}
                            changePlan={true}
                            uuid={uuid}
                            data={checkout?.data}
                            planUuid={planUuid}
                            mobileNumber={mobileNumber}
                            dispatch={dispatch}
                            setLoading={setLoading}
                            selectedPlanName={filterPlan(item.base_plan_id)?.name}
                          />
                        )}
                        <ItemPrice>₹ {filterPlan(item.base_plan_id).price}</ItemPrice>
                      </div>
                    </ItemCard>
                  </div>
                );
              })}
          </div>

          <div style={{ backgroundColor: '#FFF' }}>
            <SectionTitle>Billing Details</SectionTitle>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <BillingDetails isKotak={router.asPath.startsWith('/enterprise/kotak')}>
                <BillingItem>
                  <BillingTitle>Item Total</BillingTitle>
                  <BillingPrice>₹ {round(checkout?.total_mrp_before_coin_deduction, 2)}</BillingPrice>
                </BillingItem>
                {router.asPath.startsWith('/enterprise/kotak') && (
                  <BillingItem>
                    <BillingTitle>
                      Coin Used <CoinImage src="/static/images/kotakCoin.png" alt="Kotak Coin" />
                    </BillingTitle>
                    <BillingPrice style={{ color: '#538CEE' }}>₹ {round(checkout?.total_coins_used, 2)}</BillingPrice>
                  </BillingItem>
                )}
                <BillingItem>
                  <BillingTitle>Additional Taxes</BillingTitle>
                  <BillingPrice>₹ {round(checkout?.total_tax, 2)}</BillingPrice>
                </BillingItem>
                <BillingItem>
                  <BillingTitle>Amount to be Paid</BillingTitle>
                  <BillingPrice>₹ {round(checkout?.total_payable, 2)}</BillingPrice>
                </BillingItem>
              </BillingDetails>
            </div>
          </div>
        </div>

        {!isModalOpen && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'fixed',
              flexDirection: 'column',
              bottom: '0',
              width: '100%',
              backgroundColor: 'white',
              zIndex: 0,
            }}>
            <TotalLabel>
              <TotalPay>Total Pay:</TotalPay>
              <TotalPrice>₹ {round(checkout?.total_payable, 2)}</TotalPrice>
            </TotalLabel>
            <div
              style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                paddingBottom: '2.016rem',
                paddingTop: '2.112rem',
                boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
              }}>
              <ProceedButton type="submit" onClick={handlePay}>
                Proceed to Pay
              </ProceedButton>
            </div>
          </div>
        )}
      </CheckoutContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  checkout: makeSelectCheckout(),
  kotakPlans: makeSelectKotakPlans(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleGetPlans: id => dispatch(getKotakPlans(id)),
    checkoutDispatch: (callback, req) => dispatch(checkoutAction(callback, req)),
    paymentDispatch: callback => dispatch(checkoutPaymentAction(callback)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CheckoutPage);
