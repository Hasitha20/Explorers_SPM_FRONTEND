import React from 'react'
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"
import './FeaturedInfo.css';
function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Customers</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">35</span>
                    <span className="featuredMoneyRate">
                        -10.4<ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2415</span>
                    <span className="featuredMoneyRate">
                        -9.4<ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Orders</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">75</span>
                    <span className="featuredMoneyRate">
                        +15<ArrowUpward className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            
        </div>
    )
}

export default FeaturedInfo
