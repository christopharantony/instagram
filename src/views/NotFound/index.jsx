import React from 'react';
import { Container, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useStyles } from './notFoundStyles';

function NotFound() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <ErrorOutlineIcon className={classes.icon} />
      <Typography variant="h4" className={classes.message}>
        Page not found
      </Typography>
    </Container>
  );
}

export default NotFound;
