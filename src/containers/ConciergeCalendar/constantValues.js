const timeValues = [
  {
    id: 'early',
    index: 0,
    startTime: '00:00:00',
    endTime: '08:00:00',
    title: 'Early hours',
    selectedIcon: 'sunny_snowing-1.webp',
    unSelectedIcon: 'sunny_snowing.webp',
    isDisabled: false,
  },

  {
    id: 'morning',
    startTime: '08:00:01',
    endTime: '12:00:00',
    title: '08 AM - 12 PM',
    selectedIcon: 'clear_day-1.webp',
    unSelectedIcon: 'clear_day.webp',
    isDisabled: false,
  },

  {
    id: 'noon',
    startTime: '12:00:01',
    endTime: '16:00:00',
    title: '12 PM - 04 PM',
    selectedIcon: 'partly_cloudy_day-1.webp',
    unSelectedIcon: 'partly_cloudy_day.webp',
    isDisabled: false,
  },

  {
    id: 'eve',
    startTime: '16:00:01',
    endTime: '23:59:59',
    title: 'After 04 PM',
    selectedIcon: 'nights_stay-1.webp',
    unSelectedIcon: 'nights_stay.webp',
    isDisabled: false,
  },
];

// const timeValues = [
//   {
//     id: 'early',
//     index: 0,
//     startTime: '00:00:00',
//     endTime: '08:00:00',
//     title: 'Early hours',
//     selectedIcon: 'sunny_snowing-1.webp',
//     unSelectedIcon: 'sunny_snowing.webp',
//   },

//   {
//     id: 'morning',
//     startTime: '08:00:01',
//     endTime: '12:00:00',
//     title: '08 AM - 12 PM',
//     selectedIcon: 'clear_day-1.webp',
//     unSelectedIcon: 'clear_day.webp',
//   },

//   {
//     id: 'noon',
//     startTime: '18:00:01',
//     endTime: '22:00:00',
//     title: '12 PM - 04 PM',
//     selectedIcon: 'partly_cloudy_day-1.webp',
//     unSelectedIcon: 'partly_cloudy_day.webp',
//   },

//   {
//     id: 'eve',
//     startTime: '22:00:01',
//     endTime: '23:59:59',
//     title: 'After 04 PM',
//     selectedIcon: 'nights_stay-1.webp',
//     unSelectedIcon: 'nights_stay.webp',
//   },
// ];

const addressVales = [
  {
    full_Address: '810, LIG Colony, Sector 31, Haryana, India',
    city: 'Haryana',
    country: 'India',
    address_type: 'Home',
    default_address: true,
    id: 0,
  },
  {
    full_Address: '810, LIG Colony, Sector 32, Haryana, India',
    city: 'Noida',
    country: 'India',
    address_type: 'Office',
    default_address: false,
    id: 1,
  },
  {
    full_Address: '810, LIG Colony, Sector 33, Haryana, India',
    city: 'Delhi',
    country: 'India',
    address_type: 'Other',
    default_address: false,
    id: 2,
  },
];

export { timeValues, addressVales };
