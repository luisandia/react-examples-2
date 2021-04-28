import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import Header from './ui/Header';
import theme from './ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
