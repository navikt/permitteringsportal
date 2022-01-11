import React from 'react';
import './App.css';
import Forside from './Forside/Forside';
import LoginProvider from './LoginProvider';

function App() {
  return (
    <LoginProvider>
      <Forside></Forside>
    </LoginProvider>
  );
}

export default App;
