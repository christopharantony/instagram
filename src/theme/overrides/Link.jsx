export default function Link(theme) {
    return {
        MuiLink: {
        styleOverrides: {
          root: {
            cursor: "pointer",
            '&:hover': {
              color: theme.palette.common.black,
           }
          }
        },
      },
    };
  }
  