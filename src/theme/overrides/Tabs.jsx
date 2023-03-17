const Tabs = theme => {
    return {
        MuiTabs: {
            styleOverrides: {
                root: {
                    "& .MuiTabs-indicator": {
                        display: "none"
                    },
                    "& .Mui-selected": {
                        border: 'solid',
                        borderRadius: theme.shape.roundButtonRadius
                    },
                    "& .MuiTouchRipple-root": {
                        borderRadius: theme.shape.roundButtonRadius
                    },
                    "& .css-80b1dc-MuiButtonBase-root-MuiTab-root": {
                        maxHeight: theme.shape.outlinedTabHeight,
                        minHeight: theme.shape.outlinedTabHeight,
                        padding: 0
                    }
                }
            }   
        }
    }
}

export default Tabs;