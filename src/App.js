import React from 'react';
import Header from './components/header/Header'
import Banner from './components/Banner'
import RiskDisclaimer from './components/RiskDisclaimer'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <RiskDisclaimer />
        <Header />
        <Banner />
    </div>
  );
}

export default App;
