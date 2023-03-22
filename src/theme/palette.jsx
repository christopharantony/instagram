import { alpha } from '@mui/material/styles';

const GREY = {
  0: '#FFFFFF',
  1: '#a7a7a7',
  2: '#ececec',
  3: '#757575',
  4: '#7e7e7e',
  5: '#d6d6d6',
  6: '#575555',
  7: '#b4b4b4',
  8: '#b5b5b5',
  9: '#564f4f',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
};

const primary = {
  main: '#4cb5f9',
  light: '#ffe4e2',
  arrow: '#d6313a',
};

const secondary = {
  main: '#ececec',
};
const info = {
  main: '#1890FF',
  contrastText: '#fff',
};
const success = {
  main: '#05DC68',
  lightGreen: '#1FEE7E',

  contrastText: GREY[800],
};

const warning = {
  main: '#FFC107',
  contrastText: GREY[800],
};

const error = {
  main: '#FF4842',
  contrastText: '#fff',
};

const palette = {
  common: { black: '#000', white: '#fff' },
  primary: { ...primary },
  secondary: { ...secondary },
  info: { ...info },
  success: { ...success },
  warning: { ...warning },
  error: { ...error },
  grey: GREY,
  divider: GREY[500_24],
  text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
  background: { paper: '#fff', default: GREY[100], neutral: GREY[200] },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
