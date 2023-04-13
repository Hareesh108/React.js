import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { CSSReset } from "@chakra-ui/react";

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: 'black',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        {/* <CSSReset /> */}
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
