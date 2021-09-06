import React from 'react' 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Pages from './Components/KitchenManager/Pages';
import SideBarKM from './Components/Headers/KitchenManager/KMSidebar'
import './index.css'
import {DataProvider} from './Components/KitchenManager/GlobalStateKM'


function App() {

  return (
    <DataProvider>
    <Router>
      <div className="App">                 
        <SideBarKM />
        <div className="mainPages">
          <Pages />
        </div>        
      </div>
    </Router>
    </DataProvider>
  );
} 
      
export default App;

