import { Stack, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';
export const MuiTextfield = () => {
  const [value, setValue] = useState('');
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={'row'}>
        <TextField label='Name' variant='outlined' />
        <TextField label='Email' variant='filled' />
        <TextField label='Password' variant='standard' />
      </Stack>

      <Stack spacing={2} direction={'row'}>
        <TextField
          label='Small secondary'
          variant='outlined'
          color='secondary'
          size='small'
        />
      </Stack>
      <Stack spacing={2} direction={'row'}>
        <TextField
          label='form input'
          variant='outlined'
          size='small'
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? 'Required' : 'Do not share your password'}
        />

        <TextField
          label='password'
          type='password'
          variant='outlined'
          size='small'
          helperText='password must be at least 8 characters long'
          disabled
        />
        {/* read only textfield */}
        <TextField
          label='read only'
          defaultValue='read only'
          InputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack spacing={2} direction={'row'}>
        <TextField
          label='Amount'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
          }}
        />

        <TextField
          label='Weight'
          InputProps={{
            endAdornment: <InputAdornment position='end'>KG:</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
