import React from 'react';
import './App.css';
import Contacts from './components/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';
import About from './components/pages/About';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Provider>
      <Router>
      <div className="container">
        <Header branding="Contact Manager" />
         <div class="container">
           <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
           </Switch>
         </div>
    
      </div>
      </Router>
    </Provider>
  );
}

export default App;
