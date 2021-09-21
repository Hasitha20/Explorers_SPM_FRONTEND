import React, {createContext, useState, useEffect} from "react";
import ReportsAPI from "./components/cashier/api/ReportsAPI";
import axios from 'axios'
import CSUserAPI from "./components/cashier/api/CSUserAPI";
import CSSubmitReportsAPI from "./components/cashier/api/CSSubmitReportsAPI";
import CSOrdersAPI from "./components/cashier/api/CSOrdersAPI";

export const GlobalState= createContext()


export const DataProvider = ({children}) =>{
    const [token, setToken] = useState(false)

    useEffect(()=>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () =>{
                const res = await axios.get('/csuser/refresh_token')
        
                setToken(res.data.accesstoken)
    
                setTimeout(()=>{
                    refreshToken()
    
                }, 10 * 60 * 1000)
            }
        
            refreshToken()
        }
 
    }, [])

    

    const state = {
        token: [token, setToken],
        reportsAPI: ReportsAPI(),
        csSubmitReportsAPI: CSSubmitReportsAPI(),
        csordersAPI: CSOrdersAPI(),
        csuserAPI: CSUserAPI(token) 
    }
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}