import { Container } from '@mui/material';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import AnimatedContainer from '@components/animated-container';
import { useSettingsContext } from '@components/settings';
import DashboardLayout from '@layouts/dashboard';

import useResponsive from '../../hooks/useResponsive';
import SettingsDesktop from './SettingsDesktop';
import SettingsMobile from './SettingsMobile';

export default function SettingspPage() {
  const isDesktop = useResponsive('up', 'lg');
  const [currentTab, setCurrentTab] = useState(0);
  const { themeStretch } = useSettingsContext();
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    })();
  }, []);

  return (
    <AnimatedContainer>
      <Head>
        <title> Settings | Nefture</title>
      </Head>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        {isDesktop && <SettingsDesktop />}
        {!isDesktop && <SettingsMobile />}
      </Container>
    </AnimatedContainer>
  );
}

SettingspPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;
