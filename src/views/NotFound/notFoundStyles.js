import makeStyles from '@mui/styles/makeStyles';
export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(10),
  },
  icon: {
    fontSize: '10rem',
    color: theme.palette.error.main,
  },
  message: {
    paddingTop: theme.spacing(2),
  },
}));
