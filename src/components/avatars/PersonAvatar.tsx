import React from 'react';
import { Avatar, Stack, Typography } from '@mui/material';

const PersonAvatar = ({ name }: { name: string }) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Avatar sx={{ width: 28, height: 28 }}>
        <Typography variant="caption">{initials}</Typography>
      </Avatar>
      <Typography>{name}</Typography>
    </Stack>
  );
};

export default PersonAvatar;
