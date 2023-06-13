import { ToggleButtonGroup, ToggleButton } from '@mui/material';

export type Props = {
  value: number;
  setValue: (value: number) => void;
};

export default function SearchTabs({ value, setValue }: Props) {
  return (
    <ToggleButtonGroup
      exclusive
      value={value}
      onChange={(e: any, newvalue: number) => setValue(newvalue)}
    >
      <ToggleButton key="left" value={0}>
        Search tool
      </ToggleButton>
      <ToggleButton key="center" value={1}>
        Search history
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
