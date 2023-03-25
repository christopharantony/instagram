import makeStyles from '@mui/styles/makeStyles';
export const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.border.base}`,
    padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '174px',
    marginTop: theme.spacing(3.6),
    marginBottom: theme.spacing(1.2),
  },
  text1: {
    marginTop: theme.spacing(2.4),
    margin: `${theme.spacing(0.6)} ${theme.spacing(4)}`,
    border: `1px solid ${theme.palette.border.base}`,
    backgroundColor:'#fafafa'

  },
  text: {
    margin: `${theme.spacing(0.6)} ${theme.spacing(4)}`,
    marginTop: 0,
    border: `1px solid ${theme.palette.border.base}`,

  },
  loginBtn: {
    padding: `${theme.spacing(0.7)} ${theme.spacing(1.6)}`,
    borderRadius: '8px',
    color: theme.palette.common.white,
    fontWeight: 600,
  },
}));
