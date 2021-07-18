import { ThemeProvider } from '@material-ui/styles';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ROUTES, { RenderRoutes } from './routes';
import Footer from './ui/Footer';
import Header from './ui/Header';
import theme from './ui/Theme';

function App() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [value, setValue] = useState<number>(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <RenderRoutes routes={ROUTES} />
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
