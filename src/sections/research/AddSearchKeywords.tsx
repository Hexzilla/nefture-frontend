import { Box, Button } from '@mui/material';

import Iconify from '@components/iconify/Iconify';
import SearchAutoComplete from '@components/search-autocomplete';

import ResearchHeader from './ResearchHeader';
import { keywords } from './samples';

export default function AddSearchKeywords() {
  return (
    <>
      <ResearchHeader
        title="Add search keywords"
        description="Add some search keywords and press enter."
        img="/assets/icons/research/search.svg"
      />
      <Box mt={2}>
        <SearchAutoComplete
          options={keywords}
          getOptionLabel={(option: any) => option.title || option}
          defaultValue={[keywords[1]]}
          placeholder="Enter a keywords"
          freeSolo
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} mt={2}>
        <Button
          variant="outlined"
          sx={{ color: 'black' }}
          disabled
          startIcon={<Iconify icon="eva:sync-outline" width={16} />}
        >
          Reset filter
        </Button>
        <Button
          variant="outlined"
          sx={{ color: 'black' }}
          startIcon={<Iconify icon="eva:plus-circle-outline" width={16} />}
        >
          Add filter
        </Button>
      </Box>
    </>
  );
}
