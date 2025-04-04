/* eslint-disable max-len */
import { Calendar, Elderly, Person } from '../../../public/static/images/';
import config from 'config';

const constantValues = [
  { icon: Elderly, max: 60000, desc: 'Elders Empowered', startingNumber: 45000 },
  { icon: 'Pan India', max: 'Pan India', desc: 'Operated', startingNumber: 0 },
  { icon: Calendar, max: 500, desc: 'Lives Saved', startingNumber: 0 },
  { icon: Person, max: 4000, desc: 'Events Organised', startingNumber: 0 },
];

const plans = [
  {
    id: '75debe34-99d6-426e-9072-ef685b7bff7f',
    new_id: 2,
    category: 'EMPOWER PLAN',
    plan: [
      {
        order_index: 16,
        id: 'c7aaf7a3-630c-4080-8b7f-c1a76b5eee7f',
        new_id: 2,
        is_display_in_mobile: 1,
        name: 'Empower plan',
        description: 'Designed for elders who need assistance with chronic pain management & social support',
        plan_type: 'Recommended',
        plan_text: 'Holistic plan with emergency & health support ',
        media: `${config.BLOGS_SLUG}/icon/3e75eefd-8274-448c-b310-f67d1e0a6214/preview?v=1645014129000`,
        status: 1,
        plan_prices: [
          {
            id: '739578ce-44e2-4ad7-a42d-d8432377359c',
            duration: 12,
            price: '50,990',
            price_cut: '59,988',
            currency: 'INR',
            is_display_in_dashboard: true,
            symbol: '₹',
          },
        ],
        plan_services: [
          {
            id: '930800ff-733c-4586-839c-cf82f024afdf',
            name: 'MohTv access',
            description:
              'Our Emoha Companion visits once-in-a-month & checks vitals, updates medical records, and more.',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/1221fb5b-7a7f-48cd-b9a5-44223e5f37a2_SupportfromEmohaCompanion.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=e624938e79a196113ae8678e4f3e6f4184296855c177d27a95271e862482d4fa&X-Amz-SignedHeaders=host',
          },
          {
            id: '2b620563-8796-478e-bf8f-48def338c0a0',
            name: 'Assistance from Emoha Daughter',
            description:
              "Get weekly family updates about your elder's health, appointments & more from our Emoha Daughters.",
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/0cc289e3-db1e-40f1-9a52-7a22f0b1a0c8_FamilySupport.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=75aca75d8c3347af4fbb240660f8cb66c15a52e81469ad636b46f0ffc573c1e3&X-Amz-SignedHeaders=host',
          },
          {
            id: 'e8878b7e-7b79-47b5-837e-79146f2995ae',
            name: '24/7 Emergency Support',
            description: 'Avail exclusive discounts & offers on value-added services crafted just for seniors. ',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/36b5babd-afb6-437e-9dcb-4a1f48413423_OffersandDiscounts.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=f908f32175b650fb41efedd4de202e210cb0355ea6d548b5bdc590f37f538d14&X-Amz-SignedHeaders=host',
          },
          {
            id: '3ca7f2dd-9294-49be-823a-b7d0ef17e131',
            name: 'Access to helpdesk',
            description: 'Get regular care calls from your Emoha Daughter to check on your health and well-being. ',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/88bd38d1-e5eb-450c-a48a-382a07f11a19_RegularCareCalls.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=d96d12635c1c3fbed821f8202fe08d19997a4c156a4e845cf75ca614350af36f&X-Amz-SignedHeaders=host',
          },
          {
            id: '51cefb2e-d8a3-4cbe-a03f-e19024ab1f58',
            name: '+ 8 additional care services',
            description: "Curate celebrations according to your preferences with your Emoha Daughter's help.",
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/49e1cb11-a303-4c08-96cf-b3ef681ce68d_OccasionCelebrations.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052715Z&X-Amz-Expires=604800&X-Amz-Signature=b1468ca87754a5036712384d29facd489058a8e6a340f8122e7ddf8887bbe979&X-Amz-SignedHeaders=host',
          },
        ],
      },
    ],
    created_at: '2020-02-28 15:06:34',
    created_at_formatted: '28th Feb, 2020 (03:06 PM)',
    updated_at: '2020-05-12 16:49:36',
    updated_at_formatted: '12th May, 2020 (04:49 PM)',
  },
  {
    id: 'a06ab15b-2eec-4540-b0af-2f805cc6cb1c',
    new_id: 7,
    category: 'ENHANCE PLAN',
    plan: [
      {
        order_index: 19,
        id: 'f22329b5-256e-4d26-98c5-ff1f4a2ee63d',
        new_id: 7,
        is_display_in_mobile: 1,
        name: 'Enhance plan',
        description: 'Tailored for seniors with acute health conditions and in need for constant medical monitoring',
        plan_type: null,
        plan_text: 'Premium plan with clinical support',
        media: `${config.BLOGS_SLUG}/icon/a85aed63-e80e-4a0d-9e8b-dfc0326a171b/preview?v=1669816050000`,
        status: 1,
        plan_prices: [
          {
            id: 'd8be5dfb-3461-4eeb-952f-018fb2b3161d',
            duration: 3,
            price: '1,22,390',
            price_cut: '1,43,988',
            currency: 'INR',
            is_display_in_dashboard: false,
            symbol: '₹',
          },
          {
            id: '8e37f38d-9b3e-43d1-93a4-ce50684f1695',
            duration: 6,
            price: 89994,
            currency: 'INR',
            is_display_in_dashboard: false,
            symbol: '₹',
          },
          {
            id: 'f3a8200a-f263-4b62-9c44-e2b1dd7d3821',
            duration: 12,
            price: 119988,
            currency: 'INR',
            is_display_in_dashboard: true,
            symbol: '₹',
          },
        ],
        plan_services: [
          {
            id: '44cdd675-a096-4391-95a6-1ab1a7604a1e',
            name: 'MohTv access',
            description: 'Get 24/7 emergency support nationwide with India’s only emergency helpdesk for seniors.',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/88ce42f1-c07a-43ee-b091-c8a6612b3df7_EmergencySupport.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=b388acb8de673d53f6a81b838b9ef1257e3028180285fa13158285208435e726&X-Amz-SignedHeaders=host',
          },
          {
            id: '8f22aea1-5faf-4b66-890f-9c418494a0a7',
            name: 'Assistance from Emoha Daugther',
            description: 'Get Regular care calls from your Emoha Daughter to check on your health and well-being.',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/88bd38d1-e5eb-450c-a48a-382a07f11a19_RegularCareCalls.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=d96d12635c1c3fbed821f8202fe08d19997a4c156a4e845cf75ca614350af36f&X-Amz-SignedHeaders=host',
          },
          {
            id: '7b87912d-17ae-4bfb-a1f2-20c77b97712d',
            name: '24/7 Emergency Support',
            description:
              "Get weekly family updates about your elder's health, appointments & more from our Emoha Daughters.",
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/0cc289e3-db1e-40f1-9a52-7a22f0b1a0c8_FamilySupport.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=75aca75d8c3347af4fbb240660f8cb66c15a52e81469ad636b46f0ffc573c1e3&X-Amz-SignedHeaders=host',
          },
          {
            id: 'a5d04464-3ad2-4690-8bdf-03cef2d0c7bb',
            name: 'Access to helpdesk',
            description:
              'With our health sensors, we track your health conditions, get emergency notifications & more.',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/7e72bf66-4152-494e-88f1-b7504fbdcf68_SensorsforHealthandSafety.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=3e7ab8d27453b065d6d1e31fe403bdef0487d13a717a86de66f5d5ccd5cf0d1c&X-Amz-SignedHeaders=host',
          },
          {
            id: 'ec85ce2d-5f9e-401b-ad7a-80efd16fc46c',
            name: 'Unlimited Doctor Teleconsultation',
            description:
              'Developed and supervised by a senior nurse, your care plan will be based on your health needs.',
            image_url: null,
          },
          {
            id: '40105294-65bf-40ca-b918-ef36231ae38d',
            name: '+ 11 additional care services',
            description: 'Access to unlimited telephonic consultations with the geriatrics-trained doctor',
            image_url: null,
          },
        ],
      },
    ],
    created_at: '2022-11-28 15:08:01',
    created_at_formatted: '28th Nov, 2022 (03:08 PM)',
    updated_at: '2022-11-28 15:08:01',
    updated_at_formatted: '28th Nov, 2022 (03:08 PM)',
  },
];

export { constantValues, plans };
