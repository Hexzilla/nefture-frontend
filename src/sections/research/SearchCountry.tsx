import { Box } from '@mui/material';

import CountryChip from '@components/chips/CountryChip';
import SearchAutoComplete from '@components/search-autocomplete';

import ResearchHeader from './ResearchHeader';
import { countries } from './samples';

export default function SearchCountry() {
  return (
    <>
      <ResearchHeader
        title="Select Country"
        description="Add a country and press enter."
        img="/assets/icons/research/earth.svg"
      />
      <Box mt={2}>
        <SearchAutoComplete
          options={countries}
          getOptionLabel={(option: any) => option.name}
          defaultValue={[countries[1]]}
          placeholder="Add countries"
          renderTags={(tagValue, getTagProps) =>
            tagValue.map((option, index) => (
              <CountryChip
                code={option.code}
                label={option.name}
                {...getTagProps({ index })}
                onDelete={() => console.log('delete')}
              />
            ))
          }
        />
      </Box>
    </>
  );
}
