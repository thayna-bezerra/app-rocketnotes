import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import {ThemeProvider} from 'styled-components';

import { MyContext } from './myContext';

import theme from './styles/theme';

import {Routes} from './routes';

ReactDOM.createRoot(document.getElementById('root')).render( //selecionando a div e renderizando
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <MyContext.Provider value={{ email: 'thayna@gmail.com' }}>
        <Routes/>
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
