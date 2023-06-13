// ----------------------------------------------------------------------

const LICENSES = ['Standard', 'Standard Plus', 'Extended'];

export const _homePlans = [...Array(3)].map((_, index) => ({
  license: LICENSES[index],
  commons: ['One end products', '12 months updates', '6 months of support'],
  options: [
    'JavaScript version',
    'TypeScript version',
    'Design Resources',
    'Commercial applications',
  ],
  icons: [
    '/assets/icons/platforms/ic_sketch.svg',
    '/assets/icons/platforms/ic_figma.svg',
    '/assets/icons/platforms/ic_js.svg',
    '/assets/icons/platforms/ic_ts.svg',
  ],
}));

export const _pricingPlans = [
  {
    subscription: 'Standard',
    price: '£29',
    caption: 'Lorem ipsum dolor sit amet consectetur.',
    lists: [
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
    ],
    labelAction: 'Choose plan',
  },
  {
    subscription: 'Professional',
    price: '£49',
    caption: 'Lorem ipsum dolor sit amet consectetur.',
    lists: [
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
    ],
    labelAction: 'Choose plan',
  },
  {
    subscription: 'Premium',
    price: '£79',
    caption: 'Lorem ipsum dolor sit amet consectetur.',
    lists: [
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
    ],
    labelAction: 'Choose plan',
  },
];

export const _settingPricingPlans = [
  {
    subscription: 'Standard',
    price: '£29',
    caption: 'Lorem ipsum dolor sit amet consectetur.',
    lists: [
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
    ],
    labelAction: 'Downgrade',
  },
  {
    subscription: 'Professional',
    price: '£49',
    caption: 'Lorem ipsum dolor sit amet consectetur.',
    lists: [
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
    ],
    labelAction: 'Current plan',
  },
  {
    subscription: 'Premium',
    price: '£79',
    caption: 'Lorem ipsum dolor sit amet consectetur.',
    lists: [
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
      { text: 'Lorem ipsum dolor sit amet consectetur.', isAvailable: true },
    ],
    labelAction: 'Upgrade plan',
  },
];
