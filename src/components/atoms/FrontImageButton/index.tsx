import { Chip } from '@mui/material';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { IconifyProps } from '../../iconify/types';
import LastSeenText from '@components/atoms/LastSeenText';

export type Props = {
  text: string;
  icon?: IconifyProps;
  sx?: SxProps<Theme>;
  onClick?: VoidFunction;
  iconSize?: number;
};

export default function FrontImageButton({ text, icon, sx, iconSize, onClick }: Props) {
  return (
    <Chip
      label={<LastSeenText text={text} sx={sx} icon={icon} iconSize={iconSize && iconSize} />}
      onClick={onClick}
      sx={{
        borderRadius: 1,
        borderColor: 'gray',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: 'white',
        cursor: 'pointer',
      }}
    />
  );
}
