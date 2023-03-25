import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import instagramImage from '../../../assets/icons/instagramBlack.png';
import { useStyles } from '../styles/formStyles';

const LoginForm = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.form}>
          <img className={classes.image} src={instagramImage} />
          <TextField
            className={classes.text1}
            fullWidth
            label="Phone number, username, or email"
            variant="filled"
            InputProps={{ disableUnderline: true}}
          />
          <TextField
            className={classes.text}
            fullWidth
            label="Password"
            variant="filled"
            InputProps={{ disableUnderline: true}}
          />
          <Button fullWidth className={classes.loginBtn} variant="contained">
            Log In
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;
