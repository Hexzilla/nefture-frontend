import { ToggleButtonGroup, ToggleButton } from '@mui/material';

export type Props = {
  value: number;
  setValue: (value: number) => void;
};
export default function ProductFileTabs({ value, setValue }: Props) {
  const defaultStyle = {
    '&.Mui-selected': {
      bgcolor: 'action.selected',
      '&:hover': {
        bgcolor: 'action.selected',
      },
      color:'#6B55FD'
    }
  };
  return (
    <ToggleButtonGroup
      exclusive
      value={value}
      onChange={(e: any, newvalue: number) => setValue(newvalue)}
      sx={{backgroundColor:"transparent", border:"none"}}
    >
      <ToggleButton key="left" value={0} sx={defaultStyle}>
        Creative
      </ToggleButton>
      <ToggleButton key="center" value={1} sx={defaultStyle}>
        Store
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
