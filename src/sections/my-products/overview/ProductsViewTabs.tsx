import { ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';

import BoardIcon from '@components/icons/Board';
import TableIcon from '@components/icons/Table';

export type Props = {
  value: number;
  setValue: (value: number) => void;
};

export default function ProductsViewTabs({ value, setValue }: Props) {
  return (
    <ToggleButtonGroup
      exclusive
      value={value}
      onChange={(e: any, newvalue: number) => setValue(newvalue)}
    >
      <ToggleButton key="left" value={0}>
        <BoardIcon />
        <Typography ml={1}>Board view</Typography>
      </ToggleButton>
      <ToggleButton key="center" value={1}>
        <TableIcon />
        <Typography ml={1}>Table view</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
