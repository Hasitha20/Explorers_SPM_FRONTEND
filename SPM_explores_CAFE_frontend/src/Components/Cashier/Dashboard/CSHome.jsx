import React from 'react'
import FeaturedInfo from '../featuredInfo/FeaturedInfo';
import './CSHome.css';
import Charts from '../Charts/Charts';
import WidgetSm from '../Widgets/WidgetSm/WidgetSm';
import WidgetLg from '../Widgets/WidgetLg/WidgetLg';
import {revenueData} from './DummyData';
function CSHome() {
    return (
        <div className="cshome">
            <FeaturedInfo/>
            <Charts data={revenueData} title="Revenue Analytics" grid dataKey="Revenue"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}

export default CSHome
