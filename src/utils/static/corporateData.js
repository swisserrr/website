import config from 'config';

const corporateData = {
  accenture: {
    visibility: { video: true, banner: true, plans: true, members: true, faq: true, bannerType: true },
    company: 'Accenture',
    headerTop: 'Welcome to the Emoha way of life',
    headerSub: 'Exclusive offer for Accenture employees',
    call: '+91 8068970689',
    plansStaticData: [
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
                price: '700',
                price_cut: '999',
                price_type: 'monthly',
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
    ],
  },
  capgemini: {
    visibility: { video: true, banner: true, plans: true, members: true, faq: true, bannerType: false },
    company: 'Capgemini',
    headerTop: 'Welcome to the Emoha way of life',
    headerSub: 'Exclusive offer for Capgemini employees',
    call: '+91 8045217818',
    plansStaticData: [
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
                price_type: 'annually',
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
            description:
              'Tailored for seniors with acute health conditions and in need for constant medical monitoring',
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
                price_type: 'annually',
                currency: 'INR',
                is_display_in_dashboard: false,
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
    ],
  },
  axis: {
    visibility: { video: true, banner: true, plans: true, members: true, faq: true, bannerType: true },
    company: 'Axis Bank',
    headerTop: 'Welcome to the Emoha way of life',
    headerSub: 'Exclusive offer for Axis employees',
    call: '1800 203 5135',
    plansStaticData: [
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
                price: '700',
                price_cut: '900',
                price_type: 'monthly',
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
    ],
  },
  app: {
    visibility: { video: true, banner: false, plans: false, members: false, faq: false, bannerType: true },
    company: 'Emoha App',
    headerTop: 'Welcome to the Emoha way of life',
    headerSub: 'Because those who made us deserve to age magnificently from the comfort of their own home',
    call: '1800 203 5135',
    plansStaticData: [
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
                price: '999',
                price_cut: '700',
                price_type: 'monthly',
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
    ],
  },
  hdfc: {
    visibility: { video: true, banner: true, plans: true, members: true, faq: true, bannerType: false },
    company: 'HDFC Bank',
    headerTop: 'Welcome to the Emoha way of life',
    headerSub:
      'Trusted by NRI children fromover 30 countries.Get 30% exclusive discount on membership for HDFC Customers',
    call: '+91 8045217814',
    plansStaticData: [
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
                price: '1999',
                price_cut: '3999',
                price_type: 'monthly',
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
    ],
  },
  icici: {
    visibility: { video: true, banner: true, plans: true, members: true, faq: true, bannerType: true },
    company: 'ICICI Bank',
    headerTop: 'Welcome to the Emoha way of life',
    headerSub: 'Exclusive offer for ICICI employees',
    call: '+91 8045574140',
    plansStaticData: [
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
                price: '1400',
                price_cut: '1999',
                price_type: 'monthly',
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
    ],
  },
  indusind: {
    visibility: { video: true, banner: true, plans: true, members: true, faq: true, bannerType: true },
    company: 'Indusind Bank',
    headerTop: 'Welcome to the Emoha way of life',
    headerSub: 'Exclusive offer for IndusInd employees',
    call: '1800 203 5135',
    plansStaticData: [
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
                price: '700',
                price_cut: '999',
                price_type: 'monthly',
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
    ],
  },
  juniper: {
    visibility: { video: true, banner: true, plans: true, members: true, faq: true, bannerType: false },
    company: 'Juniper',
    headerTop: 'Welcome to the Emoha way of life',
    headerSub: 'Exclusive offer for Juniper employees',
    call: '+91 8045217815',
    plansStaticData: [
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
                price: '225',
                price_cut: '325',
                price_type: 'annually',
                currency: 'INR',
                is_display_in_dashboard: true,
                symbol: '$',
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
    ],
  },
  mphasis: {
    visibility: { video: true, banner: true, plans: true, members: true, faq: true, bannerType: true },
    company: 'mphasis',
    headerTop: 'Welcome to the Emoha way of life',
    headerSub: 'Exclusive offer for Mphasis employees',
    call: '+91 8045217816',
    plansStaticData: [
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
                price: '700',
                price_cut: '1999',
                price_type: 'monthly + 18%GST extra',
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
    ],
  },
  marsh: {
    visibility: { video: true, banner: true, plans: true, members: true, faq: true, bannerType: false },
    company: 'Marsh',
    headerTop: 'Welcome to the Emoha way of life',
    headerSub: 'Trusted by NRI children from over 30 countries.Get 40% exclusive discount on Membership',
    call: '+91 804-881-1046',
    plansStaticData: [
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
                price: '14,400/$195',
                price_cut: '23988 325',
                price_type: 'monthly',
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
    ],
  },
  cadence: {
    visibility: { video: true, banner: true, plans: true, members: true, faq: true, bannerType: true },
    company: 'Cadence',
    headerTop: 'Welcome to the Emoha way of life',
    headerSub: 'Exclusive offer for Cadence employees',
    call: '+91 804-557-4144',
    plansStaticData: [
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
                price: '700',
                price_cut: '1999',
                price_type: 'monthly + 18%GST extra',
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
    ],
  },
  sanahealth: {
    visibility: { video: true, banner: true, plans: true, members: true, faq: true, bannerType: true },
    company: 'Sana Health',
    headerTop: 'Welcome to the Emoha way of life',
    headerSub: 'Trusted by NRI children from over 30 countries.Get exclusive 20% discount on membership',
    call: '+91 8045217817',
    plansStaticData: [
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
                price: '3199',
                price_cut: '',
                price_type: 'monthly + 18%GST extra',
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
    ],
  },
  oyo: {
    visibility: { video: true, banner: true, plans: true, members: true, faq: true, bannerType: false },
    company: 'Oyo',
    headerTop: 'Welcome to the Emoha way of life',
    headerSub: 'Exclusive offer for Oyo employees',
    call: '1800 203 5135',
    plansStaticData: [
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
                price: '700',
                price_cut: '999',
                price_type: 'monthly + 18% GST',
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
        id: '1bcf38d2-ee92-4904-af53-efdf84a75454',
        new_id: 1,
        category: 'ASSURE PLAN',
        plan: [
          {
            order_index: 1,
            id: '7d6846e4-9e33-4059-b71d-2ed41a37c3b3',
            new_id: 1,
            is_display_in_mobile: 1,
            name: 'Assure Plan',
            description:
              'A comprehensive at home elder care plan with personalized home visits. (Available in Delhi-NCR only)',
            plan_type: null,
            plan_text: null,
            plan_website_image_url: null,
            plan_website_text: null,
            plan_website_image_signed_url_expire_at: null,
            plan_website_image_signed_url: null,
            media: `${config.BLOGS_SLUG}/icon/0a66a24a-2e29-4bbd-8abf-0e5699a899fb/preview?v=1585242024000`,
            status: 0,
            brochure_url:
              'aws_gallery/1dd3fa8f-235b-49c0-926e-636033f8689f_ShortBrochureforEngage+Empower+Enhance(2).pdf',
            plan_prices: [
              {
                id: '1784d78b-bd9d-48aa-82d2-7233b4c8ecf2',
                duration: 12,
                price: 6000,
                price_cut: '',
                price_type: 'per month + No GST ',
                currency: 'INR',
                is_display_in_dashboard: false,
                symbol: '₹',
              },
            ],
            plan_services: [
              {
                id: '03e6a522-dcdf-4753-8280-fb242a0d06f6',
                name: 'Access to live virtual events',
                description: 'Emergency response that you can count on',
                image_url: null,
              },
              {
                id: '9e11e7e5-7525-49bf-925a-2cd80ebfce7b',
                name: 'Assistance from Emoha Daugther',
                description: 'Making home environment safer and more livable',
                image_url: null,
              },
              {
                id: '2b354d0d-b59f-474e-8ece-e0c8c94958b5',
                name: '24/7 emergency support',
                description: 'Ensuring emotional happiness for elders ',
                image_url: null,
              },
              {
                id: 'f38b7aeb-1543-4260-80ea-336c41f7a7a3',
                name: 'Access to helpdesk',
                description: 'Elder support for every possible need',
                image_url: null,
              },
              {
                id: 'c8efda44-00a4-4522-803b-f0f2e3cd0788',
                name: 'Unlimited doctor teleconsultation',
                description: 'Delivering all-round healthcare at home services for elders\n',
                image_url: null,
              },
              {
                id: 'c8efda44-00a4-4522-803b-f0f2e3cd0788',
                name: '+ 11 additional care services',
                description: 'Delivering all-round healthcare at home services for elders\n',
                image_url: null,
              },
            ],
            lowest_price: {
              id: '8371eb07-f422-43ff-8dee-36316dcd5ed7',
              duration: 3,
              price: 18000,
              currency: 'INR',
              is_display_in_dashboard: false,
              symbol: '₹',
            },
          },
        ],
        created_at: '2020-02-28 15:05:52',
        created_at_formatted: '28th Feb, 2020 (03:05 PM)',
        updated_at: '2022-01-24 10:08:20',
        updated_at_formatted: '24th Jan, 2022 (10:08 AM)',
      },
    ],
  },
  uhg: {
    visibility: { video: true, banner: true, plans: true, members: true, faq: true, bannerType: false },
    company: 'Uhg',
    headerTop: 'Welcome to the Emoha way of life',
    headerSub: 'Get your parents signed up for the Emoha Membership Plan',
    call: '+91-8045574148',
    plansStaticData: [
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
                price: '700',
                price_cut: '999',
                price_type: 'monthly + 18% GST',
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
        id: '1bcf38d2-ee92-4904-af53-efdf84a75454',
        new_id: 1,
        category: 'ASSURE PLAN',
        plan: [
          {
            order_index: 1,
            id: '7d6846e4-9e33-4059-b71d-2ed41a37c3b3',
            new_id: 1,
            is_display_in_mobile: 1,
            name: 'Assure Plan',
            description:
              'A comprehensive at home elder care plan with personalized home visits. (Available in Delhi-NCR only)',
            plan_type: null,
            plan_text: null,
            plan_website_image_url: null,
            plan_website_text: null,
            plan_website_image_signed_url_expire_at: null,
            plan_website_image_signed_url: null,
            media: `${config.BLOGS_SLUG}/icon/0a66a24a-2e29-4bbd-8abf-0e5699a899fb/preview?v=1585242024000`,
            status: 0,
            brochure_url:
              'aws_gallery/1dd3fa8f-235b-49c0-926e-636033f8689f_ShortBrochureforEngage+Empower+Enhance(2).pdf',
            plan_prices: [
              {
                id: '1784d78b-bd9d-48aa-82d2-7233b4c8ecf2',
                duration: 12,
                price: 6000,
                price_cut: '',
                price_type: 'per month + No GST ',
                currency: 'INR',
                is_display_in_dashboard: false,
                symbol: '₹',
              },
            ],
            plan_services: [
              {
                id: '03e6a522-dcdf-4753-8280-fb242a0d06f6',
                name: 'Access to live virtual events',
                description: 'Emergency response that you can count on',
                image_url: null,
              },
              {
                id: '9e11e7e5-7525-49bf-925a-2cd80ebfce7b',
                name: 'Assistance from Emoha Daugther',
                description: 'Making home environment safer and more livable',
                image_url: null,
              },
              {
                id: '2b354d0d-b59f-474e-8ece-e0c8c94958b5',
                name: '24/7 emergency support',
                description: 'Ensuring emotional happiness for elders ',
                image_url: null,
              },
              {
                id: 'f38b7aeb-1543-4260-80ea-336c41f7a7a3',
                name: 'Access to helpdesk',
                description: 'Elder support for every possible need',
                image_url: null,
              },
              {
                id: 'c8efda44-00a4-4522-803b-f0f2e3cd0788',
                name: 'Unlimited doctor teleconsultation',
                description: 'Delivering all-round healthcare at home services for elders\n',
                image_url: null,
              },
              {
                id: 'c8efda44-00a4-4522-803b-f0f2e3cd0788',
                name: '+ 11 additional care services',
                description: 'Delivering all-round healthcare at home services for elders\n',
                image_url: null,
              },
            ],
            lowest_price: {
              id: '8371eb07-f422-43ff-8dee-36316dcd5ed7',
              duration: 3,
              price: 18000,
              currency: 'INR',
              is_display_in_dashboard: false,
              symbol: '₹',
            },
          },
        ],
        created_at: '2020-02-28 15:05:52',
        created_at_formatted: '28th Feb, 2020 (03:05 PM)',
        updated_at: '2022-01-24 10:08:20',
        updated_at_formatted: '24th Jan, 2022 (10:08 AM)',
      },
    ],
  },
  toi: {
    visibility: {
      video: true,
      banner: true,
      plans: true,
      members: true,
      faq: true,
      bannerType: true,
      specialCase: true,
    },
    company: 'TOI',
    headerTop: 'Welcome to the Emoha way of life',
    headerSub: 'Get your parents signed up for the Emoha Membership Plan',
    call: '+15736335052',
    plansStaticData: [
      {
        id: 'e84e7b7d-d8b7-4714-9f03-93cbc6a5c717',
        new_id: 6,
        category: 'ENGAGE PLAN',
        plan: [
          {
            id: 'cb52e736-ffff-4a90-a90a-9dc2994cde3d',
            name: 'Engage plan',
            description: 'Perfect for elders who’s looking for community support',
            plan_prices: [
              {
                id: '8c6b9d44-d1d8-48c2-a230-f61d00b3e679',
                duration: 12,
                price: 399,
                currency: 'INR',
                symbol: '₹',
              },
            ],
            plan_services: [
              {
                id: 'bab29692-64fa-42db-aee1-1216d1bc0b69',
                name: 'MohTv access',
                description:
                  'From scheduling lab tests to ordering groceries, our concierge helpdesk is here to assist you.',
              },
              {
                id: '5e555e14-5ceb-4d1b-acf6-21b577af5443',
                name: 'Access to helpdesk',
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
            description: 'Designed for elders who need assistance with chronic pain management & social support',
            plan_type: 'Recommended',
            plan_text: 'Holistic plan with emergency & health support ',
            media: `${config.BLOGS_SLUG}/icon/3e75eefd-8274-448c-b310-f67d1e0a6214/preview?v=1645014129000`,
            status: 1,
            plan_prices: [
              {
                id: '739578ce-44e2-4ad7-a42d-d8432377359c',
                duration: 12,
                price: '4,999',
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
            description:
              'Tailored for seniors with acute health conditions and in need for constant medical monitoring',
            plan_type: null,
            plan_text: 'Premium plan with clinical support',
            media: `${config.BLOGS_SLUG}/icon/a85aed63-e80e-4a0d-9e8b-dfc0326a171b/preview?v=1669816050000`,
            status: 1,
            plan_prices: [
              {
                id: 'd8be5dfb-3461-4eeb-952f-018fb2b3161d',
                duration: 3,
                price: '11,999',
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
    ],
  },
};

export default corporateData;
