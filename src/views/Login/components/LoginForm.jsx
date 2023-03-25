import { Box, Button, Link, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import InstagramImage from '../../../assets/icons/instagramBlack.png';
import { useStyles } from '../styles/formStyles';
import Divider from '@mui/material/Divider';
import  GooglePlay from '../../../assets/icons/googlePlay.png';
import AppStore from '../../../assets/icons/appStore.png';


const LoginForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.form}>
          <img className={classes.image} src={InstagramImage} />
          <TextField
            className={classes.text1}
            fullWidth
            label={email?"Phone number, username, or email":""}
            placeholder='Phone number, username, or email'
            
            // InputLabelProps={{shrink:Boolean(email)}}
            onChange={(e)=>setEmail(e.target.value)}
          
            variant="filled"
            InputProps={{ disableUnderline: true }}
          />
          <TextField
            className={classes.text}
            fullWidth
            label="Password"
            variant="filled"
            InputProps={{ disableUnderline: true }}
          />
          <Button fullWidth className={classes.loginBtn} variant="contained">
            Log In
          </Button>
        </Box>

        <Divider className={classes.divider}>OR</Divider>
        <Box className={classes.FbLinkContainer}>
          <Box className={classes.smallIconFb} />
          <Typography className={classes.FbLink}>
            Log in with Facebook
          </Typography>
        </Box>
        <Typography className={classes.forgotPW}>Forgot password?</Typography>
      </Box>
      <Box className={classes.root}>
        <Typography className={classes.SignupText}>Don't have an account? <Link className={classes.SignupLink}>Sign Up</Link></Typography>
      </Box>
      <Typography className={classes.SignupText}>Get the app</Typography>
      <Box className={classes.ImageContainer}>
      <img className={classes.GetImage} src={AppStore} />
      <img className={classes.GetImage} src={GooglePlay} />

      </Box>

      
    </>
  );
};

export default LoginForm;
