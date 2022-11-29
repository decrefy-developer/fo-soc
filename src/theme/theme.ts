import { createTheme } from '@mui/material'

export const themeLight = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#0033ad",
        },
        secondary: {
            main: "#42317d",
        },
        background: {
            paper: "#fff",
            default: "#f1f1f1"
        }

    },
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        backgroundColor: '#dbdbdb',
                        borderRadius: ".5rem"
                    },
                    '&:hover': {
                        backgroundColor: '#dbdbdb',
                        borderRadius: ".5rem"
                    }
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: 'rgb(57, 57, 57)'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: ".5rem"
                }
            }
        },
    },
})

export const themeDark = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#8108b7",
            light: "##c29afe"
        },
        secondary: {
            main: "#e1c2ff",
        },
        background: {
            paper: "#1b2129",
            default: "#0f1318"
        }
    },
    components: {
        MuiListItem: {
            styleOverrides: {
                root: {
                    borderRadius: ".5rem",
                    // '&.Mui-selected': {
                    //     backgroundColor: '#1b1f24',
                    // },
                    '&:hover': {
                        backgroundColor: 'rgba(129, 8, 183, 0.09)',
                    }
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "#1b2129",
                    backgroundImage: 'none'
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    borderRadius: ".5rem",
                    color: theme.palette.secondary.main
                })
            }
        }
    }
})
