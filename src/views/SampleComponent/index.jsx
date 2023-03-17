import React from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  Link,
  Tab,
  Tabs,
  TextField,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SampleForm from '../../form/SampleForm';
import SampleTable from '../../table/SampleTable';
import SampleCharts from '../../charts/SampleCharts';
function Components() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div style={{ margin: '1em' }}>
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
          <TextField
            color="secondary"
            id="standard-basic"
            placeholder="Standard"
            variant="standard"
          />
          <div>
            <InputLabel>Tip Title</InputLabel>
            <TextField
              color="secondary"
              id="outlined-basic"
              variant="outlined"
            />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            margin: 2,
          }}
        >
          <div style={{ width: '50%', margin: '1rem' }}>
            <LoadingButton
              size="large"
              type="submit"
              variant="contained"
              endIcon={<ArrowRightAltIcon />}
            >
              Login
            </LoadingButton>
          </div>
        </div>

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

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            margin: 2,
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Item One" />
            <Tab value="two" label="Item Two" />
            <Tab value="three" label="Item Three" />
          </Tabs>
        </div>
      </div>
      <SampleForm />
      <SampleTable />
      <SampleCharts />
    </>
  );
}

export default Components;
