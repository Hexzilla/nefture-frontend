import Editor from '@components/editor/Editor';
import Iconify from '@components/iconify/Iconify';
import SearchAutoComplete from '@components/search-autocomplete/SearchAutocomplete';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
// mock
import _mock from '../../../_mock';
// sections
import { CarouselThumbnail } from '@sections/_examples/extra/carousel';
// ----------------------------------------------------------------------
type Props = {
  open: boolean;
  isMobile: boolean;
  onClose: () => void;
}

// ----------------------------------------------------------------------
const _carouselsExample = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.text.title(index),
  image: _mock.image.cover(index),
  description: _mock.text.description(index),
}));

// ----------------------------------------------------------------------

const LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'French' },
  { value: 'gr', label: 'German' },
  { value: 'ch', label: 'Chinese' },
];

export default function ImportProduct({ open, isMobile, onClose }: Props) {
  const [productDescription, setProductDescription] = useState('');

  const [language, setLanguage] = useState('');

  const [isAICopyDisabled, setIsAICopyDisabled] = useState(false);

  const [isOriginalCopyDisabled, setIsOriginalCopyDisabled] = useState(true);

  const handleSelectLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <Dialog open={open} onClose={onClose} scroll='paper' maxWidth={false}>
      <DialogTitle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h6'>Import product</Typography>
          <IconButton
            size="small"
            color="inherit"
            onClick={onClose}
            sx={{ color: 'text.secondary' }}
          >
            <Iconify icon="carbon:close" width={24} height={24} />
          </IconButton>
        </Box>
        <Typography variant='body1' color="inherit">
          Aliquam sagittis auctor in tellus auctor iaculis eget mollis.
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ minWidth: isMobile ? 0 : 740 }}>
        <Stack direction="column" spacing={3}>
          <Grid container spacing={4}>
            <Grid item xs={8} md={8}>
              <Stack direction="column" spacing={3}>
                <FormControl fullWidth>
                  <Typography>Product title</Typography>
                  <TextField
                    id="title"
                    type="text"
                    placeholder="Enter product title"
                    variant="outlined"
                    autoFocus
                    margin="dense"
                  />
                </FormControl>

                <FormControl fullWidth>
                  <Typography>Product handle</Typography>
                  <TextField
                    id="handle"
                    type="text"
                    placeholder="Enter product handle"
                    variant="outlined"
                    margin="dense"
                  />
                </FormControl>

                <FormControl fullWidth>
                  <Typography>Product vendor</Typography>
                  <TextField
                    id="vendor"
                    type="text"
                    placeholder="Enter product vendor"
                    variant="outlined"
                    margin="dense"
                  />
                </FormControl>
              </Stack>
            </Grid>
            <Grid item xs={4} md={4}>
              <CarouselThumbnail data={_carouselsExample} />
            </Grid>
          </Grid>

          <FormControl>
            <FormControlLabel label="Publish to Online store on import" control={<Checkbox />} />
            <FormControlLabel label="Taxable" control={<Checkbox defaultChecked />} />
          </FormControl>

          <Divider />

          <Box sx={{ width: '100%' }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <Typography>Average product price</Typography>
                  <TextField
                    id="title"
                    type="number"
                    placeholder="Enter price"
                    variant="outlined"
                    margin="dense"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <Typography>Average product compare at price</Typography>
                  <TextField
                    id="title"
                    type="number"
                    placeholder="Enter price"
                    variant="outlined"
                    margin="dense"
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          <Divider />

          <Stack direction="column" spacing={1}>
            <Typography>
              Product Description
            </Typography>
            <Editor
              simple
              id="product-description-editor"
              value={productDescription}
              onChange={(value) => setProductDescription(value)}
            />
          </Stack>

          <Stack direction="column" spacing={1}>
            <Typography>
              Translate copy
            </Typography>

            <Box sx={{ width: '100%' }}>
              <Grid container columnSpacing={3}>
                <Grid item md={4}>
                  <TextField
                    variant='outlined'
                    InputProps={{ sx: { height: 48 } }}
                    select
                    fullWidth
                    label="Select"
                    value={language}
                    onChange={handleSelectLanguage}
                  >
                    {LANGUAGES.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={4}>
                  <Button
                    variant='contained'
                    color="primary"
                    sx={{ height: 48 }}
                    fullWidth
                    disabled={isAICopyDisabled}
                    startIcon={<img src="/assets/icons/GenerateAICopy.svg" />}
                  >
                    Generate AI copy
                  </Button>
                </Grid>
                <Grid item md={4}>
                  <Button
                    variant='contained'
                    disabled={isOriginalCopyDisabled}
                    startIcon={<img src="/assets/icons/GenerateAICopy.svg" />}
                    sx={{ pl: 1.5, pr: 1.5, height: 48 }}
                  >
                    Restore original copy
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Stack>

          <Divider />

          <FormControl fullWidth>
            <Typography sx={{ mb: 1 }}>
              Product Tags
            </Typography>

            <SearchAutoComplete
              options={productTags}
              getOptionLabel={(option: any) => option.title || option}
              defaultValue={[productTags[1]]}
              placeholder="Add product tags and press enter"
              freeSolo
            />
          </FormControl>

          <Divider />
        </Stack>
      </DialogContent>

      <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button color="inherit" size="large" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" size="large" onClick={onClose} sx={{ mr: 2}}>
          Import product
        </Button>
      </DialogActions>
    </Dialog>
  )
};

const productTags = [
  { title: 'Popular', year: 1994 },
  { title: 'Sale', year: 1972 },
  { title: 'Clothing', year: 1974 },
  { title: 'Sports', year: 2008 },
  { title: 'Trending', year: 1957 },
  { title: "Fashion", year: 1993 },
  { title: 'New', year: 1994 },
  {
    title: 'Cheap',
    year: 2003,
  },
  { title: 'Expensive', year: 1966 },
  { title: 'Old', year: 1999 },
  {
    title: 'Shoes',
    year: 2001,
  }
];