import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import {ThemeProvider} from 'styled-components';

import { AuthProvider } from './hooks/auth';

import theme from './styles/theme';

import {Routes} from './routes';

ReactDOM.createRoot(document.getElementById('root')).render( //selecionando a div e renderizando
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
