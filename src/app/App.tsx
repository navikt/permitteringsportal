import React from 'react';
import './App.css';
import "@navikt/ds-css"
import Forside from './Forside/Forside';
import LoginProvider from './LoginProvider';
import { OrganisasjonsProvider } from './OrganisasjonsProvider';

function App() {
  return (
    <div className="app">
      <LoginProvider>
        <OrganisasjonsProvider>
          <Forside></Forside>
        </OrganisasjonsProvider>
      </LoginProvider>
    </div>
  );
}

export default App;
