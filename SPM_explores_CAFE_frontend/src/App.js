import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import SideBar from './components/header/manager/SideBar';

function App() {
  return (
    <Router>
      <div>
        <SideBar/>
      </div>
    </Router>
  );
}

export default App;
