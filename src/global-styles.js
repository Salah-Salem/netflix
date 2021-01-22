import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle `
    html, body {
        font-family: sans-serif;
        // font-faimly: 'sans-serif','Helvetica Neue', Helvetica, Arial ;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: greyscale;
        background-color: black;
        color: #333333; 
        font-size: 16px;
    }

`;