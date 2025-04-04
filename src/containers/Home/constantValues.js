import config from 'config';
const constantValues = [
  { title: 60000, description: 'Elders Empowered', startingNumber: 45000, is_animation: true },
  { title: 'PAN India', description: 'Operated', startingNumber: 0, is_animation: true },
  { title: 500, description: 'Lives Saved', startingNumber: 0, is_animation: true },
  { title: 4000, description: 'Events Organised', startingNumber: 0, is_animation: true },
];

const newPlansValues = [
  {
    title: 'PAN India',
    description: 'Coverage',
    startingNumber: 0,
    is_animation: true,
    image: '/static/images/home_1.png',
  },
  {
    title: 1000,
    description: 'Lives Saved',
    startingNumber: 0,
    is_animation: true,
    image: '/static/images/home_2.png',
  },
  { title: 500, description: 'Doctors', startingNumber: 0, is_animation: true, image: '/static/images/home_3.png' },
  {
    title: 100000,
    description: 'Members',
    startingNumber: 45000,
    is_animation: true,
    image: '/static/images/home_4.png',
  },
];

const plansForSingle = [
  {
    id: 'e84e7b7d-d8b7-4714-9f03-93cbc6a5c717',
    new_id: 6,
    category: 'Empower Basic',
    plan: [
      {
        id: 'cb52e736-ffff-4a90-a90a-9dc2994cde3d',
        name: 'Empower Basic',
        name2: 'Basic',
        addition_service: '+ 2 additional care services',
        description: 'Created for seniors seeking 24/7 safety & support in an affordable way.',
        plan_prices: [
          {
            id: '8c6b9d44-d1d8-48c2-a230-f61d00b3e679',
            duration: 12,
            price: '199',
            currency: 'INR',
            symbol: '₹',
            price_type: '*Prices shown are for prepaid annual plans only',
          },
        ],
        plan_services: [
          {
            id: 'bab29692-64fa-42db-aee1-1216d1bc0b69',
            name: '24/7 Emergency Coordination access',
            description:
              'From scheduling lab tests to ordering groceries, our concierge helpdesk is here to assist you.',
          },
          {
            id: '5e555e14-5ceb-4d1b-acf6-21b577af5443',
            name: 'Senior Help Desk for lab tests & deliveries',
            description: 'Get all the services of Emoha with just the touch of a button.  ',
          },
          {
            id: '5e555e14-5ceb-4d1b-acf6-21b577af5443',
            name: 'Access to verified healthcare professionals',
            description: 'Get all the services of Emoha with just the touch of a button.  ',
          },
          {
            id: '5e555e14-5ceb-4d1b-acf6-21b577affds5443',
            name: 'Support for local & international travel',
            description: 'Support for local & international travel',
          },
          {
            id: '5e555e14-5ceb-4d1b-acf6-21b577af5443',
            name: 'Expert talks on diet, health & wellness',
            description: 'Expert talks on diet, health & wellness',
          },
        ],
      },
    ],
    created_at: '2021-12-08 11:02:30',
    created_at_formatted: '8th Dec, 2021 (11:02 AM)',
    updated_at: '2022-02-06 23:26:27',
    updated_at_formatted: '6th Feb, 2022 (11:26 PM)',
  },
  {
    id: '75debe34-99d6-426e-9072-ef685b7bff7f',
    new_id: 2,
    category: 'Empower Advanced',
    plan: [
      {
        order_index: 16,
        id: 'c7aaf7a3-630c-4080-8b7f-c1a76b5eee7f',
        new_id: 2,
        is_display_in_mobile: 1,
        name: 'Empower Advanced',
        name2: 'Advanced',
        description:
          'For individuals who want the reassurance of having professional health & emergency support for their aging parents.',
        plan_type: 'Recommended',
        plan_text: 'Holistic plan with emergency & health support ',
        media: `${config.BLOGS_SLUG}/icon/3e75eefd-8274-448c-b310-f67d1e0a6214/preview?v=1645014129000`,
        status: 1,
        addition_service: '+ 3 additional care services',
        plan_prices: [
          {
            id: '739578ce-44e2-4ad7-a42d-d8432377359c',
            duration: 12,
            price: '799',
            currency: 'INR',
            is_display_in_dashboard: true,
            symbol: '₹',
            price_type: '*Prices shown are for prepaid annual plans only',
          },
        ],
        plan_services: [
          {
            id: '930800ff-733c-4586-839c-cf82f024afdf',
            name: 'BLS emergency ambulance coverage (one per year)',
            description:
              'Our Emoha Companion visits once-in-a-month & checks vitals, updates medical records, and more.',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/1221fb5b-7a7f-48cd-b9a5-44223e5f37a2_SupportfromEmohaCompanion.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=e624938e79a196113ae8678e4f3e6f4184296855c177d27a95271e862482d4fa&X-Amz-SignedHeaders=host',
          },
          {
            id: '2b620563-8796-478e-bf8f-48def338c0a0',
            name: 'Access to doctor on call during emergencies',
            description:
              "Get weekly family updates about your elder's health, appointments & more from our Emoha Daughters.",
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/0cc289e3-db1e-40f1-9a52-7a22f0b1a0c8_FamilySupport.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=75aca75d8c3347af4fbb240660f8cb66c15a52e81469ad636b46f0ffc573c1e3&X-Amz-SignedHeaders=host',
          },
          {
            id: 'e8878b7e-7b79-47b5-837e-79146f2995ae',
            name: 'Receive weekly wellness check-in calls by Emoha Daughter',
            description: 'Avail exclusive discounts & offers on value-added services crafted just for seniors. ',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/36b5babd-afb6-437e-9dcb-4a1f48413423_OffersandDiscounts.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=f908f32175b650fb41efedd4de202e210cb0355ea6d548b5bdc590f37f538d14&X-Amz-SignedHeaders=host',
          },
          {
            id: 'e8878b7e-7b79-47324b5-837e-79146f2995ae',
            name: 'Regular care updates to family',
            description: 'Regular care updates to family',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/36b5babd-afb6-437e-9dcb-4a1f48413423_OffersandDiscounts.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=f908f32175b650fb41efedd4de202e210cb0355ea6d548b5bdc590f37f538d14&X-Amz-SignedHeaders=host',
          },
          {
            id: 'e8878b7e-7b79-4712b5-837e-79146f2995ae',
            name: 'Annual lab tests for 58 health parameters',
            description: 'Annual lab tests for 58 health parameters',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/36b5babd-afb6-437e-9dcb-4a1f48413423_OffersandDiscounts.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=f908f32175b650fb41efedd4de202e210cb0355ea6d548b5bdc590f37f538d14&X-Amz-SignedHeaders=host',
          },
          {
            id: 'e8878b7e-7b79-41237b5-837e-79146f2995ae',
            name: 'Enjoy all the services included in the Basic plan',
            description: 'Enjoy all the services included in the Basic plan',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/36b5babd-afb6-437e-9dcb-4a1f48413423_OffersandDiscounts.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=f908f32175b650fb41efedd4de202e210cb0355ea6d548b5bdc590f37f538d14&X-Amz-SignedHeaders=host',
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
    category: 'Empower Premium',
    plan: [
      {
        order_index: 19,
        id: 'f22329b5-256e-4d26-98c5-ff1f4a2ee63d',
        new_id: 7,
        is_display_in_mobile: 1,
        name: 'Empower Premium',
        name2: 'Premium',
        description:
          'For individuals with dependent elderly parents needing a comprehensive support system to enhance their quality of life.',
        plan_type: null,
        plan_text: 'Premium plan with clinical support',
        media: `${config.BLOGS_SLUG}/icon/a85aed63-e80e-4a0d-9e8b-dfc0326a171b/preview?v=1669816050000`,
        status: 1,
        addition_service: '+ 3 additional care services',
        plan_prices: [
          {
            id: 'd8be5dfb-3461-4eeb-952f-018fb2b3161d',
            duration: 3,
            price: '2299',
            currency: 'INR',
            is_display_in_dashboard: false,
            symbol: '₹',
            price_type: '*Prices shown are for prepaid annual plans only',
          },
        ],
        plan_services: [
          {
            id: '44cdd675-a096-4391-95a6-1ab1a7604a1e',
            name: 'Unlimited BLS emergency ambulance coverage',
            description: 'Get 24/7 emergency support nationwide with India’s only emergency helpdesk for seniors.',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/88ce42f1-c07a-43ee-b091-c8a6612b3df7_EmergencySupport.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=b388acb8de673d53f6a81b838b9ef1257e3028180285fa13158285208435e726&X-Amz-SignedHeaders=host',
          },
          {
            id: '8f22aea1-5faf-4b66-890f-9c418494a0a7',
            name: 'Unlimited access to doctor on call during emergencies',
            description: 'Get Regular care calls from your Emoha Daughter to check on your health and well-being.',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/88bd38d1-e5eb-450c-a48a-382a07f11a19_RegularCareCalls.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=d96d12635c1c3fbed821f8202fe08d19997a4c156a4e845cf75ca614350af36f&X-Amz-SignedHeaders=host',
          },
          {
            id: '7b87912d-17ae-4bfb-a1f2-20c77b97712d',
            name: 'Receive daily wellness check-in call by Emoha Daughter',
            description:
              "Get weekly family updates about your elder's health, appointments & more from our Emoha Daughters.",
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/0cc289e3-db1e-40f1-9a52-7a22f0b1a0c8_FamilySupport.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=75aca75d8c3347af4fbb240660f8cb66c15a52e81469ad636b46f0ffc573c1e3&X-Amz-SignedHeaders=host',
          },
          {
            id: '7b87912d-17ae-4bfb-a1f2-20c77b97712d',
            name: 'Regular care updates to family',
            description:
              "Get weekly family updates about your elder's health, appointments & more from our Emoha Daughters.",
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/0cc289e3-db1e-40f1-9a52-7a22f0b1a0c8_FamilySupport.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=75aca75d8c3347af4fbb240660f8cb66c15a52e81469ad636b46f0ffc573c1e3&X-Amz-SignedHeaders=host',
          },
          {
            id: '7b87912d-17ae-4bfb-a1f2-20c77b97712d',
            name: 'Annual lab tests for 72 health parameters',
            description:
              "Get weekly family updates about your elder's health, appointments & more from our Emoha Daughters.",
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/0cc289e3-db1e-40f1-9a52-7a22f0b1a0c8_FamilySupport.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=75aca75d8c3347af4fbb240660f8cb66c15a52e81469ad636b46f0ffc573c1e3&X-Amz-SignedHeaders=host',
          },
          {
            id: '7b87912d-17ae-4bfb-a1f2-20c77b97712d',
            name: 'Enjoy all the services included in the Basic plan',
            description:
              "Get weekly family updates about your elder's health, appointments & more from our Emoha Daughters.",
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/0cc289e3-db1e-40f1-9a52-7a22f0b1a0c8_FamilySupport.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=75aca75d8c3347af4fbb240660f8cb66c15a52e81469ad636b46f0ffc573c1e3&X-Amz-SignedHeaders=host',
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

const plansForCouple = [
  {
    id: 'e84e7b7d-d8b7-4714-9f03-93cbc6a5c717',
    new_id: 6,
    category: 'ENGAGE PLAN',
    plan: [
      {
        id: 'cb52e736-ffff-4a90-a90a-9dc2994cde3d',
        name: 'Engage plan',
        description: 'Perfect for couple looking for community support',
        addition_service: '+ 3 additional care services',
        plan_prices: [
          {
            id: '8c6b9d44-d1d8-48c2-a230-f61d00b3e679',
            duration: 12,
            price: '899',
            currency: 'INR',
            symbol: '₹',
            price_type: 'for 12 months/person',
          },
        ],
        plan_services: [
          {
            id: 'bab29692-64fa-42db-aee1-1216d1bc0b69',
            name: 'Access to online events ',
            description:
              'From scheduling lab tests to ordering groceries, our concierge helpdesk is here to assist you.',
          },
          {
            id: '5e555e14-5ceb-4d1b-acf6-21b577af5443',
            name: 'Exclusive Value-Added Services',
            description: 'Get all the services of Emoha with just the touch of a button.  ',
          },
          {
            id: '5e555e14-5ceb-4d1b-acf6-21b577af5443',
            name: '24/7 Emergency Coordination',
            description: 'Get all the services of Emoha with just the touch of a button.  ',
          },
          {
            id: '5e555e14-5ceb-4d1b-acf6-21b577af5443',
            name: 'Emergency Doctor on Call',
            description: 'Get all the services of Emoha with just the touch of a button.  ',
          },
        ],
      },
    ],
    created_at: '2021-12-08 11:02:30',
    created_at_formatted: '8th Dec, 2021 (11:02 AM)',
    updated_at: '2022-02-06 23:26:27',
    updated_at_formatted: '6th Feb, 2022 (11:26 PM)',
  },
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
        description: 'Designed for couple who need assistance with chronic pain management & social support',
        plan_type: 'Recommended',
        plan_text: 'Holistic plan with emergency & health support ',
        media: `${config.BLOGS_SLUG}/icon/3e75eefd-8274-448c-b310-f67d1e0a6214/preview?v=1645014129000`,
        status: 1,
        addition_service: '+ 18 additional care services',
        plan_prices: [
          {
            id: '739578ce-44e2-4ad7-a42d-d8432377359c',
            duration: 12,
            price: '89,999',
            currency: 'INR',
            is_display_in_dashboard: true,
            symbol: '₹',
            price_type: 'for 12 months/person',
          },
        ],
        plan_services: [
          {
            id: '930800ff-733c-4586-839c-cf82f024afdf',
            name: 'Access to online events ',
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
            name: '24/7 Emergency support',
            description: 'Avail exclusive discounts & offers on value-added services crafted just for seniors. ',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/36b5babd-afb6-437e-9dcb-4a1f48413423_OffersandDiscounts.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=f908f32175b650fb41efedd4de202e210cb0355ea6d548b5bdc590f37f538d14&X-Amz-SignedHeaders=host',
          },
          {
            id: '3ca7f2dd-9294-49be-823a-b7d0ef17e131',
            name: 'Exclusive Value-Added Services',
            description: 'Get regular care calls from your Emoha Daughter to check on your health and well-being. ',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/88bd38d1-e5eb-450c-a48a-382a07f11a19_RegularCareCalls.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=d96d12635c1c3fbed821f8202fe08d19997a4c156a4e845cf75ca614350af36f&X-Amz-SignedHeaders=host',
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
        description: 'Tailored for couple with acute health conditions and in need for constant medical monitoring',
        plan_type: null,
        plan_text: 'Premium plan with clinical support',
        media: `${config.BLOGS_SLUG}/icon/a85aed63-e80e-4a0d-9e8b-dfc0326a171b/preview?v=1669816050000`,
        status: 1,
        addition_service: '+ 28 additional care services',
        plan_prices: [
          {
            id: 'd8be5dfb-3461-4eeb-952f-018fb2b3161d',
            duration: 3,
            price: '2,24,999',
            currency: 'INR',
            is_display_in_dashboard: false,
            symbol: '₹',
            price_type: 'for 12 months/person',
          },
        ],
        plan_services: [
          {
            id: '44cdd675-a096-4391-95a6-1ab1a7604a1e',
            name: 'Access to online events',
            description: 'Get 24/7 emergency support nationwide with India’s only emergency helpdesk for seniors.',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/88ce42f1-c07a-43ee-b091-c8a6612b3df7_EmergencySupport.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=b388acb8de673d53f6a81b838b9ef1257e3028180285fa13158285208435e726&X-Amz-SignedHeaders=host',
          },
          {
            id: '8f22aea1-5faf-4b66-890f-9c418494a0a7',
            name: 'Assistance from Emoha Daughter',
            description: 'Get Regular care calls from your Emoha Daughter to check on your health and well-being.',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/88bd38d1-e5eb-450c-a48a-382a07f11a19_RegularCareCalls.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=d96d12635c1c3fbed821f8202fe08d19997a4c156a4e845cf75ca614350af36f&X-Amz-SignedHeaders=host',
          },
          {
            id: '7b87912d-17ae-4bfb-a1f2-20c77b97712d',
            name: '24/7 Emergency support',
            description:
              "Get weekly family updates about your elder's health, appointments & more from our Emoha Daughters.",
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/0cc289e3-db1e-40f1-9a52-7a22f0b1a0c8_FamilySupport.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=75aca75d8c3347af4fbb240660f8cb66c15a52e81469ad636b46f0ffc573c1e3&X-Amz-SignedHeaders=host',
          },
          {
            id: 'a5d04464-3ad2-4690-8bdf-03cef2d0c7bb',
            name: 'Exclusive Value-Added Services',
            description:
              'With our health sensors, we track your health conditions, get emergency notifications & more.',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/7e72bf66-4152-494e-88f1-b7504fbdcf68_SensorsforHealthandSafety.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=3e7ab8d27453b065d6d1e31fe403bdef0487d13a717a86de66f5d5ccd5cf0d1c&X-Amz-SignedHeaders=host',
          },
          {
            id: 'ec85ce2d-5f9e-401b-ad7a-80efd16fc46c',
            name: 'Unlimited doctor teleconsultation',
            description:
              'Developed and supervised by a senior nurse, your care plan will be based on your health needs.',
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

export { constantValues, plansForSingle, plansForCouple, newPlansValues };
