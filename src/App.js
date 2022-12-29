import '../node_modules/bootstrap/scss/bootstrap.scss';
import './index.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom'
import Navbar from './components/shared/header';
import Footer from './components/shared/footer';
import Home from './components/home';
import Business from './components/business';
import Contact from './components/contact';
import Catalogue from './components/catalogue';

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
            <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/business" element={<Business/>}/>
          <Route path="/catalogue" element={<Catalogue/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
          </Router>
          <br/>
          <Footer />
        </div>
      </div>
    </div>

  );

}



export default App;
