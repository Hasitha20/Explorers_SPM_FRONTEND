import React, {createContext, useState, useEffect} from 'react'
import CategoryAPI from './api/managerAPI/CategoryAPI'
import EmployeeAPI from './api/managerAPI/EmployeeAPI'
import FoodsAPI from './api/managerAPI/FoodsAPI'
import MessageAPI from './api/managerAPI/MessageAPI'
import axios from 'axios'

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [token, setToken] = useState(false)

    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () => {
                const res = await axios.get('/emp/refresh_token')
        
                setToken(res.data.accesstoken)
            }
            refreshToken()
        }
        
    }, [])

    const state = {
        token: [token, setToken],
        categoryAPI: CategoryAPI(),
        foodsAPI: FoodsAPI(),
        messageAPI: MessageAPI(),
        employeeAPI: EmployeeAPI(token)
    }
    
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}