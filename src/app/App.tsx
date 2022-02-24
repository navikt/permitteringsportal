import React from 'react';
import './App.css';
import "@navikt/ds-css"
import Forside from './Forside/Forside';
import LoginProvider from './LoginProvider';
import { OrganisasjonsProvider } from './OrganisasjonsProvider';

function App() {
  return (
    <LoginProvider>
      <OrganisasjonsProvider>
        <Forside></Forside>
      </OrganisasjonsProvider>
    </LoginProvider>
  );
}

export default App;
