import makeStyles from '@mui/styles/makeStyles';
import { width } from '@mui/system';
import mainIcons from '../../../assets/icons/mainIcons.png'
export const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.border.base}`,
    padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
    marginBottom: theme.spacing(1),
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
    backgroundColor: '#fafafa',
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
  divider: {
    marginTop: theme.spacing(1.8),
    color: theme.palette.grey[11],
    marginBottom:theme.spacing(2),
  },
  FbLinkContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  FbLink: {
    color: theme.palette.grey[12],
    fontSize: '14px',
    fontWeight: 600,
    paddingLeft:theme.spacing(0.8)
  },
  smallIconFb:{
    height:'16px',
    width:'16px',
    backgroundSize: '440px 411px',
    backgroundPosition: '-347px -329px',
    backgroundImage:`url(${mainIcons})`,
  },
  forgotPW: {
    textAlign: 'center',
    color: theme.palette.grey[12],
    margin:`${theme.spacing(2)} 0`,
    fontSize:'12px'
  },
  SignupText:{
    color: theme.palette.text.primary,
    margin: theme.spacing(1.5),
    textAlign: 'center',
  },
  SignupLink:{
    color: theme.palette.button.primary,
    fontWeight: 600,
    fontSize: '14px',
    '&:hover': {
    color: theme.palette.button.primary,
    } 
  },
  ImageContainer:{
    display:'flex',
    justifyContent:'center'
  },
  GetImage:{
    margin: theme.spacing(0.4),
    height:'40px'
    
  }
}));
