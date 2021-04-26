import React from 'react';
import './App.css';
import ROUTES, { RenderRoutes } from './routes';

function App() {
  return (
    <div className="App">
      <div style={{ flex: 0.3, backgroundColor: '#f2f2f2' }}>route menu</div>
      <div>
        <RenderRoutes routes={ROUTES} />
      </div>
    </div>
  );
}

export default App;
