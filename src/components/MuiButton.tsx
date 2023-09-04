import { Stack, Button, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
export const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={'row'}>
        <Button variant='text' href='https://google.com'>
          Text
        </Button>
        <Button variant='outlined'>Outlined</Button>
        <Button variant='contained'>Contained</Button>
      </Stack>
      <Stack spacing={2} direction={'row'}>
        <Button variant='text' color='primary'>
          Primary Text
        </Button>
        <Button variant='outlined' color='primary'>
          Primary Outlined
        </Button>
        <Button variant='contained' color='primary'>
          Primary Contained
        </Button>
      </Stack>
      <Stack spacing={2} direction={'row'}>
        <Button variant='text' color='secondary'>
          Secondary Text{' '}
        </Button>
        <Button variant='outlined' color='secondary'>
          Secondary Outlined
        </Button>
        <Button variant='contained' color='secondary'>
          Secondary Contained
        </Button>
      </Stack>
      <Stack spacing={2} direction={'row'}>
        <Button variant='text' color='info'>
          text info
        </Button>
        <Button variant='outlined' color='info'>
          outlined info
        </Button>
        <Button variant='contained' color='info'>
          contained info
        </Button>
      </Stack>
      <Stack spacing={2} direction={'row'}>
        <Button variant='text' color='success'>
          text success
        </Button>
        <Button variant='outlined' color='success'>
          outlined success
        </Button>
        <Button variant='contained' color='success'>
          contained success
        </Button>
      </Stack>
      <Stack spacing={2} direction={'row'}>
        <Button variant='text' color='warning'>
          text warning
        </Button>
        <Button variant='outlined' color='warning'>
          outlined warning
        </Button>
        <Button variant='contained' color='warning'>
          contained warning
        </Button>
      </Stack>
      <Stack spacing={2} direction={'row'}>
        <Button variant='text' color='error'>
          text error
        </Button>
        <Button variant='outlined' color='error'>
          outlined error
        </Button>
        <Button variant='contained' color='error'>
          contained error
        </Button>
      </Stack>
      <Stack display={'block'} spacing={2} direction={'row'}>
        <Button variant='contained' color='primary' size='small'>
          small
        </Button>
        <Button variant='contained' color='primary' size='medium'>
          medium
        </Button>
        <Button variant='contained' color='primary' size='large'>
          large
        </Button>
      </Stack>
      <Stack spacing={2} direction={'row'}>
        <Button variant='contained' color='primary' startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant='contained' color='primary' endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
      <Stack spacing={2} direction={'row'}>
        <IconButton aria-label='send' color='primary' size='small'>
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack spacing={2} direction={'row'}>
        <Button variant='contained' endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <Button
          variant='contained'
          endIcon={<SendIcon />}
          disableRipple
          onClick={() => alert('Clicked')}
        >
          Send
        </Button>
      </Stack>
    </Stack>
  );
};
