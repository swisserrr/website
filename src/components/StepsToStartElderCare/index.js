import React, { useState, useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import { ServicesHeading, ServicesPartnershipDescription } from 'containers/BusinessPartner/styles';
import { StickyDiv } from './styles';
import BpCard from 'components/BpCard';
import { data1, data2, data3, data4, data5 } from './constantValues';

import useMediaQuery from '@mui/material/useMediaQuery';

const getDimensions = ele => {
  const { height } = ele?.getBoundingClientRect() || {};
  const offsetTop = ele?.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const index = () => {
  const [visibleSection, setVisibleSection] = useState('initialApplicationAndMeetUp');

  const headerRef = useRef(null);
  const initialApplicationAndMeetUp = useRef(null);
  const docSubAndReview = useRef(null);
  const siteVisitVerification = useRef(null);
  const contactSigning = useRef(null);
  const GTM = useRef(null);
  const matches = useMediaQuery('(max-width:600px)');

  const sectionRefs = [
    { section: 'initialApplicationAndMeetUp', ref: initialApplicationAndMeetUp },
    { section: 'docSubAndReview', ref: docSubAndReview },
    { section: 'siteVisitVerification', ref: siteVisitVerification },
    { section: 'contactSigning', ref: contactSigning },
    { section: 'GTM', ref: GTM },
  ];

  const handleScroll = () => {
    const { height: headerHeight } = getDimensions(headerRef.current);
    const scrollPosition = window.scrollY + headerHeight;

    const selected = sectionRefs.find(({ section, ref }) => {
      const ele = ref.current;
      if (ele) {
        const { offsetBottom, offsetTop } = getDimensions(ele);

        return scrollPosition > offsetTop && scrollPosition < offsetBottom;
      }
    });

    if (selected && selected.section !== visibleSection) {
      setVisibleSection(selected.section);
    } else if (!selected && visibleSection != 'initialApplicationAndMeetUp') {
      setVisibleSection(undefined);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  }, [visibleSection]);

  return (
    <div style={{ backgroundColor: '#FBEEED', padding: '6rem 0' }}>
      <div
        ref={headerRef}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <ServicesHeading>Steps to Start Elder Care Journey Together</ServicesHeading>
        <ServicesPartnershipDescription>
          {matches
            ? 'Begin by familiarizing yourself with the essentials. '
            : 'Embark on the exciting Elder Care Journey: Begin by familiarizing yourself with the essentials.'}
        </ServicesPartnershipDescription>
      </div>

      <Grid
        container
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
        sx={{ marginTop: { xs: '4rem', sm: '4rem', md: '8rem' } }}>
        <Grid size sm={2} md={2} display={{ sm: 'none', xs: 'none', lg: 'block' }}>
          <StickyDiv>
            <button
              type="button"
              className={`header_link ${visibleSection === 'initialApplicationAndMeetUp' ? 'selected' : ''}`}
              onClick={() => {
                setVisibleSection('initialApplicationAndMeetUp');
                scrollTo(initialApplicationAndMeetUp.current);
              }}>
              Initial Application and Meetup
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === 'docSubAndReview' ? 'selected' : ''}`}
              onClick={() => {
                setVisibleSection('docSubAndReview');

                scrollTo(docSubAndReview.current);
              }}>
              Document Submission and Review
            </button>

            <button
              type="button"
              className={`header_link ${visibleSection === 'siteVisitVerification' ? 'selected' : ''}`}
              onClick={() => {
                setVisibleSection('siteVisitVerification');

                scrollTo(siteVisitVerification.current);
              }}>
              Site Visit and Verification
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === 'contactSigning' ? 'selected' : ''}`}
              onClick={() => {
                setVisibleSection('contactSigning');

                scrollTo(contactSigning.current);
              }}>
              Contract Signing
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === 'GTM' ? 'selected' : ''}`}
              onClick={() => {
                setVisibleSection('GTM');

                scrollTo(GTM.current);
              }}>
              Go To Market (GTM) Training and Support
            </button>
          </StickyDiv>
        </Grid>
        <Grid
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
          item
          sm={8}
          xs={11}
          md={8}>
          <div className="section" id="initialApplicationAndMeetUp" ref={initialApplicationAndMeetUp}>
            <BpCard heading="Initial Application and Meetup" list={data1} listNo={1} />
          </div>
          <div className="section" id="docSubAndReview" ref={docSubAndReview}>
            <BpCard heading="Document Submission and Review" list={data2} listNo={2} />
          </div>
          <div className="section" id="siteVisitVerification" ref={siteVisitVerification}>
            <BpCard heading="Site Verification" list={data3} listNo={3} />
          </div>
          <div className="section" id="contactSigning" ref={contactSigning}>
            <BpCard heading="Contract Signing" list={data4} listNo={4} />
          </div>
          <div className="section" id="GTM" ref={GTM}>
            <BpCard heading="Go To Market (GTM) Training and Support" list={data5} listNo={5} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default index;
