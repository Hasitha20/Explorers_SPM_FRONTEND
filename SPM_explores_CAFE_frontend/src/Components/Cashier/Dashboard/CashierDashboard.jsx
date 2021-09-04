import React from "react";
import './CashierDashboard.css';
import './featuredInfo/FeaturedInfo';
import FeaturedInfo from './featuredInfo/FeaturedInfo';
import Charts from './Charts/Charts';
import {userData} from "./DummyData";
import WidgetSm from './Widgets/WidgetSm/WidgetSm';
import WidgetLg from './Widgets/WidgetLg/WidgetLg';
function CashierDashboard (){

    
    return (
       
        <div className="home">
            
            <FeaturedInfo/>
            <Charts data={userData} title="Revenue Analytics" grid dataKey="Revenue"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
           {/*  <Grid>
                <div className="grid-container2">
                    <div className="grid-item1">
                        <div className="table1-topic">
                            <h2>Top Products</h2>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                <th></th>
                                <th>Product Name</th>
                                <th>Units Per Price</th>      
                                <th>Category</th>  
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        products.map(item =>(
                                            <tr key={item._id}>
                                                <td><img src={item.images.url} alt=""/></td>
                                                <td>{item.name}</td>
                                                <td>{item.price}</td>
                                                <td>{item.category}</td>
                                            </tr>
                                        ))
                                    
                                    }
                            </tbody>
                        </table>
                    </div>
                    <div className="grid-item2">
                        <div className="table2-topic">
                            <h2>Top Customers</h2>
                        </div>
                        <table>
                                <thead>
                                    <tr>
                                    <th>Customer Name</th>
                                    <th>Email</th>      
                                    </tr>
                                </thead>
                                        {
                                            users.map(item =>(
                                                <tr key={item._id}>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                
                                                </tr>
                                            ))
                                        
                                        }
                    
                        </table>
                    </div>
                </div> 
            </Grid> */}
        </div>
    );
}

export default CashierDashboard;
/*
     <div className="grid-container">
                    <div className="grid-item">
                        <Chart
                            width={'250px'}
                            height={'250px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Task', 'Hours per Day'],
                                ['Top', 3],
                                ['Oldest', 7]
                                
                            ]}
                            options={{
                                // Just add this option
                                pieHole: 0.4,
                                title: 'Customers',
                                fontSize: 25,
                                backgroundColor: '#ddd'
                            }}
                            
                            rootProps={{ 'data-testid': '3' }}
                        />
                        
                    </div>
                    <div className="grid-item">
                        <Chart
                            width={'250px'}
                            height={'250px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Task', 'Hours per Day'],
                                ['Income', 10],
                                ['Budget', 90]
                            ]}
                            options={{
                                // Just add this option
                                pieHole: 0.4,
                                title: "Revenue",
                                fontSize: 25,
                                backgroundColor: '#ddd'
                            }}
                            rootProps={{ 'data-testid': '3' }}
                        />
                    </div>
                    <div className="grid-item">
                        <Chart
                            width={'250px'}
                            height={'250px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Task', 'Hours per Day'],
                                ['Completed', 2],
                                ['Canceled', 8]
                            ]}
                            options={{
                                // Just add this option
                                pieHole: 0.4,
                                title: "Orders",
                                fontSize: 25,
                                backgroundColor: '#ddd'
                            }}
                            rootProps={{ 'data-testid': '3' }}
                        />
                    </div>
                </div>
            </Grid> 
*/
