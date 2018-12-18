import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Header from './Header'
import Footer from './Footer'
class App extends Component {
  render() {
    return (
      
      <div>
        <Header/>
        <Header currentUser="Ake" isLoggedIn = {true}/>
        <div> Hello   </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
