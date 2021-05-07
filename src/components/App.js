import './../App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
// import Control from './Control';
import Resume from './Resume';
import ContactForm from './ContactForm';
import Projects from './Projects';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <section id="main-background">
        <Control />
      </section> */}
      {/* <Control /> */}
      <Switch>
        <Route path='/resume' component={Resume}/>
        <Route path='/contact' component={ContactForm}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/' component={Main}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;