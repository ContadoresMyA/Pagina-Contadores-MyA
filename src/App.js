import '../node_modules/bootstrap/scss/bootstrap.scss';
import './index.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/shared/header';
import Inicio from './components/home';
import empresa from './components/business';
import contacto from './components/contact';
import servicios from './components/catalogue';
import Footer from './components/shared/footer';

function App() {
  const pads={
    contactPad:'/contact',
    businessPad:"/business",
    cataloguePad:'/catalogue'
  }
  return (
    <div className="App">
      <div>
        <div className="col">
          <Router>
            <Navbar />
            <Switch>
              <Route path='/' exact component={Inicio} >
                <Inicio/>
              </Route>
              <Route path= {pads.businessPad} component={empresa} />
              <Route path= {pads.contactPad}component={contacto} />
              <Route path= {pads.cataloguePad}component={servicios} />
            </Switch>
          </Router>
          <br/>
          <Footer />
        </div>
      </div>
    </div>

  );

}



export default App;
