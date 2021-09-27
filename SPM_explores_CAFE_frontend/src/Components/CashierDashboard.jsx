import React from 'react'
import Sidebar from './cashier/sidebar/Sidebar'
import Pages from './Pages/Pages'

function CashierDashboard() {
    return (
        <div>
              <div className="container">
              <Sidebar/>
              <Pages/>
            </div>
        </div>
    )
}

export default CashierDashboard
