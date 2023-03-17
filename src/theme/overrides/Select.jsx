const Select = (theme) => {
    return {
        MuiSelect: {
            styleOverrides: {
                root: {
                    "& .MuiSvgIcon-root": { color: theme.palette.primary.arrow }
                }
            }
        }
    };
}
export default Select