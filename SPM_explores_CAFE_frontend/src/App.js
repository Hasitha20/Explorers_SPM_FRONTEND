 import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import SideBarManager from './Components/header/manager/SideBar'
//import UserSideBar from './components/header/user/UserSideBar'
//import Pages from './components/Pages';
import Pages from './Components/Pages'
import { DataProvider } from './Globalstate'
//import SideBarKM from './Components/Headers/KitchenManager/KMSidebar'
import './index.css'
import KMSideBar from './Components/Headers/KitchenManager/KMSidebar'
 

function App() {

  return (
    <DataProvider>
      <Router>
        <div className="App">
          {/*<UserSideBar />*/}
          {/* <SideBar/> */}
          <KMSideBar/>
          <div className="mainPages">
              <Pages />
            </div>
        </div>
      </Router>
    </DataProvider>
  );
} 
      
export default App;

