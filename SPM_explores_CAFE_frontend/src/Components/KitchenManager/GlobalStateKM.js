import React, {createContext, useState} from 'react'
import FoodsAPI from '../../api/FoodsAPI'


export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [token, setToken] = useState(false)
     
    // // FoodsAPI()
    // const state = {
    //     token: [token, setToken],
    //     foodsAPI: FoodsAPI()
    // }
    
    const state = {
        token: [token, setToken],
        foodsAPI: FoodsAPI()
    }
    

    return(
        <GlobalState.Provider value={state} >
            {children}
        </GlobalState.Provider>
        
    )
}