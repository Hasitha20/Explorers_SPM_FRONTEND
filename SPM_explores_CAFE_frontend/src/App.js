import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {DataProvider} from './GlobalState'
import Header from './components/cashier/Headers/Header.jsx';
import Sidebar from './components/cashier/sidebar/Sidebar';
import CSHome from './components/cashier/Dashboard/CSHome';
import './App.css'
function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header/>
            <div className="container">
              <Sidebar/>
              <CSHome/>
            </div>
        </div>
      </Router>
    </DataProvider>
  );
} 
      
export default App;
