import { ToggleButtonGroup, ToggleButton } from '@mui/material';

export type Props = {
  value: number;
  setValue: (value: number) => void;
};

export default function ManageTabs({ value, setValue }: Props) {
  return (
    <ToggleButtonGroup
      exclusive
      value={value}
      onChange={(e: any, newvalue: number) => setValue(newvalue)}
    >
      <ToggleButton key="left" value={0}>
        Overview
      </ToggleButton>
      <ToggleButton key="center" value={1}>
        Creative
      </ToggleButton>
      <ToggleButton key="files" value={2}>
        Files
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
