/**
 *
 * TermsConditions
 *
 */

import React, { memo, useCallback, useEffect, useRef } from 'react';
import HeaderBar from 'components/HeaderBar';
import MuiContainer from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { BannerContainer, Container, Heading, NormalPara, TabLabel, TabsContainer } from './styles';
import HomePageText from 'components/HomePageText';
import useMediaQuery from '@mui/material/useMediaQuery';
import ScrollContainer from 'react-indiana-drag-scroll';
import isEqual from 'lodash/isEqual';
import Footer from 'components/Footer';
import { useRouter } from 'next/router';
import Image from 'utils/CustomImage';

export function TermsConditions({ index }) {
  const matches = useMediaQuery('(max-width:600px)');
  const router = useRouter();
  const data = [
    { label: 'Terms & Conditions', tabIndex: 1, slug: '/terms-and-conditions' },
    { label: 'Privacy Policy', tabIndex: 2, slug: '/privacy-policy' },
    { label: 'Cookies Policy', tabIndex: 3, slug: '/cookies-policy' },
    { label: 'Disclaimer', tabIndex: 4, slug: '/disclaimer' },
  ];
  const scrollRef = useRef(null);
  const container1 = useRef(null);
  useEffect(() => {
    if (scrollRef.current) {
      const containerNode = scrollRef.current.container;
      const itemNode = containerNode?.current?.childNodes[index - 1];

      if (itemNode) {
        const scrollLeft = itemNode.offsetLeft - containerNode?.current?.offsetLeft;
        container1.current.scrollTo(scrollLeft, 0);
      }
    }
  }, [router, index]);
  const Tab = useCallback((label, tabIndex, slug) => {
    return (
      <TabLabel scroll={false} href={slug} active={isEqual(tabIndex, index)}>
        {label}
      </TabLabel>
    );
  }, []);
  return (
    <>
      <Container>
        <HeaderBar backgroundColor="#000" />
        <Grid container>
          <BannerContainer>
            <Image
              fill
              src={matches ? '/static/images/legal_mobile.webp' : '/static/images/legal_desktop.webp'}
              quality={100}
              priority={true}
              style={{ objectFit: 'cover' }}
            />
            <MuiContainer
              sx={{
                height: { xs: '100%' },
                display: { xs: 'flex' },
                alignItems: { xs: 'end', md: 'center' },
                justifyContent: { xs: 'center', sm: 'flex-start' },
              }}>
              <HomePageText
                // width={{ xs: '31.6rem', md: '62.2rem' }}
                textAlign={matches ? 'center' : 'left'}
                fontSize={{ xs: '2.2rem', md: '4.6rem' }}
                fontWeight={{ xs: '600', md: '500' }}
                variant={'h2'}
                position={{ xs: 'relative', md: 'relative' }}
                height={{ xs: '8.1rem', md: 'auto' }}
                margin={{ xs: '0 0 8vh 0', md: '0 0 0 0' }}
                display="flex"
                color={{ xs: '#FFFFFF', md: '#FFFFFF' }}
                letterSpacing={{ xs: '-0.04em', md: '-0.04em' }}
                lineHeight={{ xs: '2.7rem', md: '5.6rem' }}>
                Understanding Our Terms & Policies
              </HomePageText>
            </MuiContainer>
          </BannerContainer>
        </Grid>
      </Container>

      <div style={{ width: '100%' }}>
        <TabsContainer>
          <MuiContainer style={{ position: 'relative' }} sx={{ padding: '0 0 0 16px' }}>
            <ScrollContainer ref={scrollRef} innerRef={container1} style={{ display: 'flex' }}>
              {data.map(data => {
                return Tab(data.label, data.tabIndex, data.slug);
              })}
            </ScrollContainer>
          </MuiContainer>
        </TabsContainer>
      </div>

      <MuiContainer style={{ position: 'relative', marginBottom: 40 }}>
        {index === 1 && (
          <div>
            <NormalPara>
              <strong>Emoha App (“App”)</strong>: All Users / Members who have not subscribed to any of Emoha Services (
              <strong>“Users”</strong>), shall be subject to the EULA, Disclaimer and Privacy Policy as listed on the
              App. All Users hereby give consent to Emoha to use their registered phone number for receiving “Whatsapp
              Communications”. It authorizes Emoha to send one-way messages using WhatsApp to the registered number in
              the nature of information, alerts, updates, transaction alerts in relation to the Customer’s Account, and
              such other communications from time to time, at its discretion. Users may choose to discontinue receiving
              such alerts by replying <strong>“stop”</strong> to the messages. It also authorizes to use their
              testimonials, pictures and videos as on social media, brochures, website or any other collateral for
              marketing purposes.
            </NormalPara>
            <Heading> For Paid Members</Heading>
            <NormalPara>
              The member (<strong>“Member”</strong>) who has subscribed to any of the paid Membership Services offered
              by Ignoxlabs Pvt. Ltd. (“herein referred to as <strong>Emoha/We/Us/Our</strong>”) agrees and undertakes,
              that the membership is subject to compliance of the following T&C. The term “<strong>Services</strong>”{' '}
              mentioned hereunder shall unless it is expressly stated otherwise, includes services forming part of all “
              <strong>Membership Plan/s</strong>” offered by Us.
            </NormalPara>
            <Heading>1.&nbsp;Terms</Heading>
            <NormalPara>
              The Member may choose a Membership Plan for the duration specified at the time of payment. The Membership
              Plan begins on the Service Activation Date and continues for the selected period or renewed term. If the
              Member chooses to renew Services beyond the initial Term, Emoha will review required Services and
              communicate the Membership Fee to the Member or to the Next of Kin (“<strong>NOK</strong>”), a relative of
              the Member authorized to make decisions on their behalf who is of sound mind and above 18 years of age.
              Upon confirmation and payment, the membership shall stand renewed.
            </NormalPara>
            <Heading>2.&nbsp;SERVICES</Heading>
            <NormalPara>
              a&#41; Emoha{"'"}s Services are subject to the T&C and require the Member to provide registration details
              either through the App or to their Emoha Daughter. The Membership Plans can be availed by either one or
              two elders (The Member and his/ her spouse), and the Services provided will be those identified and
              mentioned at the time of registration.
              <br />
              <br /> b&#41; The Service Initiation Date for the Membership Plan availed by the Member will be within 48
              hours of the payment date, during which an Emoha team member will call the Member to confirm relevant
              details of the elder. The Services will be activated on the Service Activation Date, which is the date on
              which relevant details for the provision of Services are confirmed by Emoha, and the Member will receive
              written confirmation of the activation.
              <br />
              <br /> c&#41; Emoha reserves the right to suspend the Services at any time if there is a breach of the T&C
              by the Member, their NOK, or any family members.
              <br />
              <br /> d&#41; The Member unconditionally and explicitly accepts and acknowledges all terms of the T&C. If
              the Member is of unsound mind or medically unfit to understand the T&C, then all obligations and
              responsibilities will be deemed to be the responsibilities of their NOK. Emoha assumes that the Nok is
              legally empowered to engage in shared decision-making on behalf of the Member for healthcare and other
              matters.
              <br />
              <br /> e&#41; The Member acknowledges that the Services will only be available in the region falling
              within city limits from the elder&apos;s address at the time-of-Service Activation ( the “
              <strong>Home Zone</strong>”).
              <br />
              <br /> f&#41; The Member affirms that the Services will be delivered at their residential address, as per
              the information furnished in the Membership Form or during online registration, and within the designated
              Home Zone.
              <br />
              <br /> g&#41; If the Member intends to avail Services outside the Home Zone while traveling to a different
              location (“<strong>Destination Zone</strong>”), they must notify us at least 48 (Forty-Eight) hours
              before. We will inform the Member if Services can be provided at the Destination Zone.
              <br />
              <br /> h&#41; The provision of Services in the Destination Zone is subject to our confirmation and
              availability. We shall not be held liable for any Services that cannot be provided in the Destination
              Zone. <br />
              <br /> i&#41; The Member acknowledges that granting access to their house is necessary for rendering the
              Services as detailed in the Membership Plans offered by Us. Our team member(s) or personnel require
              unobstructed access to the Member's house when called upon by the Member or as required for the Services.
              If access to the house is locked or inaccessible, we reserve the right to forcefully enter and provide
              Services without being held responsible for any delay or inability to render Services. Any damage caused
              due to forceful entry shall be borne by the Member. The Member is recommended to install a locking system
              recommended by us at the main entrance for emergency access by our team member(s) into the house. We shall
              perform the Services using reasonable skill, care and as per standard industry practices and/or applicable
              laws.
            </NormalPara>
            <Heading>3.&nbsp;APP/CALL OR SENSOR BASED EMERGENCY COORDINATION SERVICE (SBECS)</Heading>
            <NormalPara>
              a) The emergency coordination service under the Membership Plans are app based or call-based service or
              sensor-based services. <i>For App based emergency coordination service</i> - i. The Member shall download
              the App in his/her mobile and use the App or call Us in case of emergencies. ii. We reserve the right to
              modify and update the app from time to time and the Member are advised to regularly check for update /
              discounts to enjoy all features of the App.
              <br />
              <i>For call-based emergency coordination service</i> – The Member may also avail emergency coordination
              service forming part of the Service plan availed by such Member, by calling at the 24/7 Toll Free
              Emergency Co-ordination Number listed on 1800-123-445-555. It is the duty of the Member and/or their NOK
              to ensure the Member has the Emoha Toll Free number saved in their phone(s).
              <br />
              <i>For sensor based emergency coordination service</i> – For members whose plan includes sensors like
              panic buttons, Emoha may arrange sensors at the address of Member duly provided by the third party after
              due consent of Members, post consent of Members these sensors may be configured with Emoha’s backend
              system, however, Emoha shall have no liability for successful functioning of the same.: In the event the
              Member chooses to use any third-party sensor or utilize their existing installed sensors, We shall neither
              be responsible nor liable towards any defects, after sale services, technical glitches and/or
              non-functioning of such third-party sensors. Further, if as a result of any of the aforementioned We are
              unable to effectively provide Services to the Members, We shall not be held liable in any manner
              whatsoever and, in this respect the Member consequently disclaims all liabilities qua Us. b) Our Emergency
              Coordination Services, whether requested through App, call or sensors is subject to successful operations
              of intermediate telecom operators for relaying signals between the Member’s home and Us.
            </NormalPara>
            <Heading>4.&nbsp;MEMBERSHIP FEE</Heading>
            <NormalPara>
              a) Member pays Membership Fee in advance for Services specified at the time of purchase.
              <br />
              b) We accept payments communicated during sign-up or from time to time. Member is responsible for
              informing of changes to payment information and any consequences of declined payments.
              <br />
              c) Member confirms and acknowledges that the Membership Fee and all other amounts, expenses, and charges
              payable to Us are fair and reasonable and are the essence of this arrangement. It is further acknowledged
              that where any costs, charges or expenses are incurred by Us/Our team member in rendering the Services,
              then same shall be paid/reimbursed to Us by the Member within 7 (Seven) days from raising the invoice.
              <br />
              d) Different or additional services will be charged at prevailing rates with applicable terms and
              conditions.
              <br />
              e) For Enterprise Member, the membership fee shall be directly charged from the respective enterprise. All
              the taxes pertaining to enterprise membership shall be borne by respective enterprise. Enterprise Member
              may be entitled for extra services beyond the scope of Membership Plan on request subject to payment and
              availability.
            </NormalPara>
            <Heading>5.&nbsp;TAXES</Heading>
            <NormalPara>
              The Member is responsible for paying all current and future local and Government taxes on the Membership
              Fee and other charges. The taxes must be paid according to Our instructions, and they are included in the
              Membership Fee and other charges.
            </NormalPara>
            <Heading>6.&nbsp;MEMBER’S RESPONSIBILITY</Heading>
            <NormalPara>
              The member using the services does so at their own risk, free will and has the sole responsibility to
              provide accurate and complete information. It is their duty to provide complete medical history and
              updated reports to make available services. We will not be responsible for authentication of medical
              records, nor will we verify the medical records. We shall be entitled to maintain digital records of
              Member’s clinical history.
              <br />
              <br />
              The Member agrees to abide by and follow all instructions placed or provided by Us from time to time in
              respect of use/availing the Services. Safety and security of our team member(s)/Nurses/Attendants
              rendering services are on the Members at their house. Our Services are subject to appropriate weather,
              city civic conditions, Force Majeure conditions including but not limited to riots, lockdown, pandemic,
              curfew, war, terrorist acts, or any external circumstances which are not under Our control. The Member
              shall be responsible for the safekeeping and safety of Members personal property, goods, and belongings,
              including but not limited to money, jewellery, dentures, or hearing aids. Apart from the responsibilities
              stated above, the Member availing the Home Care Services agrees and acknowledges to fulfill other
              responsibilities. The Member shall ensure that sufficient food, clean drinking water, a clean and safe
              place to sleep, access to a functional washroom with toilet and bath facilities and other basic
              necessities are provided to Attendants/Nurses staying at the house. The Member must complete police
              verification of the Attendants/Nurses with the local police station as a precautionary measure. The Member
              will be responsible for supplying all supplies (i.e. cleaning, personal care, etc.) and equipment
              necessary in the provisioning of the Services. Attendants are not authorized to administer any kind of
              medications. The Member shall inform Us/Our team/Attendants/Nurses if the Member or any person who might
              be staying at the house of the Member is suffering from any communicable disease. The Member also agrees
              and acknowledges to indemnify and hold Us/Our team/Attendants/Nurses harmless against any loss, liability,
              or damage caused due to wilful neglect or negligence in intimating Us/Our team members/Attendants/Nurses
              about the aforementioned.
              <br />
              <br />
              The Member or NOK(s), family members, or any person who might be visiting the house of the Member shall
              not misbehave, threaten, physically man-handle, or detain any Emoha team member against their wishes. If
              such a situation arises, the Member will be responsible for any contingencies/harm caused to the Emoha
              team member directly or indirectly due to the acts or omission on the part of the Member.
              <br />
              <br />
              No Member shall, by words or actions, cause harm to any of the Emoha team members, including but not
              limited to mental, emotional, or physical harm. Members shall not engage in any activity that could lead
              to theft or damage to Emoha's property, or any other illegal activity. Members shall comply with all laws
              and regulations related to the use of the Services.
              <br />
              <br />
              The Member acknowledges that Emoha shall not be held liable for any kind of loss or damage, including but
              not limited to loss of profits, revenue, or data, arising from the use of any Services or the inability to
              use the Services. These terms and conditions shall be governed by and construed in accordance with the
              laws of India. The Member agrees not to circumvent and hire or poach Emoha team member, or partner or
              vendor introduced by Emoha during the tenure of the membership and 12 (twelve) months after the expiry of
              the tenure.
            </NormalPara>
            <Heading>7.&nbsp;REPRESENTATION AND COVENANTS OF MEMBER</Heading>
            <NormalPara>
              The Member/NOK(s) hereby represents and warrants that: a) It has all requisite legal power and authority
              to enter into and abide by the terms and conditions as enumerated under these T&C; b) All the information,
              records, reports including medical records provided by Member or on his/her behalf are true and accurate
              and We may rely on the same for the purposes of rendering the Services as mentioned in clause 6 of this
              T&C. c) the Member’s personal information disclosed to Us, shall be used for the purpose of providing
              Services on the App. and, shall be collected, used, stored and shared in accordance with the terms of the
              privacy policy of the App. Further, it shall be noted that all the calls made from Emoha shall be recorded
              for the safety purpose of the Member. In the event the Member or Member’s representative wish to withdraw
              the consent at any time here after, the Member or Member’s Representative may ask for the data/information
              to be removed from the App., by submitting a request in this regard with Us{' '}
              <strong>at eldersfirst@emoha.com.</strong> On requisition, We shall remove such information at the
              earliest possible. However, the Member or NOK accepts and acknowledges that in the event such consent is
              refused, or withdrawn, We retain the right to either not provide or withdraw the Services for which the
              said information was sought. It is further accepted and acknowledged that the inability to provide the
              Services in such event shall not amount to default or breach on Our part and We shall not be liable for
              any damages monetary or otherwise. d) The rights, benefits, privileges and obligations of the Member are
              personal and non-transferrable. e) In case of emergency qua the Member, We reserve the right to take such
              steps as We may deem fit and necessary and Member or NOK shall provide full co-operation in respect of the
              same; and f) that We act as repository of Members medical records, in this regard, the Member hereby
              expressly, unequivocally and unconditionally consents and agrees that such data and information can be
              used/shared by Us in case of emergencies and/or for marketing purposes, research or survey purposes (if
              consented under the Membership Form/ at the time of registration on the App). No royalties, fees or
              charges will be payable to the Member for the same.
            </NormalPara>
            <Heading>8.&nbsp;INDEPENDENT BUSINESSES OWN FRANCHISEES</Heading>
            <NormalPara>
              While Emoha solely operates and controls the App and the online services, certain franchisees of Emoha (“
              <strong>Franchisee</strong>”) provide certain services in different territories of India (“
              <strong>Franchisee Services</strong>”). Each Franchisee is solely and independently responsible for its
              legal and regulatory compliance and for any employment related matters in the Franchisee. When a Member
              uses the Franchisee Services, the contract for the Franchisee Services will be between the Member and the
              Franchisee. The Member further understands and agrees that they are purchasing the Franchisee Services
              directly from the Franchisees (and not Emoha or any other Members of the Emoha System, as defined below)
              and that neither Emoha nor any other Members of the Emoha System have any responsibility arising out of or
              related to any Franchisee Services. For any acts of omission or commission done by the Franchisee and its
              affiliates and/or any other appointed third parties, Emoha will not be responsible in any manner
              whatsoever. Emoha, its subsidiaries, affiliates, their franchisees, agents, representatives, and agencies
              and their officers, directors, and employees are together, “<strong>Members of the Emoha System</strong>”.
            </NormalPara>
            <Heading>9.&nbsp;ACKNOWLEDGEMENT AND COVENANTS OF MEMBER QUA THIRD PARTY SERVICES</Heading>
            <NormalPara>
              The Member voluntarily consents to and authorizes the rendering of elder care services, including routine
              services, diagnostic procedures, check-up, medications, laboratory services, nurse & attendant’s services
              and other services, including the use or potential use of restraint, which an attending physician or
              others holding clinical and non-clinical privileges consider necessary in person or telehealth. The Member
              understands that the practice of elder care services is not an exact science and they acknowledge that no
              promises or guarantees have been made to them regarding any Services rendered by Emoha.
            </NormalPara>
            <Heading>10.&nbsp;TERMINATION AND EXPIRY TERMINATION BY US</Heading>
            <NormalPara>
              a) We may terminate the membership at any time, with or without cause, by giving 7 (Seven) days advance
              written notice to the Member. We may withhold Services and/or terminate the membership by giving 7 (Seven)
              days prior written notice to the Member upon breach/default by the Member of these T&C and/or any rules,
              regulations and instructions intimated to the Member from time to time and failure of the Member to
              rectify the same within the given timeline.
              <br />
              <br /> b) Notwithstanding anything contained in (a) above, We shall have the right to terminate the
              membership immediately upon notice to the Member: i. at any time if the Member is found in breach of
              clause 6 in whole. ii. at any point, before or after the Member has accessed the Services, upon finding
              about any misrepresentation or omission made by the Member while providing information specifically with
              regard to Medical history or resources of the Member. c) We reserve the right to not render Services, upon
              finding that We/Our team members /Attendants/Nurses will not be able to take the Member’s care owing to
              Member’s medical condition including if the Member or any person residing at his house are suffering from
              a communicable disease including COVID-19 (which was not disclosed to Us earlier or which condition
              happened/occurred at a later stage).
            </NormalPara>
            <Heading>11.&nbsp;TERMINATION BY A MEMBER</Heading>
            <NormalPara>
              A Member may choose to terminate the Membership Plan at any time. In case of termination of a prepaid
              annual Membership Plan, Emoha shall retain the Membership Fee amount for that particular quarter of the
              year, and be issued a refund of the balance payment subject to deductions (if any). In case of termination
              of a Membership Plan wherein the Member has opted to make prepaid quarterly payments, no refunds shall be
              issued.
            </NormalPara>
            <Heading>12.&nbsp;CESSATION OF MEMBERSHIP IN CASE OF DEATH OR NON-RENEWAL</Heading>
            <NormalPara>
              a) Non-renewal: Our responsibility to render the Services may also cease to exist in the event of
              non-renewal of the Membership by the Member prior to expiry of the Term.
              <br />
              <br />
              b) Death: Death: This membership shall terminate automatically upon death of the Member. The Member/NOK
              shall be charged the Membership Fees and other charges (as applicable) till the period Services are
              provided.
            </NormalPara>
            <Heading>13.&nbsp;CONSEQUENCES OF CESSATION OR TERMINATION OR DISCONTINUANCE</Heading>
            <NormalPara>
              We shall not be liable to render any Services post termination, cessation or expiry of the membership.
              Upon termination, cessation or discontinuance of the Services, We shall be entitled to disconnect Our
              emergency system from the sensor installed at Member’s house or app installed by the Member and/or render
              other Services as mentioned herein. Any of censor(s)/device(s) provided by Emoha as a part of subscription
              plan on lease shall be taken back upon cessation or termination of the services.
            </NormalPara>
            <Heading>14.&nbsp;OUR RELATIONSHIP WITH THE MEMBER </Heading>
            <NormalPara>
              a) We will provide the Services to the Member as an independent service provider and it shall never be
              construed as Principal-Agent relationship.
              <br />
              b) The Member shall have no right, power or authority to assume/bind /create any obligation on behalf of
              or in Our name or Our team member’s name, in any manner whatsoever.
              <br />
              c) The Member agrees and acknowledges that We reserve the right of admission of the Member and/or
              cancellation of membership of the Member, at Our sole discretion, for any reason whatsoever.
              <br />
              d) The Member shall ensure that the NOK representative or emergency contact person (as specified and
              shared in the Membership Form or at the time of online registration) shall not transfer or otherwise
              assign his/her duties and obligations qua the Member and this membership, without prior written
              intimation.
            </NormalPara>
            <Heading>15.&nbsp;ENTERPRISE COVERAGE</Heading>
            <NormalPara>
              We hereby confirm that all terms and conditions stated above regarding the membership/products outlined in
              the preceding section shall remain unchanged. This declaration is applicable regardless of the sales
              channel through which the product is acquired. The term "channel" encompasses all methods of product
              distribution, including but not limited to direct sales by the company, sales conducted through affiliated
              entities (such as the Enterprise channel, Broker, or other specialized offers from third-party companies).
              Please be assured that irrespective of the sales channel utilized, the terms and conditions specified
              above shall remain fully enforceable.
            </NormalPara>
            <Heading>16.&nbsp;INDEMNITY</Heading>
            <NormalPara>
              The Member agrees and undertakes to indemnify Emoha and its affiliate’s from and against any and all
              claims, including third party claims, liabilities, and expenses including reasonable attorneys’ fees,
              resulting from any breach of the T&C and/or any breach of law in any material respect, by the Member or
              Nok or family members.
            </NormalPara>
            <Heading>17.&nbsp;LIMITATION OF LIABILITY</Heading>
            <NormalPara>
              a) As a Member, you understand that we are committed to providing our Services to you in good faith and
              will make every effort to ensure that the Services provided are safe, healthy, and suitable for your
              needs. However, we cannot be held liable for any direct, indirect, consequential, or incidental damages or
              harm caused to you. We will also not be held responsible for any damages or loss of health, property, or
              life resulting from actions not attributable to us, our team members, affiliates, partners, service
              providers, Attendants, or Nurses.
              <br />
              b) In the event of any liability, our responsibility to you will be limited to the amount paid by you to
              us in the last preceding quarter of the Term, from the date the liability arose, after deducting the value
              of the services provided up to that date.
            </NormalPara>
            <Heading>18.&nbsp;JURISDICTION AND GOVERNING LAW</Heading>
            <NormalPara>
              The Courts at Gurugram, Haryana shall have jurisdiction over the disputes relating to the membership,
              Membership Form, and these T&C.
            </NormalPara>
            <Heading>19.&nbsp;MODIFICATION OF THE TERMS AND CONDITIONS</Heading>
            <NormalPara>
              We reserve the right to update/amend the terms and conditions and same will be notified to Member over
              Emoha App. Emoha shall deem the T&C as an unequivocal and unconditional acceptance of such modifications
              if no objection/s is raised within 3 (Three) days of display of the updated terms and conditions.
            </NormalPara>
            <Heading>20.&nbsp;SEVERABILITY</Heading>
            <NormalPara>
              If any provision of these T&C (in whole or part) is held to be illegal, invalid or otherwise
              unenforceable, the other provisions shall remain in full force and effect.
            </NormalPara>
            <Heading>21.&nbsp;FORCE MAJEURE</Heading>
            <NormalPara>
              We shall not be liable, in any manner whatsoever, for any breach/default of the Services caused by
              circumstances beyond Our control including without limiting to any acts of God, pandemic, strike, orders
              of authorities etc. Further, in case of a force majeure event, if We are unable to render any part of the
              Services, the same shall not be considered breach or default on Our part.
            </NormalPara>
            <Heading>22.&nbsp;WELCOME KIT, MEMBERSHIP FORM AND T&C</Heading>
            <NormalPara>
              It is hereby clarified that the Welcome Kit, online Registration Forms and these T&C comprise of
              information, terms and conditions for accessing and using the Services and the specific commercials,
              details and understanding relating to the Services, Membership Fees, payments terms, Member details, term,
              complimentary and additional services etc. The T&C shall form part of the Membership, Registration Form or
              invoice and shall be read in conformity with the same.
            </NormalPara>
            <Heading>23.&nbsp;SURVIVAL</Heading>
            <NormalPara>
              Neither the expiration nor termination of the Services shall affect such provisions of these T&C that by
              their very nature must survive such expiration or termination or which out of necessity must continue to
              have effect after such expiration or termination.
            </NormalPara>
          </div>
        )}
        {index === 2 && (
          <div>
            <NormalPara>
              This Privacy Policy (“<strong>Privacy Policy</strong>”) is intended to provide users of Emoha’s website
              and Application (“<strong>App</strong>”), clear and complete information about the data and information
              that the Company (as defined below) collects in connection with the services and the way that data and
              information is stored and used.
              <br />
              This Privacy Policy applies to the services available under the website and the domain of App which is
              owned, hosted and maintained by <strong>Ignoxlabs Private Limited</strong> and its affiliates (“
              <strong>the Company</strong>” or “<strong>We</strong>” or “<strong>Us</strong>” or “<strong>Our</strong>”)
              and having its registered office at 2nd Floor, Unit No. 216, Ocus Quantum, Sector 51 Gurgaon,
              Haryana-122003. All the content provided on the website and the App is general content for informational
              purpose only (“<strong>Content</strong>”). We are committed towards protecting the privacy and information
              of the registered members who have availed any of the service plans of the Company (“
              <strong>Member</strong>”) and users who are registered on the App (hereinafter, both Member and users of
              the App, will collectively be referred as “<strong>User</strong>” or “<strong>Users</strong>” or “
              <strong>You</strong>” “<strong>Your</strong>”). This Privacy Policy sets forth what all information and/or
              database the App gathers (categorized as mandatory or optional) and/or which the Company may possess or
              has gained access to during the course of Users interaction with the Company and how We collect, use,
              store, share and protect such information collected from the Users. Please review the Privacy Policy
              carefully so that You understand Our privacy practices. In case You have any queries or concerns regarding
              this Privacy Policy, You should contact Us by email at feedback@emoha.com.
            </NormalPara>
            <Heading>1.&nbsp;Acceptance of terms of the Privacy Policy by the Users:</Heading>
            <NormalPara>
              This Privacy Policy is to be reviewed along with the Disclaimer, End User License Agreement and Terms of
              Use of the App, which is applicable on You when You access and use Our App; and any other documentation
              signed with the Company at the time of availing Our services or any time thereafter in relation to Our
              in-principle relationship (if any). By using this App or at the time of availing the membership of the
              service plans provided by the Company (unless expressly refused), You signify Your acceptance of the
              Privacy Policy and expressly consent to Our collection, use, disclosure, and retention of Your information
              as described in this Privacy Policy.
              <br />
              If You do not agree to this Privacy Policy and/or to Our collecting, using, storing or sharing of Your
              data/information in the manner outlined in this Privacy Policy, which may be obtained either while using
              the App or by way of a written contract, You may opt to either not use this App or submit any personal
              data to Us. In the event You wish to withdraw the consent at any time, You may ask for the
              data/information to be removed from the App, by submitting a request in this regard with Us at
              <strong>feedback@emoha.com</strong>. However, You accept and acknowledge that in the event You do not
              provide Your Personal Information or consent, or withdraw Your consent for the usage of the Personal
              Information, the Company retains the right to either not provide or withdraw the services for which the
              said Information was sought. You further accept and acknowledge that the inability or refusal to provide
              the services in such event shall not amount to infringement, default or breach of any obligation or
              liability of the Company whatsoever, and the Company shall not be liable for any damages, claims or loss
              caused.
              <br />
              THE DISCLOSURE ON OR WHILE USING THE WEBSITE AND/OR AGREED EITHER IN A WRITTEN CONTRACT OR OTHERWISE SHALL
              AMOUNT TO EXPRESS AGREEMENT OF THE TERMS OF THIS PRIVACY POLICY.
            </NormalPara>
            <Heading>2.&nbsp;Scope of the Privacy Policy</Heading>
            <NormalPara>
              This Policy is applicable to Personal Information (as defined herein after) and sensitive personal data or
              information collected by the Company directly from the User or through the Company’s website, online
              portals, App and electronic communications as also any information collected by the Company’s server from
              the User’s browser.
            </NormalPara>
            <Heading>3.&nbsp;Information collected by Us</Heading>
            <NormalPara>
              3.1 Personally identifiable information:
              <br />
              Personally identifiable information means any information that may be used to identify an individual,
              including but not limited to the following:
              <br />
              (a) Information about Your personal identity inter alia as name, age, sex, blood group, emergency contact,
              government identification number for billing and tax compliance purposes;
              <br />
              (b) Your contact details such as Your address, postal code, telephone, live location or mobile number and
              facsimile;
              <br />
              (c) User ID information such as Your username, email address and other security-related information
              provided by You either at the time of using the App or otherwise;
              <br />
              (d) Physical, physiological and mental health condition;
              <br />
              (e) Medical records and history
              <br />
              <br />
              The aforementioned shall collectively be referred to as “Personal Information”. Personal Information will
              also include any personally identifiable information provided by You in any form, in course of Our
              in-principle relationship or during any interaction or communication with Us or any other users of Our
              App. We shall only collect the Personal Information which is considered relevant for the purpose of
              providing You services or to facilitate Your experience while accessing and using the App.
              <br />
              <br />
              Personal Information may also get collected and shared with third-parties if there is Content from the App
              that You specifically and knowingly upload, share or transmit to an email recipient, online community,
              App, or to the public, e.g. uploaded photos, posted reviews or comments, or information about You or
              anything posted by You that You choose to share with others through features which may be provided on Our
              App. Such uploaded, shared or transmitted Content will also be subject to the privacy policy of the email,
              online community, App, social media or other platforms to which You upload, share or transmit the Content.
              <br />
              <br />
              3.2. Information We collect during access and use of Our App:
              <br />
              <br />
              Apart from any Personal Information provided by You, We may also collect certain non- personal and/or
              technical information through third-party sources, platforms (such as social networking Apps, databases,
              online marketing firms, and ad targeting firms) and other channels. We may also collect the information
              You choose to provide under account settings (including preferences set in the "Account" section of Our
              App).
              <br />
              <br />
              3.3. Information We collect from other sources:
              <br />
              <br />
              We may access information about You from third-party sources and platforms (such as social networking
              Apps, databases, online marketing firms, and ad targeting firms), including:
              <br />
              (a) if You access third-party social networking services (such as Facebook or Twitter) through the App, We
              may collect, personal contact information and/or any personal data that is part of Your profile on such
              third party social network and that You allow that third party social network to share with Us (e.g. name,
              email address, gender, birthday, city, profile picture, user ID, friend list).
              <br />
              <br />
              (b) demographic data, such as age range, gender, and interests;
              <br />
              <br />
              (c) advertisement interaction and viewing data, such as ad click-through rates and information about how
              many times You viewed a particular ad; and
              <br />
              <br />
              (d) unique identifiers, including mobile device identification numbers, that can identify the physical
              location of such devices at the point of access in accordance with applicable law.
              <br />
              <br />
              Please note that the App may combine the information that We collect with information We obtain from
              third-party sources.
              <br />
              In addition to the above, We may collect information about how You use Our App such as the date and time
              You visit the App, the sections or pages of the App that You visit, the amount of time You spend viewing
              the App, the number of times You return to the App, visits to App outside Our network, and other
              click-stream data. Some of this data may be shared with partners who referred You to Our App and who will
              use the data to optimize who else they refer to Our App. Sometimes this data can be shared with partners
              who help Us deliver ads to You on Apps not controlled by Us.
              <br />
              The aforementioned information herein collected by Us under Clause 3.1, 3.2 and 3.3 are collectively
              referred to as “Information”.
            </NormalPara>
            <Heading>4.&nbsp;How will Information be used:</Heading>
            <NormalPara>
              The Information so collected shall be stored and used to analyse, administer, enhance and personalize the
              services provided by the Company and/or other related purposes designated by the Company or for the
              purpose of complying with the applicable laws and regulations. The Company will not divulge any
              Information collected from the customer, for cross selling or such other purposes. We may provide the
              Information to Our affiliates and service providers under contract (such as customer care, data analytics)
              to support the operation of the App and Our services. To the extent We use Your Information to market to
              You, We will provide You the ability to opt-out of such uses.
              <br />
              We may also use the Information to provide contents and services that are targeted to Your interests. By
              accepting the Privacy Policy, You expressly agree to receive this communications/information. If You do
              not wish to receive these communications, We encourage You to opt out of the receipt of certain
              communications in Your profile under my Account or by clicking unsubscribe any email communication. You
              may make changes to Your profile at any time.
              <br />
              <br />
              4.1. Processing for User Login
              <br />
              <br />
              We may use the Information for processing Your login for Our App.
              <br />
              <br /> 4.2. Technical and functional management:
              <br />
              <br /> We use technical data such as Your IP address to help diagnose problems and resolve issues related
              to functionality of the App.
              <br />
              <br /> 4.3. Improvement of App:
              <br />
              <br /> We aggregate and analyze the Information that We collect and may use the same to monitor and
              analyze use of the App, to increase Our App's functionality, and to better tailor Our Content and design
              to suit Our Users’ needs so as to provide them with a smooth, efficient, safe and customized experience
              while using the App.
              <br />
              <br /> 4.4. Request Fulfillment & to improve customer service:
              <br />
              <br /> We may also use the Information that We collect to fulfil Your requests for products, services, and
              information, which helps Us respond to Your customer service requests and support needs, more efficiently.
              For example, We may use Your contact information to respond to Your customer service requests or to enable
              You to participate in features on the App such as surveys, polls, and message boards. We may also use
              Information in the aggregate to understand how Our Users as a group use the services and resources
              provided on Our App and use feedback You provide to improve Our products and services. Further, We use the
              Information to resolve disputes; troubleshoot problems; measure consumer interest in the services provided
              by Us, inform You about online and offline offers, products, services, and updates; customize Your
              experience; detect and protect Us against error, fraud and other criminal activity; enforce the End User
              License Agreement and Terms of Use or this Privacy Policy, and in general to improve the Users’
              experience.
              <br />
              <br /> 4.5. Location Information <br /> <br /> When You download or use the App and where applicable, have
              requested or consented to the location services, We may receive information about Your location and Your
              mobile device including Your live location. The said information shall be used to provide location based
              services such as providing home visits by doctors, nurses, physiotherapists etc.; providing Emergency
              Responder Services; and/or such other services (if and when requested by the Member/User) which by its
              very nature requires the use of geographical location to be accessed and/or shared with the service
              provider. <br />
              <br />
              4.6. Emergency Responder Services:
              <br />
              <br /> For the purpose of providing Emergency Responder Services to the Members of the Company, the
              Company may use and disclose, in the event and to the extend the same may deem required to protect the
              wellbeing of the Member, the Personal Information including but not limited to the live location of the
              Member, blood group, age, name, sex, medical history, emergency contact etc. with the following: (i)
              “Emergency Responder” as being the team of personnel who shall approach the Member at the earliest
              possible and endeavour to stabalise the health of the Member until the ambulance arrives (ii) the hospital
              staff where the Member may be taken (iii) any other emergency service providers such as fire brigade etc.
              <br />
              <br />
              4.7. Service Providers:
              <br />
              <br /> We may employ third party services to facilitate or outsource one or more aspects of the business,
              product and service operations that We provide to You on the App or otherwise (e.g., medical
              professionals, health check-up labs etc.) and therefore We may provide some of Your Personal Information
              to these internal service providers. The third party medical professionals including but not limited to
              doctors, physiotherapists, dietician, nurses etc. who provide health care services to the Member in
              association with the Company will have access and shall be able to upload the Personal Information of the
              Member from/on the account of the Member. These internal service providers are subject to confidentiality
              agreements with Us and other legal restrictions that prohibit their use of Your Personal Information for
              any other purpose except to facilitate the specific outsourced service. In the event of Your direct
              involvement with the internal service provider, any additional information disclosed by You to them shall
              be subject to internal service providers’ own applicable privacy policy and the App/Company shall not be
              responsible for the same.
              <br />
              <br /> 4.8. Research Purposes:
              <br />
              <br /> The Information of the Member may be anonymised and used for research purposes.
              <br />
              <br /> 4.9. Enforcement:
              <br />
              <br /> We may use the Information that We collect to prevent illegal activities, to enforce the Privacy
              Policy, and to otherwise protect Our rights and the rights of Our Users. In addition to the uses
              identified above, We may use the Information that We collect for any other purposes disclosed to You at
              the time We collect Your Information.
              <br />
              <br /> 4.10. Legal Requests and/or Compliance with Applicable Laws:
              <br />
              <br /> We cooperate with law enforcement and regulatory inquiries, as well as other third parties to
              enforce laws, such as intellectual property rights, fraud and other rights, to help protect You and the
              community. Therefore, in response to a verified request by any statutory authority including but not
              limited to law enforcement agency or other government officials relating to a criminal investigation or
              alleged illegal activity, We may (and You authorize Us to) disclose, as per the applicable laws, some of
              Your Personal Information as is reasonably necessary to respond /comply with the statutory mandate
              including but not limited to court orders, or other legal process. We may access, use, transfer or
              disclose Your Personal Information to third parties such as government or law enforcement authorities or
              private parties, if it is legally and statutorily required to do so under any of the following conditions:
              <br />
              <br />
              (a) To satisfy any applicable law, rule, regulation, governmental requests or legal process.
              <br />
              <br /> (b) To protect and/or defend and/or enforce Our Privacy Policy for online services or other
              policies applicable to any online services in case of potential violations.
              <br />
              <br /> (c) To secure Our systems. <br />
              <br />
              (d) To respond to claims that an advertisement, posting or other content violates the rights of a third
              party.
              <br />
              <br /> (e) To protect the rights, property or personal safety of the Users and the public in general for
              any reason.
              <br />
              <br /> (f) To detect, prevent or otherwise address fraud, security or technical issues.
              <br />
              <br /> (g) To prevent or stop activity We may consider to be, or to pose a risk of being, an illegal,
              unethical, or legally actionable activity.
              <br />
              <br /> In case of any illegal, unethical or legally actionable activity, We may use IP address or other
              device identifiers, to identify users, and may do so in cooperation with third parties such as internet
              service providers, wireless service providers and/or law enforcement agencies, including disclosing such
              information to third parties, all in Our discretion. Such disclosures may be carried out without notice to
              You. However, We shall not sell, share or rent the Users Personal Information to any third party or use
              any users e-mail id for sending any unsolicited mails.
              <br />
              <br /> 4.11. Other Corporate Entities:
              <br />
              <br /> We share much of Our data, including Information about You, with Our affiliates, subsidiaries, and
              joint ventures that are committed to serving Your online requests and related services, throughout the
              world. To the extent that these entities have access to Your Personal Information, they remain bound by
              the existing Privacy Policy. As We continue to develop Our business, We might sell or buy subsidiaries or
              business units. In such transactions, Users’ Information generally is one of the transferred business
              assets but shall remain subject to the terms and conditions contained in this Privacy Policy.
              <br />
              <br /> 4.12. With Users’ explicit consent:
              <br />
              <br /> We do not sell or rent Users’ Personal Information to third parties for their marketing purposes,
              but with Your explicit consent, We may disclose Your Personal Information (i) to third parties for their
              marketing and advertising purposes; (iii) to send You promotions, notifications, or other services.
              However, the Users have the right to opt-out of receiving marketing communications about the Company/App.
            </NormalPara>
            <Heading>5.&nbsp;Protection and Security Information collected by the App</Heading>
            <NormalPara>
              We take Our security responsibilities very seriously and take all reasonable technical and organizational
              measures to protect Your Information once We have received them. We use security measures consistent with
              current best practices to protect Our App, email and mailing lists. These measures include technical,
              procedural, monitoring and tracking steps intended to safeguard data from misuse, unauthorized access or
              disclosure, loss, alteration or destruction. We also have physical, electronic, and procedural safeguards
              that comply with the laws prevalent in India to protect Personal Information about You and, accordingly,
              We take appropriate security measures to protect against unauthorized access, alteration, disclosure or
              destruction of Your personal information, username, password, transaction information and data stored on
              Our App in compliance with the provisions of the Information Technology Act, 2000 and Information
              Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information)
              Rules, to ensure the protection and preservation of Your privacy. In addition to the above, We, on best
              endeavour basis, try to limit access to Personal Information of Our users to only such users who We
              believe reasonably need to come into contact with that Information to provide products or services to You.
              However, no data transmissions over the internet can be guaranteed to be 100 percent secure. Consequently,
              We cannot ensure or warrant the security of any Information You transmit to Us and You understand that any
              Information that You share is done at Your own risk.
            </NormalPara>
            <Heading>6.&nbsp;Retention of Personal Information</Heading>
            <NormalPara>
              Unless specified otherwise in this Privacy Policy, We will retain Your Information as permitted or
              required by applicable law. In some cases, even after the termination or expiry of the membership or
              cancellation of the user account, Your Information may be retained for the purpose of legal and regulatory
              compliances, resolving disputes, concluding activities related to account cancellation, enforcing Our
              agreements and Privacy Policy or for any other reason which may be deemed necessary. However, the
              Information of the User will get anonymized after the termination or expiry of the membership or
              cancellation of user account except for the abovementioned purposes.
            </NormalPara>
            <Heading>7.&nbsp;Change in Personal Information</Heading>
            <NormalPara>
              You are responsible for maintaining the accuracy of all the Personal Information uploaded on the App. If
              there are any changes in Your Personal Information details, You may correct or update the information. To
              do so, please log into Your account, and You will find options for editing the information You have
              submitted.
            </NormalPara>
            <Heading>8.&nbsp;Cookie Policy</Heading>
            <NormalPara>
              The website and the App are digital platforms which may use various third party services to promote
              Company’s services. These third party services may use cookies which are downloaded to your device when
              you visit a website/app in order to provide a personalised browsing experience. Cookies are used for
              multiple purposes including but not limited to remembering your preference & settings, provide
              personalised browsing experience and analyse site operations. These cookies collect Information about how
              Users use a website, for instance, how often visited pages. By using the App, the Users agree that these
              types of cookies can be placed on the User’s device. The User is free to disable/delete these cookies by
              changing the device/browsers setting. The User expressly acknowledge that the Company shall not be
              responsible for cookies placed in User’s device by any other website/app and information collected
              thereto.
            </NormalPara>
            <Heading>9.&nbsp;Disclaimer</Heading>
            <NormalPara>
              This Privacy Policy is to be read with the End User License Agreement and Terms of Use, and Disclaimer
              which together establish the use and limitations of liability governing the use of the App.
            </NormalPara>
            <Heading>10.&nbsp;Indemnification</Heading>
            <NormalPara>
              You agree and undertake to indemnify and hold Us harmless, from and against any and all suit, dispute,
              actions, damages, costs and expenses, if any, of whatsoever nature, arising out of or in any way connected
              with this Privacy Policy, Information and/or Your use or access of App. Further, although the Company is
              committed towards protecting individual privacy and securing the Personal Information made available to Us
              and endeavours to use commercially reasonable physical and technical safeguards to protect the Personal
              Information from unauthorised access. However, You expressly undertake that under no circumstances the
              Company/App shall be liable to its Users and/or any person claiming through such Users and/or any third
              party(ies) for any action, suit, losses, cost, expenses or damage which is indirect, incidental,
              consequential, special or exemplary, including, but not limited to damages for loss of profits, goodwill,
              use, data or other intangible losses, resulting from circumstances, including but not limited to: (i)
              unauthorized access to or alteration of Information; (ii) any unauthorized access to or use of Our secure
              servers and/or any and all Information stored therein. You represent that You have provided Information on
              Your own initiative and are responsible for compliance with all applicable laws including, but not limited
              to, any applicable local laws. This Privacy Policy is governed by the laws of India and the courts at
              Gurgaon, Haryana shall have the exclusive jurisdiction.
            </NormalPara>
            <Heading>11.&nbsp;Changes in this Privacy Policy</Heading>
            <NormalPara>
              We reserve the right to make changes to this Privacy Policy at any time. Although We will post details of
              all changes made to the Privacy Policy on the website and the App, however, the same can be changed
              without prior confirmation to You. We encourage you to visit the website and App from time to time to make
              sure You are aware of any changes and/or latest information on Our privacy policies and practices. We
              shall not be liable for any damages You may suffer as a result of failure to provide You notice of any
              changes to this Privacy Policy as set forth herein.
            </NormalPara>
            <Heading>12.&nbsp;Reviewing, changing or deleting information</Heading>
            <NormalPara>
              If you would like to review, change or delete personal information we have collected from you, or
              permanently delete your account, please use email us at feedback@emoha.com. If you delete your User
              Contributions from our websites, copies of your User Contributions may remain viewable in cached and
              archived pages, or might have been copied or stored by other users of our websites. Proper access and use
              of information provided on our websites, including User Contributions, is governed by our Terms of Use.
            </NormalPara>
            <Heading>13.&nbsp;Accessing & correcting your personal information</Heading>
            <NormalPara>
              We will take reasonable steps to accurately record the personal information that you provide to us and any
              subsequent updates. We encourage you to review, update, and correct the personal information that we
              maintain about you, and you may request that we delete personal information about you that is inaccurate,
              incomplete, or irrelevant for legitimate purposes, or are being processed in a way which infringes any
              applicable legal requirement. Your right to review, update, correct, and delete your personal information
              may be limited, subject to the law of your jurisdiction: If your requests are abusive or unreasonably
              excessive, Where the rights or safety of another person or persons would be encroached upon, or If the
              information or material you request relates to existing or anticipated legal proceedings between you and
              us, or providing access to you would prejudice negotiations between us or an investigation of possible
              unlawful activity. Your right to review, update, correct, and delete your information is subject to our
              records retention policies and applicable law, including any statutory retention requirements.
            </NormalPara>
            <Heading>14.&nbsp;Data retention and account termination</Heading>
            <NormalPara>
              You can close your account by visiting your profile settings page on our website. We will remove your
              public posts from view and/or dissociate them from your account profile, but we may retain information
              about you for the purposes authorized under this Privacy Policy unless prohibited by law.
            </NormalPara>
          </div>
        )}
        {index === 3 && (
          <div>
            <NormalPara>
              This Website ({'"'}Website{'"'}) is owned, hosted and maintained by Ignoxlabs Private Limited ({'"'}
              Company{'"'} or {'"'}We{'"'} or {'"'}Us{'"'}). We are committed towards protecting the privacy of the
              users who visit andregister on the Website ({'"'}User{'"'} or {'"'}Users{'"'}). We use {'"'}Cookies{'"'}
              and other similar technology to automatically collect information about the Users activity as the Users
              navigate through the Website.By using the Website, the User agree that these types of Cookies can be
              placed on the User’s device and further acknowledgethe acceptance without limitation or qualification of
              Cookies Policy as mentioned herein (Cookies Policy), which forms a legally binding contract between the
              User and Us. User acknowledges that this Cookies Policy shall be read as part of the Privacy Policy
              mentioned in respect of the Website.Unless otherwise defined herein, the defined terms used in this
              Cookies Policy shall have the same meaning as assigned to them in the Privacy Policy.
              <br /> Cookies are software code that the Website sends to the browser when Users access the Website.They
              are small data files stored on the hard drive of the User’s device by anWebsite Among other things,
              Cookies enable us to recognize the Users and maintain their web session while they browse on the Website
              Cookies are linked to personal information and We use them to collect and store information about the
              individual usage, preferences and activity patterns of the Users on the Website However, Cookies does not
              give us access to Users device. We may combine any information about the User that We collect
              automatically on the Website by use of the Cookies including User ID, registration information and/or any
              information that We maintain in our database or that We receive by any other legal arrangement. We use
              this information to improve the Website, to help understand the preferences of the User, tailoring and
              measuring advertisements and to provide the User with a better and a more personalized experience. In
              addition, the Users device or browser may offer settings that warn the User each time a cookie is being
              sent and allows the User to choose to disable/turn off all the cookies and to delete them. However, if the
              Users turn cookies off, some features that make the User’s experience more efficient, will be disabled and
              may not function properly.The User expressly acknowledge that the Company shall not be responsible for
              cookies placed in User’s device by any other website/app and information collected thereto including but
              not limited to any linked site (as defined under the Privacy Policy).
            </NormalPara>
          </div>
        )}
        {index === 4 && (
          <div>
            <NormalPara>
              This website (‘Website’) is designed and maintained by Ignox Labs Private Limited (‘Company’) to provide
              information to the users on {'"'}As-Is{'"'} basis and does not guarantee the accuracy or reliability of
              such information and Company shall not be liable for any losses that occur as a result of reliance on the
              information provided through the Website . The Company cannot guarantee and does not promise any specific
              results from use of the Website and/or the service or information provided through the Website.
              <br /> The Website is merely a platform to provide information regarding the services of the Company. The
              Company makes no representations or guarantees regarding the Website, or any content on it, of the
              Website, including, but not limited to, broken links, hyperlinks, inaccuracies or typographical and/or
              clerical errors, nor does it warrant that the Website will work/operate error-free or that the Website or
              its servers are free of computer viruses or other harmful mechanisms. The Company is, therefore, not
              responsible for, and expressly disclaims all liability for, damages of any kind arising out of use of the
              Website, reference to, or reliance on any information contained and/or collected in the Website. While the
              information contained within the Website is periodically updated, the Company gives no guarantee that the
              information provided in this Website is correct, complete, and up-to-date. Nothing on the Website shall be
              considered an endorsement, representation or warranty with respect to any user or third party, whether in
              regard to its contents, information, services or otherwise. Further, although the Company is committed
              towards protecting the privacy of its users, but the Company cannot ensure or warrant the security of any
              information you transmit to us. As a user of the Website you agree and acknowledge that under no
              circumstances the Company/Website shall be liable to its users and/or any person claiming through such
              users and/or any third party(ies) for any action, suit, losses, cost, expenses or damage which is
              indirect, incidental, consequential, special or exemplary, or liabilities to third parties arising from
              any source. The users assume all responsibility and risk for using/accessing the Website.
              <br /> The users acknowledge and undertake that they are using/accessing the Website at their own risk and
              are using at their best and prudent judgment. The Company shall not be liable nor responsible for any
              actions or inactions of its users and/or for any breach of conditions, representations or warranties by
              other users of the Website and hereby expressly disclaim any and all responsibility and liability in that
              regard.
            </NormalPara>
          </div>
        )}
      </MuiContainer>
      <Footer hideFormSection={true} />
    </>
  );
}

TermsConditions.propTypes = {
  ...TermsConditions,
};

export default memo(TermsConditions);
