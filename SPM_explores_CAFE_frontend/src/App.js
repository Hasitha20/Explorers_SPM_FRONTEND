import React from 'react'
import CashierSideBar from './Components/Headers/cashier/CashierSideBar'
import {BrowserRouter as Router} from 'react-router-dom'
import Pages from './Components/Pages';

function App() {
  return (
    <Router>
      <div className="App">
        <CashierSideBar/>
        <div className="mainPages"><Pages /></div>
      </div>
    </Router>
  );
} 
      
export default App;
