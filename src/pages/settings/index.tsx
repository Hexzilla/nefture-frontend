import { useState } from 'react';
import Head from 'next/head';
import { Container } from '@mui/material';

import DashboardLayout from '@layouts/dashboard';
import AnimatedContainer from '@components/animated-container';
import { useSettingsContext } from '@components/settings';

import SettingTabs from './SettingTabs';
import AccountTab from './AccountTab';
import BillingTab from './BillingTab';
import PlanTab from './PlanTab';
// import ExtendTrialModal from './ExtendTrialModal';
// import CancellingReason from './CancellingReason';

export default function SettingspPage() {
  const [currentTab, setCurrentTab] = useState(0);

  const { themeStretch } = useSettingsContext();

  return (
    <AnimatedContainer>
      <Head>
        <title> Accounts | Exodais</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <SettingTabs value={currentTab} setValue={setCurrentTab} />
        {currentTab === 0 && <AccountTab />}
        {currentTab === 1 && <BillingTab />}
        {currentTab === 2 && <PlanTab />}
        {/* <ExtendTrialModal open onClose={() => console.log('close')} /> */}
        {/* <CancellingReason open onClose={() => console.log('close')} /> */}
      </Container>
    </AnimatedContainer>
  );
}

SettingspPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;
