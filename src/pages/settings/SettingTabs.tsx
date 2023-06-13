import { ToggleButtonGroup, ToggleButton } from '@mui/material';

export type Props = {
  value: number;
  setValue: (value: number) => void;
};

export default function SettingTabs({ value, setValue }: Props) {
  return (
    <ToggleButtonGroup
      exclusive
      value={value}
      onChange={(e: any, newvalue: number) => setValue(newvalue)}
    >
      <ToggleButton key="left" value={0}>
        Account
      </ToggleButton>
      <ToggleButton key="center" value={1}>
        Billing
      </ToggleButton>
      <ToggleButton key="center" value={2}>
        Your Plan
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
