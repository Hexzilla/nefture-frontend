import { Box, Stack, Typography } from '@mui/material';
import { DM_Mono } from '@next/font/google';
import { useState } from 'react';
import { buttonStyles } from '../../theme/neftureStyles';

type Props = {
  title: String;
  value: String;
  onCopy: (text: string) => void;
};

const dmMono = DM_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function InformationView({ title, value, onCopy }: Props) {
  const [loading, setLoading] = useState(2);

  const copyAction =(text:string)=>{
    onCopy(text);
    (async () => {
      setTimeout(() => {
        setLoading(0);
        setTimeout(() => {
          setLoading(1);
        }, 500);
      }, 500);
    })();

  }
  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" mt={1}>
      <Stack direction="column">
        <Typography color="gray">{title}</Typography>
      </Stack>
      <Stack
        sx={buttonStyles}
        p={1}
        onClick={() => copyAction(value.toString())}
        direction="row"
        textAlign="center"
      >
        <Typography className={dmMono.className} fontSize="12px" mt="6px">
          {value}
        </Typography>
        {loading == 0 && (
          <Box
            component="img"
            src="/assets/icons/nefture/ic_loading.svg"
            display={'inline'}
            width="22px"
          />
        )}
        {loading == 1 && (
          <Box
            component="img"
            src="/assets/icons/nefture/ic_check_blue.svg"
            display={'inline'}
            width="22px"
          />
        )}
      </Stack>
    </Stack>
  );
}
