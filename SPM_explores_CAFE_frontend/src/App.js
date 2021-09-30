import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {DataProvider} from './GlobalState'
import Header from './Components/cashier/Headers/Header'
import Sidebar from './Components/cashier/sidebar/Sidebar';

import './App.css'
import Pages from './Components/Pages/Pages';
function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header/>
            <div className="container">
              <Sidebar/>
              <Pages/>
            </div>
        </div>
      </Router>
    </DataProvider>
  );
} 
      
export default App;
