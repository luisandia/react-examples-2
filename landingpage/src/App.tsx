import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import ROUTES, { RenderRoutes } from './routes';
import Header from './ui/Header';
import theme from './ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <Header />
          <RenderRoutes routes={ROUTES} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
