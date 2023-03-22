import makeStyles from '@mui/styles/makeStyles';
export const useStyles = makeStyles((theme) => ({
  container:{
    height:"100vh",
    width:"100vw",
    display:'flex',
  flexDirection:"column",
  justifyContent: "space-between"
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: "19px",
    paddingBottom: "12px",
    borderBottom: "1px solid #dbdbdb"
  },
  instagramImage: {
    width: '103px',

  },
  btnContainer: {
    width: "153px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  loginBtn: {
    padding: `${theme.spacing(0.7)} ${theme.spacing(1.6)}`,
    borderRadius: "8px",
    color: theme.palette.common.white,
    fontWeight: 600

  },
  signUpBtn: {
    fontWeight: 600,
    '&:hover':{
    color:theme.palette.primary.main,
    opacity:0.5
    }
  },
  navInput: {

    '& .MuiFilledInput-input': {
      padding: '3px 16px',
      height: '30px',

    },
    '& .Mui-focused': {
      '& .MuiInputAdornment-root': {
        display: 'none',
      },
    },
    '& .MuiInputBase-root': {
      borderRadius: "8px",
    }
  },
  contentBox: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'center',
  },

  desc: {
    margin: `${theme.spacing(4)} 0 ${theme.spacing(2)}`,
    fontSize: "20px",
  },
  link:{
    color:'#00376b'
  },
  footer:{
   
  },
  footerItems:{
    display:"flex",
    justifyContent:"center",
    color:'rgb(142 142 142)'

  },
  footerItemLink:{
    marginRight:"15px",
    color:'rgb(142 142 142)'

  }
}));
