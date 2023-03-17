export default function Input(theme) {
  return {
    MuiInputBase: {
      styleOverrides: {

      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          // lineHieght: 1.5,
          input: { textAlign: "center" }
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {

      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: 'solid',
          borderWidth: theme.shape.outlinedBorderWidth,
          borderColor: theme.palette.grey[5],
          '& .MuiOutlinedInput-input': {
            padding: theme.shape.outlinedInputPadding
          },
          '&:hover': {
            border: 'solid',
            borderWidth: theme.shape.outlinedBorderWidth,
            borderColor: theme.palette.grey[5],
          }
        }
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.grey[4],
        }
      }
    }
  };
}
