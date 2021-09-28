
import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function OrderFilters() {

    const state = useContext(GlobalState)
  

    
    const [sort, setSort] = state.csordersAPI.sort
    const [search, setSearch] = state.csordersAPI.search

  
    return (
        <div className="filter_menu">
            
            <input type="text" value={search} placeholder="Enter your search!" onChange={e => setSearch(e.target.value.toLowerCase())}/>
            
            <div className="row">
                <span>Sort By: </span>
                <select  value={sort} onChange={e => setSort(e.target.value)}>
                    <option value='' >Newest</option>
                    <option value='sort=oldest' >Oldest</option>
                    <option value='sort=-totalPrice' >Price:High-Low</option>
                    <option value='sort=+totalPrice' >Price:Low-High</option>
                    
                </select>
            </div>
        
        </div>
    )
}

export default OrderFilters
