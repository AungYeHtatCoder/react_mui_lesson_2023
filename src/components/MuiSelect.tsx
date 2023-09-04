import { Box, TextField, MenuItem } from '@mui/material';
import { useState } from 'react';
export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log(countries);
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCountries(
      typeof event.target.value === 'string'
        ? event.target.value.split(',')
        : (event.target.value as string[])
    );
  };
  return (
    <Box width='250px'>
      <TextField
        label='Select Country'
        variant='outlined'
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size='small'
        color='secondary'
        helperText='Please select your country'
        error
      >
        <MenuItem value='India'>India</MenuItem>
        <MenuItem value='USA'>USA</MenuItem>
        <MenuItem value='UK'>UK</MenuItem>
      </TextField>
    </Box>
  );
};
