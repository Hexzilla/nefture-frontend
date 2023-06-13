import {
  Autocomplete,
  AutocompleteProps,
  AutocompleteRenderInputParams,
  Box,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';

interface Props<T> extends AutocompleteProps<T, boolean, boolean, boolean> {}

export default function SearchAutoComplete<T>({
  placeholder,
  ...props
}: Omit<Props<T>, 'renderInput'>) {
  return (
    <Autocomplete
      multiple
      fullWidth
      filterSelectedOptions
      forcePopupIcon={false}
      disableClearable
      {...props}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField
          {...params}
          label=""
          placeholder={placeholder}
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '32px',
                    borderRadius: '8px',
                    border: '1px solid #EEEDF2',
                    gap: '8px',
                  }}
                  px={1}
                >
                  <Box component="img" src="/assets/icons/research/enter.svg" />
                  <Typography sx={{ fontSize: '12px' }}>Enter</Typography>
                </Box>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
