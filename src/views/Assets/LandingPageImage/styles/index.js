import makeStyles from '@mui/styles/makeStyles';
import PhoneImage from '../../../../assets/img/home-phones-2x.png';
export const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${PhoneImage})`,
    backgroundSize: '468px 634px',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    width: '468px',
    height: '634px',
  },
  image: {
    width: '250px',
    position: 'absolute',
    top: '26px',
    right: '60px',
  },
}));
