import React from 'react'
import CashierSideBar from './Components/Headers/cashier/CashierSideBar'
import {BrowserRouter as Router} from 'react-router-dom'
import { DataProvider } from './GlobalState';
import Pages from './Components/Pages';
import Home from './Components/Cashier/Dashboard/Home';

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          
          <div className="mainPages"><Pages /></div>
        </div>
      </Router>
    </DataProvider>
  );
} 
      
export default App;
