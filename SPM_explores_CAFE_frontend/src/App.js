 
import React from 'react'

import './index.css'
// import SideBar from './components/header/manager/SideBar';
import UserSideBar from './Components/header/user/UserSideBar'
import Pages from './Components/Pages';
import { DataProvider } from './Globalstate'
 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import Pages from './Components/KitchenManager/Pages';
import SideBarKM from './Components/Headers/KitchenManager/KMSidebar'
import './index.css'
// import {DataProvider} from './Components/KitchenManager/GlobalStateKM'

 

function App() {

  return (
    <DataProvider>
 
      <Router>
        <div className="App">
 
          <UserSideBar />
          {/* <SideBar/> */}
 
          <div className="mainPages">
              <Pages />
            </div>
        </div>
      </Router>
 
 
 
    </DataProvider>
  );
} 
      
export default App;

