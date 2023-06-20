// mui
import { Box } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <Box component="img" src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  tracker: icon('tracker-icon'),
  team: icon('team-icon'),
  setting: icon('setting-icon'),
  product: icon('product-icon'),
  research: icon('research-icon'),
  dashboard: icon('ic_dashboard'),
  guard: icon('ic_guard'),
  wallets: icon('ic_wallets'),
  settings: icon('ic_settings'),
  networks: icon('ic_networks'),
  faqs: icon('ic_faq'),
};

const navConfig = [
  // Upper Nav Items
  // ----------------------------------------------------------------------
  {
    subheader: '',
    items: [
      { title: 'Dashboard', path: PATH_DASHBOARD.root, icon: ICONS.dashboard },
      { title: 'Wallet', path: PATH_DASHBOARD.wallet, icon: ICONS.wallets },
      { title: 'Nefture +', path: PATH_DASHBOARD.nefturePlus, icon: ICONS.guard },
      // {
      //   title: 'My Products',
      //   path: PATH_DASHBOARD.myProducts.root,
      //   icon: ICONS.product,
      //   children: [
      //     { title: 'overview', path: PATH_DASHBOARD.myProducts.overview },
      //     { title: 'saved Products', path: PATH_DASHBOARD.myProducts.savedProducts },
      //     { title: 'scheduled', path: PATH_DASHBOARD.myProducts.scheduled },
      //     { title: 'tested', path: PATH_DASHBOARD.myProducts.tested },
      //   ],
      // },
    ],
  },
];
export const bottomNavConfig = [
  // Bottom Nav Items
  // ----------------------------------------------------------------------
  {
    subheader: '',
    items: [
      { title: 'Networks', path: PATH_DASHBOARD.networks, icon: ICONS.networks },
      { title: 'Settings', path: PATH_DASHBOARD.settings, icon: ICONS.settings },
      { title: 'FAQ', path: PATH_DASHBOARD.settings, icon: ICONS.faqs },
    ],
  },
];

export default navConfig;
