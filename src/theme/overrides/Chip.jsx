const Chip = (theme) => {
    return {
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.primary.light,
                    '&:hover': {
                        backgroundColor: theme.palette.primary.light
                    }
                }
            }
        }
    };
}
export default Chip