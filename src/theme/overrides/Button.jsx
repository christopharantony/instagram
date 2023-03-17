
export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius
        }
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {

          },
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            bgcolor: theme.palette.grey[2],
            color: theme.palette.grey[3]
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            border: 'solid',
            borderWidth: theme.shape.outlinedBorderWidth,
            '&:hover': {
              border: 'solid',
              borderWidth: theme.shape.outlinedBorderWidth
            }
          },
        },
      ],
    }
  };
}
