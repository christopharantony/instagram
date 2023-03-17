
export default function LoadingButton(theme) {
  return {
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          justifyContent: "space-between",
          borderRadius: theme.shape.borderRadius,
          width: "100%"
        }
      }
    }
  };
}
