import { InputLabel, TextField } from '@mui/material';
import React from 'react';

function SampleInputs() {
  return (
    <>
      <h3>Inputs</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: 2,
        }}
      >
        <TextField
          color="secondary"
          id="standard-basic"
          placeholder="Standard"
          variant="standard"
        />
        <div>
          <InputLabel>Tip Title</InputLabel>
          <TextField color="secondary" id="outlined-basic" variant="outlined" />
        </div>
      </div>
    </>
  );
}

export default SampleInputs;
