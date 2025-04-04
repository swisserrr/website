import config from 'config';
const ApolloPlans = [
  {
    id: 'df7d2a3d-9a5a-4040-8887-93c85ee99416',
    new_id: 6,
    category: 'Apollo Individual Plan',
    plan: [
      {
        order_index: 16,
        id: 'c7aaf7a3-630c-4080-8b7f-c1a76b5eee7f',
        new_id: 2,
        razorPayUrl: 'https://pages.razorpay.com/pl_OaqKDSIfefT1X7/view',
        is_display_in_mobile: 1,
        name: 'Apollo Individual Plan',
        description:
          'This plan is tailored for those seeking comprehensive care for a single person. The plan ensures that all the essential needs of your loved one are taken care of.',
        plan_type: 'Recommended',
        plan_text: 'Holistic plan with emergency & health support ',
        media: `${config.BLOGS_SLUG}/icon/3e75eefd-8274-448c-b310-f67d1e0a6214/preview?v=1645014129000`,
        status: 1,
        additional_GST: true,
        personCovered: {
          covered: true,
          value: 1,
        },
        addition_service: '+ 6 additional care services',
        plan_prices: [
          {
            id: '739578ce-44e2-4ad7-a42d-d8432377359c',
            duration: 12,
            price: '199',
            currency: 'INR',
            is_display_in_dashboard: true,
            symbol: '₹',
            price_type: 'per year',
          },
        ],
        plan_services: [
          {
            id: 'e8878b7e-7b79-47b5-837e-79146f2995ae',
            name: '24/7 Emergency Coordination',
            description: 'Avail exclusive discounts & offers on value-added services crafted just for seniors. ',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/36b5babd-afb6-437e-9dcb-4a1f48413423_OffersandDiscounts.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=f908f32175b650fb41efedd4de202e210cb0355ea6d548b5bdc590f37f538d14&X-Amz-SignedHeaders=host',
          },
          {
            id: '930800ff-733c-4586-839c-cf82f024afdf',
            name: 'Doctor on Call ( 1 covered, rest at pay-per-use )',
            description:
              'Our Emoha Companion visits once-in-a-month & checks vitals, updates medical records, and more.',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/1221fb5b-7a7f-48cd-b9a5-44223e5f37a2_SupportfromEmohaCompanion.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=e624938e79a196113ae8678e4f3e6f4184296855c177d27a95271e862482d4fa&X-Amz-SignedHeaders=host',
          },
          {
            id: '2b620563-8796-478e-bf8f-48def338c0a0',
            name: 'Ambulance Cover ( 1 covered, rest at pay-per-use )',
            description:
              "Get weekly family updates about your elder's health, appointments & more from our Emoha Daughters.",
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/0cc289e3-db1e-40f1-9a52-7a22f0b1a0c8_FamilySupport.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=75aca75d8c3347af4fbb240660f8cb66c15a52e81469ad636b46f0ffc573c1e3&X-Amz-SignedHeaders=host',
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
    id: '95a36ace-3349-415e-a9fe-a4669f4e066e',
    new_id: 2,
    category: 'Apollo Couple Plan',
    plan: [
      {
        id: 'cb52e736-ffff-4a90-a90a-9dc2994cde3d',
        name: 'Apollo Couple Plan',
        razorPayUrl: 'https://pages.razorpay.com/pl_OaqYNm0Mk2W2xh/view',
        addition_service: '+ 6 additional care services',
        additional_GST: true,
        personCovered: {
          covered: true,
          value: 2,
        },
        description:
          'This plan is designed for couples. With this plan, both individuals receive personalized care, allowing them to enjoy their golden years with peace of mind.',
        plan_prices: [
          {
            id: '8c6b9d44-d1d8-48c2-a230-f61d00b3e679',
            duration: 12,
            price: '299',
            currency: 'INR',
            symbol: '₹',
            price_type: 'per year',
          },
        ],
        plan_services: [
          {
            id: 'e8878b7e-7b79-47b5-837e-79146f2995ae',
            name: '24/7 Emergency Coordination',
            description: 'Avail exclusive discounts & offers on value-added services crafted just for seniors. ',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/36b5babd-afb6-437e-9dcb-4a1f48413423_OffersandDiscounts.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=f908f32175b650fb41efedd4de202e210cb0355ea6d548b5bdc590f37f538d14&X-Amz-SignedHeaders=host',
          },
          {
            id: '930800ff-733c-4586-839c-cf82f024afdf',
            name: 'Doctor on Call ( 1 covered, rest at pay-per-use )',
            description:
              'Our Emoha Companion visits once-in-a-month & checks vitals, updates medical records, and more.',
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/1221fb5b-7a7f-48cd-b9a5-44223e5f37a2_SupportfromEmohaCompanion.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=e624938e79a196113ae8678e4f3e6f4184296855c177d27a95271e862482d4fa&X-Amz-SignedHeaders=host',
          },
          {
            id: '2b620563-8796-478e-bf8f-48def338c0a0',
            name: 'Ambulance Cover ( 1 covered, rest at pay-per-use )',
            description:
              "Get weekly family updates about your elder's health, appointments & more from our Emoha Daughters.",
            image_url:
              'https://emoha-production.s3.ap-south-1.amazonaws.com/aws_gallery/0cc289e3-db1e-40f1-9a52-7a22f0b1a0c8_FamilySupport.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230412%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230412T052714Z&X-Amz-Expires=604800&X-Amz-Signature=75aca75d8c3347af4fbb240660f8cb66c15a52e81469ad636b46f0ffc573c1e3&X-Amz-SignedHeaders=host',
          },
        ],
      },
    ],
    created_at: '2021-12-08 11:02:30',
    created_at_formatted: '8th Dec, 2021 (11:02 AM)',
    updated_at: '2022-02-06 23:26:27',
    updated_at_formatted: '6th Feb, 2022 (11:26 PM)',
  },
];

export { ApolloPlans };
