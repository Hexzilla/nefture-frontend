import { Select, Typography, MenuItem, Box } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from 'react';

type AmountProps = {
  id: number,
  name: string,
  icon: string,
  amount: string,
};

interface Props {
  list: AmountProps[];
}

export default function SelectCoinAmount({ list, ...other }: Props) {
  const [selectedUserId, setSelectedUserId] = useState(1);

  return (
    <Stack direction="row" alignItems="center" spacing={1} sx={{ backgroundColor: '#1A1B1F', borderRadius: '14px' }}>
      <Typography sx={{ paddingTop: '1px', paddingLeft: '1em' }}>{list.find((x) => x.id === selectedUserId)?.amount}</Typography>
      <Select
        label=""
        displayEmpty
        size="small"
        sx={{ width: 150, backgroundColor: '#27282C', borderRadius: '14px' }}
        value={selectedUserId}
        renderValue={(selected: number | undefined) => {
          return (
            <Stack direction="row" alignItems="center" spacing={1} sx={{ paddingTop: '2px' }}>
              <Box
                component="img"
                src={'/assets/images/avatar/avatar.svg'}
                sx={{ width: '24px', height: '24px' }}
              />
              <Typography sx={{ paddingTop: '1px' }}>{list.find((x) => x.id === selectedUserId)?.name}</Typography>
            </Stack>
          );
        }}
      >
        {list.map((item, index) => (
          <MenuItem key={index} value={item.id} sx={{ padding: '12px 20px' }} onClick={() => { setSelectedUserId(item.id) }}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  )
}