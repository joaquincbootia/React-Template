import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#dc004e",
        },
    },
    typography: {
        fontFamily: "Helvetica, Arial, sans-serif",
    },
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    marginRight: 2,
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    justifyContent: "center",
                },
            },
        },
    },
});

export default theme;
