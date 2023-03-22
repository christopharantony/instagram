import {
  Box,
  Button,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { useStyles } from './notFoundStyles';
import instagramImage from '../../assets/icons/instagramBlack.png';
import { Search } from '@mui/icons-material';
import { FooterItems } from '../../constants';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const classes = useStyles();
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.navbar}>
        <img
          className={classes.instagramImage}
          onClick={goToHome}
          src={instagramImage}
        />
        <TextField
          className={classes.navInput}
          placeholder="Search"
          variant="filled"
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{ margin: 0, marginTop: '0 !important' }}
              >
                <Search />
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
        />
        <Box className={classes.btnContainer}>
          <Button className={classes.loginBtn} variant="contained">
            Log In
          </Button>
          <Link className={classes.signUpBtn}>Sign Up</Link>
        </Box>
      </Box>
      <Box className={classes.contentBox}>
        <Typography variant="h3">Sorry,This page isn't avialable.</Typography>
        <Typography className={classes.desc} variant="p">
          The link you followed may be broken, or the page may have been
          removed.
          <Link className={classes.link} onClick={goToHome}>
            {' '}
            Go back to Instagram.
          </Link>
        </Typography>
      </Box>
      <Box className={classes.footer}>
        <Box className={classes.footerItems}>
          {FooterItems.map((footer) => (
            <Link className={classes.footerItemLink}>{footer.name}</Link>
          ))}
        </Box>
        <Box className={classes.footerItems}>
          English 2023 Instagram from Meta
        </Box>
      </Box>
    </Box>
  );
}

export default NotFound;
