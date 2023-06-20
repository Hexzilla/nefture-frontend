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

const colorIcon = (name: string, color: string) => (
  // <Box component="img" src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{color: color, width: 1, height: 1 }}/>
);

const ICONS = {
  tracker: icon('tracker-icon'),
  team: icon('team-icon'),
  setting: icon('setting-icon'),
  product: icon('product-icon'),
  research: icon('research-icon'),
  dashboard: colorIcon('ic_dashboard', 'rgb(255,255,255,100%)'),
  dashboardDisabled: colorIcon('ic_dashboard', 'rgb(255,255,255,40%)'),
  guard: colorIcon('ic_guard', 'rgb(255,255,255,100%)'),
  guardDisabled: colorIcon('ic_guard', 'rgb(255,255,255,40%)'),
  wallets: colorIcon('ic_wallets', 'rgb(255,255,255,100%)'),
  walletsDisabled: colorIcon('ic_wallets', 'rgb(255,255,255,40%)'),
  settings: colorIcon('ic_settings', 'rgb(255,255,255,100%)'),
  settingsDisabled: colorIcon('ic_settings', 'rgb(255,255,255,40%)'),
  networks: colorIcon('ic_networks', 'rgb(255,255,255,100%)'),
  networksDisabled: colorIcon('ic_networks', 'rgb(255,255,255,40%)'),
  faqs: colorIcon('ic_faq', 'rgb(255,255,255,100%)'),
  faqsDisabled: colorIcon('ic_faq', 'rgb(255,255,255,40%)'),
};

const navConfig = [
  // Upper Nav Items
  // ----------------------------------------------------------------------
  {
    subheader: '',
    items: [
      { title: 'Dashboard', path: PATH_DASHBOARD.root, icon: ICONS.dashboard, iconDisabled: ICONS.dashboardDisabled },
      { title: 'Wallet', path: PATH_DASHBOARD.wallet, icon: ICONS.wallets, iconDisabled: ICONS.walletsDisabled },
      { title: 'Nefture +', path: PATH_DASHBOARD.nefturePlus, icon: ICONS.guard, iconDisabled: ICONS.guardDisabled },
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
      { title: 'Networks', path: PATH_DASHBOARD.networks, icon: ICONS.networks, iconDisabled:ICONS.networksDisabled },
      { title: 'Settings', path: PATH_DASHBOARD.settings, icon: ICONS.settings, iconDisabled:ICONS.settingsDisabled},
      { title: 'FAQ', path: PATH_DASHBOARD.faq, icon: ICONS.faqs, iconDisabled:ICONS.faqsDisabled},
    ],
  },
];
export const mobileNavConfig = [
  {
    subheader: '',
    items: [
      { title: 'Dashboard', path: PATH_DASHBOARD.root, icon: ICONS.dashboard, iconDisabled: ICONS.dashboardDisabled },
      { title: 'Wallet', path: PATH_DASHBOARD.wallet, icon: ICONS.wallets, iconDisabled: ICONS.walletsDisabled },
      { title: 'Nefture +', path: PATH_DASHBOARD.nefturePlus, icon: ICONS.guard, iconDisabled: ICONS.guardDisabled },
      { title: 'Settings', path: PATH_DASHBOARD.settings, icon: ICONS.settings, iconDisabled:ICONS.settingsDisabled},
    ],
  },
];

export default navConfig;
