import { Divider, Grid, Stack, Typography } from '@mui/material';
import React, { useMemo } from 'react';

import StyledBox from '@components/atoms/StyledBox';
import CalendarDate from '@components/icons/CalendarDate';
import BrushIcon from '@components/icons/Brush';
import PackageIcon from '@components/icons/Package';
import StoreAppIcon from '@components/icons/StoreApp';
import PixelsIcon from '@components/icons/Pixels';
import FacebookIcon from '@components/icons/Facebook';
import TwitterIcon from '@components/icons/Twitter';
import InstagramIcon from '@components/icons/Instagram';
import TicktokIcon from '@components/icons/Ticktok';

type Props = {
  title: string;
  icon: React.ReactNode;
  subtitle?: string;
  content?: React.ReactNode;
};

const StatusBox = ({ title, icon, subtitle, content }: Props) => {
  return (
    <Stack direction="row" justifyContent="space-between" sx={{ width: '100%', height: '60px' }}>
      <Stack direction="column" spacing={1}>
        <Stack direction="row" alignItems="center" spacing={2}>
          {icon}
          <Typography>{title}</Typography>
        </Stack>
        {!!subtitle && <Typography variant="subtitle2">{subtitle}</Typography>}
        {content}
      </Stack>
      <Divider orientation="vertical" />
    </Stack>
  );
};

export default function StatusBar() {
  const cards = useMemo(
    () => [
      <StatusBox title="Creation date" icon={<CalendarDate />} subtitle="Jul 19" />,
      <StatusBox title="Store theme" icon={<BrushIcon />} subtitle="Impulse" />,
      <StatusBox title="Store language" icon={<CalendarDate />} subtitle="English" />,
      <StatusBox title="Store products" icon={<PackageIcon />} subtitle="338" />,
      <StatusBox title="Store apps" icon={<StoreAppIcon />} subtitle="View" />,
      <StatusBox
        title="Pixels"
        icon={<PixelsIcon />}
        content={
          <Stack direction="row" spacing={1}>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <TicktokIcon />
          </Stack>
        }
      />,
    ],
    []
  );

  return (
    <StyledBox sx={{ background: 'white' }}>
      <Grid container spacing={4}>
        {cards.map((card, index) => (
          <Grid key={index} item xs={6} lg={4} xl={2}>
            {card}
          </Grid>
        ))}
      </Grid>
    </StyledBox>
  );
}
