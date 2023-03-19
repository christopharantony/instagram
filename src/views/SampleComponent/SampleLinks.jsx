import { Checkbox, FormControlLabel, Link } from '@mui/material';
import React from 'react';

function SampleLinks() {
  return (
    <>
      <h3>Links</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: 2,
        }}
      >
        <Link>Forgot Password</Link>
        <FormControlLabel
          control={<Checkbox defaultChecked color="primary" />}
          label="Keep me logged in"
        />
      </div>
    </>
  );
}

export default SampleLinks;
