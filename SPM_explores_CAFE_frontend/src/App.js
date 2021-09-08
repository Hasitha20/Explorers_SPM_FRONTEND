 import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import SideBar from './components/header/manager/SideBar';
import Pages from './components/Pages';
import { DataProvider } from './Globalstate'

 

function App() {

  return (
    <DataProvider>
      <Router>
        <div className="App">
           <SideBar/>
          <div className="mainPages">
              <Pages />
            </div>
        </div>
      </Router>
    </DataProvider>
  );
} 
      
export default App;

