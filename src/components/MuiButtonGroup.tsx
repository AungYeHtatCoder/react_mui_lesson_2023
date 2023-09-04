import { Stack, IconButton, Button, ButtonGroup } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
export const MuiButtonGroup = () => {
  return (
    <Stack>
      <Stack direction='row' spacing={2}>
        <Stack direction='row'>
          <ButtonGroup variant='contained'>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
      </Stack>

      <Stack direction='row' spacing={2}>
        <Stack direction='row'>
          <ButtonGroup variant='text'>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
      </Stack>

      <Stack direction='row' spacing={2}>
        <Stack direction='row'>
          <ButtonGroup
            variant='outlined'
            orientation='vertical'
            size='small'
            color='secondary'
            aria-label='alignment button group'
          >
            <Button onClick={() => alert('left clicked')}>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
      </Stack>
    </Stack>
  );
};
