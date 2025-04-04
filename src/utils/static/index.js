/* eslint-disable max-len */
import config from 'config';

const genderItems = [
  { label: 'Male', value: '1' },
  { label: 'Female', value: '2' },
  { label: 'Others', value: '3' },
];

const staticCarouselData = [
  {
    id: 1,
    uuid: '7e1fc3c8-1c9d-44b9-96e5-cbb4a1b30ba7',
    image_url: 'https://d2ts1vii79fe9b.cloudfront.net/uploads/images/684a784d-cfcc-4cb7-8cf1-0f1470f8f7fc/index.m3u8',
    text_heading: 'More Safety',
    text_normal:
      "1 out of 4 elders in India experience fall.  We know crisis can strike anytime.  That's we're prepared 24*7!",
    created_at: '2023-05-31 03:53:50',
    updated_at: '2023-06-08 13:35:15',
    image_url_mobile:
      'https://d2ts1vii79fe9b.cloudfront.net/uploads/images/95381919-0a55-4fd7-9df0-a1cb0ec75ef7/index.m3u8',
    thumbnail_image:
      'https://d2ts1vii79fe9b.cloudfront.net/aws_gallery/0ebd3022-d2f7-47b5-8407-69c947d52dbc_video-capture-5402.webp',
    thumbnail_image_mobile:
      'https://d2ts1vii79fe9b.cloudfront.net/aws_gallery/4fc9834e-5fba-4356-9943-c507d4b8bbc3_video-capture-1414.webp',
    desktop_image: '/static/images/safety_corporate.webp',
  },
  {
    id: 2,
    uuid: 'c258f8d3-a029-487c-aa8f-31adefd38222',
    image_url: 'https://d2ts1vii79fe9b.cloudfront.net/uploads/images/2615f0ee-d954-4a9d-bf16-5344a3ce2bbb/index.m3u8',
    text_heading: 'More Health',
    text_normal:
      '3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha.',
    created_at: '2023-05-31 03:53:50',
    updated_at: '2023-06-08 13:35:15',
    image_url_mobile:
      'https://d2ts1vii79fe9b.cloudfront.net/uploads/images/6306c306-062b-4f86-a5a2-db0e9adb1482/index.m3u8',
    thumbnail_image:
      'https://d2ts1vii79fe9b.cloudfront.net/aws_gallery/54a1a302-3829-4682-92c6-7a88bbe551e3_video-capture-4035.webp',
    thumbnail_image_mobile:
      'https://d2ts1vii79fe9b.cloudfront.net/aws_gallery/bba96963-e318-4da9-a7c8-ccc440539ace_video-capture-4960.webp',
    category_id: '6b465fbf-40b5-4533-8ea8-69df01d6189d',
    desktop_image: '/static/images/health_corporate.webp',
  },
  {
    id: 3,
    uuid: 'e51b8564-dda7-46e4-afcc-7e2de81329ee',
    image_url: 'https://d2ts1vii79fe9b.cloudfront.net/uploads/images/e36c8b2c-dfb1-4356-8a7e-108fe65ff229/index.m3u8',
    text_heading: 'More Convenience',
    text_normal:
      'Free your parents from the everyday household stresses with a dedicated support to manage the hassles.',
    created_at: '2023-05-31 03:53:50',
    updated_at: '2023-06-08 13:35:15',
    image_url_mobile:
      'https://d2ts1vii79fe9b.cloudfront.net/uploads/images/698ed65e-81ff-4af5-b747-bc050764e26a/index.m3u8',
    thumbnail_image:
      'https://d2ts1vii79fe9b.cloudfront.net/aws_gallery/eb412e05-2573-4192-a998-dd7a626922ea_video-capture-7911.webp',
    thumbnail_image_mobile:
      'https://d2ts1vii79fe9b.cloudfront.net/aws_gallery/4cc15ff4-12d2-448f-89a7-36708f535b01_video-capture-8350.webp',
    category_id: 'bceb1d8f-a12c-4c2f-8b0d-8c2031f731d0',
    desktop_image: '/static/images/convenience_corporate.webp',
  },
  {
    id: 4,
    uuid: '8b7335e1-1eff-4d00-a5ae-85b7d4fa9dee',
    image_url: 'https://d2ts1vii79fe9b.cloudfront.net/uploads/images/208fc4fc-e9e6-4417-9a12-4d80cb383019/index.m3u8',
    text_heading: 'More Busy',
    text_normal:
      'Out of 4 seniors in India, 2 are lonely.   With Emoha’s ecosystem, re-wire your parents’ retirement in new ways.',
    created_at: '2023-05-31 03:53:50',
    updated_at: '2023-06-08 13:35:15',
    image_url_mobile:
      'https://d2ts1vii79fe9b.cloudfront.net/uploads/images/097b9194-9420-4038-b2d3-ffa6d324ac2e/index.m3u8',
    thumbnail_image:
      'https://d2ts1vii79fe9b.cloudfront.net/aws_gallery/25504659-2a84-4575-bbb6-66dbf46afd15_video-capture-319.webp',
    thumbnail_image_mobile:
      'https://d2ts1vii79fe9b.cloudfront.net/aws_gallery/aacaf659-3f2e-4453-96b7-66da3a39096e_video-capture-2599.webp',
    desktop_image: '/static/images/busy_corporate.webp',
  },
];

const AssurePlanObj = {
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
      brochure_url: 'aws_gallery/1dd3fa8f-235b-49c0-926e-636033f8689f_ShortBrochureforEngage+Empower+Enhance(2).pdf',
      plan_prices: [
        {
          id: '1784d78b-bd9d-48aa-82d2-7233b4c8ecf2',
          duration: 12,
          price: 6000,
          price_cut: '',
          currency: 'INR',
          price_type: 'per month + No GST ',
          is_display_in_dashboard: false,
          symbol: '₹',
        },
      ],
      plan_services: [
        {
          id: '03e6a522-dcdf-4753-8280-fb242a0d06f6',
          name: '24x7 Emergency Response',
          description: "Emoha's emergency response team is available round the clock to provide support.",
          image_url: '/static/images/assure_emergency.webp',
        },
        {
          id: '9e11e7e5-7525-49bf-925a-2cd80ebfce7b',
          name: 'Monthly Doctor Home Visit',
          description: 'Emoha empaneled doctor, who’ll help you to stay a healthier life',
          image_url: '/static/images/assure_monthly_doc.webp',
        },
        {
          id: '2b354d0d-b59f-474e-8ece-e0c8c94958b5',
          name: 'Monthly Physio Home Visit',
          description: 'Emoha empaneled Physio visit every month to Elder’s home',
          image_url: '/static/images/assure_monthly_physio.webp',
        },
        {
          id: 'f38b7aeb-1543-4260-80ea-336c41f7a7a3',
          name: 'Monthly Dietician Calls',
          description: 'Diet chart for individual created by experts which ensure to meet all the nutritional values',
          image_url: '/static/images/assure_monthly_dietician.webp',
        },
        {
          id: 'c8efda44-00a4-4522-803b-f0f2e3cd0788',
          name: 'Personalized Diet Plan',
          description: 'Delivering all-round healthcare at home services for elders\n',
          image_url: '/static/images/assure_monthly_diet.webp',
        },
        {
          id: 'c8efda44-00a4-4522-803b-f0f2e3cd0788',
          name: '4-Hour Support For Household Errands',
          description: 'Get Emoha Helpdesk support to get your errands related work done',
          image_url: '/static/images/assure_household.webp',
        },
        {
          id: 'c8efda44-00a4-4522-803b-f0f2e3cd07345',
          name: 'Covers Up To 2 Elders Per Household',
          description: 'Delivering all-round healthcare at home services for elders\n',
          image_url: '/static/images/assure_elder.webp',
        },
        {
          id: 'c8efda44-00a4-4522-803b-f0f2e3cd01234',
          name: 'Daily Care Calls',
          description: 'Daily care calls by Emoha Daughter to keep a check-in on Elder’s day-to-day life',
          image_url: '/static/images/assure_daily_care.webp',
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
};

export { genderItems, AssurePlanObj, staticCarouselData };
