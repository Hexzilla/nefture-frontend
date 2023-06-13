// @mui
import { styled } from '@mui/material/styles';
import { Divider, IconButton, Stack, Box, Typography } from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';

// ----------------------------------------------------------------------
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',

  border: '1px solid #EEEDF2',
  borderRadius: '8px',
  flexGrow: '1',
}));

export default function AuthWithSocial() {
  const { loginWithGoogle } = useAuthContext();

  const handleGoogleLogin = async () => {
    try {
      if (loginWithGoogle) {
        loginWithGoogle();
      }
      console.log('GOOGLE LOGIN');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Stack direction="row" justifyContent="center" spacing={2} width="200px" margin="auto">
        <StyledIconButton onClick={handleGoogleLogin}>
          <Box
            component="img"
            src="/assets/icons/auth/google.svg"
            sx={{ width: '24px', height: '24px' }}
          />
        </StyledIconButton>
      </Stack>

      <Divider
        sx={{
          mt: 2.5,
          typography: 'overline',
          color: 'text.disabled',
          '&::before, ::after': {
            borderTopStyle: 'dashed',
          },
          textTransform: 'none',
        }}
      >
        <Typography variant="body2" fontWeight="medium">
          or sign up with
        </Typography>
      </Divider>
    </div>
  );
}
