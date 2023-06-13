import { Select, Typography, MenuItem, Box } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from 'react';

type CoinProps = {
  id: number,
  name: string,
  icon: string,
};

interface Props {
  list: CoinProps[];
}

export default function SelectCoinType({ list, ...other }: Props) {
  const [selectedCoinId, setSelectedCoinId] = useState(1);

  return (
    <Select
      label=""
      displayEmpty
      size="small"
      sx={{ width: 150, backgroundColor: '#1A1B1F', borderRadius: '14px' }}
      value={selectedCoinId}
      renderValue={(selected: number | undefined) => {
        // if (selected) {
        //   return list.find((x) => x.id === selected)?.name;
        // }
        return (
          <Stack direction="row" alignItems="center" spacing={1} sx={{ paddingTop: '2px' }}>
            <Box
              component="img"
              src={'/assets/images/coins/ethereum.svg'}
              sx={{ width: '24px', height: '24px' }}
            />
            <Typography sx={{ paddingTop: '1px' }}>{list.find((x) => x.id === selectedCoinId)?.name}</Typography>
          </Stack>
        );
      }}
    >
      {list.map((item, index) => (
        <MenuItem key={index} value={item.id} sx={{ padding: '12px 20px' }} onClick={() => { setSelectedCoinId(item.id) }}>
          {item.name}
        </MenuItem>
      ))}
    </Select>
  )
}