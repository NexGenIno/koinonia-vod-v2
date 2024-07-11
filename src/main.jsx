import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useItems, ItemsProvider } from './ItemsContext.jsx';

import { store } from './store/store'
import { Provider } from 'react-redux'



const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      // main: '#9f861b',
      main: 'rgb(205,130,45,100)',
    },
    background: {
      main: '#000000',
      paper: '#f7f7f7',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    
    <Provider store={store}>
    <CssBaseline />
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    
      <App />
    
    </ThemeProvider>
    
    </BrowserRouter>
    </Provider>

    </>
  
)
