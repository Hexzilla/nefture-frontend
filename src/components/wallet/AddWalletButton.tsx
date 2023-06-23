import { Box, Button } from '@mui/material';

import PlusButton from '@components/icons/PlusButton';
import PlusIcon from '@components/icons/PlusWhite';

type Props = {
  isMobile: boolean;
  onClick: () => void;
};

const AddWalletButton = ({ isMobile, onClick }: Props) => (
  <>
    {isMobile ? (
      <Box onClick={onClick}>
        <PlusButton />
      </Box>
    ) : (
      <Button
        sx={{ '&:hover': { backgroundColor: 'primary.main' } }}
        variant="contained"
        size="large"
        startIcon={<PlusIcon />}
        onClick={onClick}
      >
        Add Wallet
      </Button>
    )}
  </>
);

export default AddWalletButton;
