/**
 *
 * NokConsentWms
 *
 */

import React, { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Head from 'next/head';
import HeaderBar from 'components/HeaderBar';
import MenuItem from '@mui/material/MenuItem';
import dynamic from 'next/dynamic';
import Image from 'utils/CustomImage';
const ThankYouModal = dynamic(() => import('components/ThankYouModal'));

import { createStructuredSelector } from 'reselect';

import {
  MainContainer,
  PageWrapper,
  FormWrapper,
  Title,
  Paragraph,
  Label,
  CheckboxLabel,
  CButton,
  ButtonContainer,
  CInput,
  CustomSelect,
  StyledCheckbox,
  NameContainer,
  NameTitle,
  FormInputContainer,
} from './styles';
import makeSelectNokConsentWms from './selectors';
import { submitConsent } from './actions';

export function NokConsentWms({ nokConsentWms, handleSubmitConsent }) {
  const [name, setName] = useState(nokConsentWms?.formDetails?.consent_provider || '');
  const [relationship, setRelationship] = useState(nokConsentWms?.formDetails?.relationship || 'self');
  const [agreed, setAgreed] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };

  const resetFormValues = useCallback(() => {
    setAgreed(false);
    setOpenModal(true);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      consent_service_uuid: nokConsentWms?.formDetails?.consent_service_uuid,
      status: agreed,
    };
    handleSubmitConsent(payload, resetFormValues);
  };

  return (
    <>
      <Head>
        <title>Emoha Elder Consent Form</title>
      </Head>
      <HeaderBar
        scrollingY={false}
        position="fixed"
        top="0px"
        textColor="white"
        backgroundColor="#1a1a1a"
        changesFromCorporate
      />
      <MainContainer>
        <PageWrapper>
          <FormWrapper>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottom: '1px solid rgba(0, 0, 0, 0.40)',
                marginBottom: '6rem',
              }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3.6rem', width: '100%' }}>
                <div style={{ width: '100%', maxWidth: '10rem' }}>
                  <Image src="/static/images/emoha-red-notext.svg" alt="Emoha Logo" width={100} height={100} />
                </div>
              </div>
              <Title>CONSENT FORM</Title>
            </div>

            <div
              style={{
                borderRadius: '8px',
                border: '1px solid rgba(0, 0, 0, 0.35)',
                width: '100%',
                height: '6.4rem',
                marginBottom: '3.6rem',
              }}>
              <NameContainer>
                <div style={{ width: '100%' }}>
                  <NameTitle>Name: {nokConsentWms?.formDetails?.elder_name}</NameTitle>
                </div>
                <div style={{ width: '100%' }}>
                  <NameTitle>NOK name: {nokConsentWms?.formDetails?.nok_name}</NameTitle>
                </div>
              </NameContainer>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Paragraph>
                I, the undersigned, hereby refuse the recommended transfer to the hospital facility as proposed by
                Ignoxlabs Private Limited (Emoha). I understand that by refusing this transfer, I am assuming the risks
                associated with not receiving care and that these risks have been explained to me.
              </Paragraph>
              <Paragraph>
                I confirm that this information has been conveyed to me in a manner that is clear, precise, and
                understandable to me. By making this decision, I affirm that it is made of my own free will, and I
                understand the potential consequences of refusing the recommended hospital treatment against medical
                advice.
              </Paragraph>
              <Paragraph>
                I hereby release and absolve Ignoxlabs Private Limited (Emoha) and any associated medical facility or
                institution from any liability or consequences arising from my decision to decline the proposed
                treatment and admission to the hospital. I acknowledge that my decision to decline treatment may pose
                risks to my health and well-being, and I take full responsibility for any such consequences.
              </Paragraph>
              <Paragraph>Please confirm if you consent to deny this recommendation.</Paragraph>
            </div>

            <div
              style={{
                border: '1px solid rgba(0, 0, 0, 0.41)',
                borderRadius: '8px',
                padding: '2.4rem',
                marginTop: '3.6rem',
              }}>
              <form onSubmit={handleSubmit}>
                <FormInputContainer>
                  <span style={{ width: '100%' }}>
                    <Label>Name:</Label>
                    <CInput
                      type="text"
                      value={name}
                      disabled={nokConsentWms?.formDetails?.consent_provider}
                      onChange={e => setName(e.target.value)}
                      required
                    />
                  </span>
                  <span style={{ width: '100%' }}>
                    <Label>Relationship:</Label>
                    <CustomSelect
                      sx={{
                        '& fieldset': { border: 'none' },
                      }}
                      inputProps={{ 'aria-label': 'With label' }}
                      value={relationship}
                      disabled={nokConsentWms?.formDetails?.relationship}
                      onChange={e => setRelationship(e.target.value)}>
                      <MenuItem style={{ color: '#cc4746' }} value={'self'}>
                        Self
                      </MenuItem>
                      <MenuItem style={{ color: '#cc4746' }} value={'nok'}>
                        Next of Kin (NOK)
                      </MenuItem>
                    </CustomSelect>
                  </span>
                </FormInputContainer>

                <CheckboxLabel>
                  <StyledCheckbox type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} />
                  <span style={{ marginLeft: '1rem' }}>I have read the above and accept the terms.</span>
                </CheckboxLabel>

                <ButtonContainer>
                  <CButton
                    loading={nokConsentWms?.isLoading}
                    backgroundColor="black"
                    type="submit"
                    disabled={!agreed || !name || !relationship}>
                    Submit Consent
                  </CButton>
                </ButtonContainer>
              </form>
            </div>
          </FormWrapper>
        </PageWrapper>
        <ThankYouModal openModal={openModal} closeModal={closeModal} hideCallUsButton />
      </MainContainer>
    </>
  );
}

NokConsentWms.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  nokConsentWms: makeSelectNokConsentWms(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleSubmitConsent: (payload, callback) => dispatch(submitConsent(payload, callback)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(NokConsentWms);
