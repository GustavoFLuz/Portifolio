import { createTheme } from '@mui/material';
import { deepPurple, lightBlue } from '@mui/material/colors';

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#5e0883',
        },
        secondary: {
            main: '#66ff33',
        },
        background: {
            paper: '#181818',
            default: '#212121',
        },
        text: {
            primary: '#f5f5f5',
        },
    },
    typography: {
        fontFamily: 'Roboto',
        subtitle1: {
            fontFamily: 'Open Sans',
        },
        subtitle2: {
            fontFamily: 'Open Sans',
        },
        body2: {
            fontFamily: 'Open Sans',
        },
        body1: {
            fontFamily: 'Open Sans',
        },
        button: {
            fontFamily: 'Open Sans',
        },
        caption: {
            fontFamily: 'Open Sans',
        },
        overline: {
            fontFamily: 'Open Sans',
        },
    },
});
