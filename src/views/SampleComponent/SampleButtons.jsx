import { LoadingButton } from '@mui/lab';
import { Button } from '@mui/material';
import React from 'react';

function SampleButtons() {
  return (
    <>
      <h3>Buttons</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: 2,
        }}
      >
        <Button color="primary" variant="contained">
          Primary
        </Button>
        <Button color="secondary" variant="contained">
          Secondary
        </Button>
        <Button color="primary" variant="outlined">
          Outlined
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: 2,
        }}
      >
        <div style={{ width: '50%', margin: '1rem' }}>
          <LoadingButton size="large" type="submit" variant="contained">
            Login
          </LoadingButton>
        </div>
      </div>
    </>
  );
}

export default SampleButtons;
