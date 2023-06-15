import React from 'react';
import { Chip } from '@mui/material';
import Critical from '@components/icons/Critical';
import Warning from '@components/icons/Warning';
import Secure from '@components/icons/Secure';

type Props = {
  status: number;
};
export default function StatusChip({status}:Props) {
  //initialize variables-initial values are with critical status
  let label = 'critical'
  let avatar = <Critical/>
  let defaultStyle = {
    bgcolor: 'critical.main',
    padding: '8px', 
    height: '40px', 
    borderRadius: '20px',
    color: 'white'
  };
  switch(status)
  {
    case 2: //warning status
      label = 'warning'
      avatar = <Warning/>
      defaultStyle.bgcolor = 'warning.main'
      break;
    case 3: //secure status
      label = 'secure'
      avatar = <Secure/>
      defaultStyle.bgcolor = 'white'
      defaultStyle.color = '#2965FF'
      break;
  }
  return (
    status&&<Chip
        avatar={avatar}
        label={label}
        sx={defaultStyle}
      />
  );
}
