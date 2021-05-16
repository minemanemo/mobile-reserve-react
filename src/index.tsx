import React from 'react';
import { render } from 'react-dom';
import { RecoilRoot } from 'recoil'; // recoil 추가
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import GlobalProvider from './components/Global/Provider';

import reportWebVitals from './reportWebVitals';

render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          <GlobalStyle />
        </ThemeProvider>
      </GlobalProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
