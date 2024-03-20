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
        fontFamily: "Helvetica, Arial, sans-serif", // Change this to your desired font family
    },
    // Add more customizations as needed
});

export default theme;
