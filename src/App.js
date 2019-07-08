import React from 'react';
import './App.css';
import Contacts from './components/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';

function App() {
  return (
    <Provider>
      <div className="container">
        <Header branding="Contact Manager" />
        <AddContact />
        <Contacts />
      </div>
    </Provider>
  );
}

export default App;
