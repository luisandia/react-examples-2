import { ThemeProvider } from '@material-ui/styles';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ROUTES, { RenderRoutes } from './routes';
import Header from './ui/Header';
import theme from './ui/Theme';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

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
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
