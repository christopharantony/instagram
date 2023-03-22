export default function Link(theme) {
    return {
        MuiLink: {
        styleOverrides: {
          root: {
            cursor: "pointer",
            textDecoration:"none",
            '&:hover': {
              color: theme.palette.common.black,
           }
          }
        },
      },
    };
  }
  