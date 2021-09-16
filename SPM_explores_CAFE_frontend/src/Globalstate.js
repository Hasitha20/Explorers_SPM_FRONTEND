import React, {createContext, useState, useEffect} from 'react'
import CategoryAPI_Manager from './api/managerAPI/CategoryAPI'
import EmployeeAPI from './api/managerAPI/EmployeeAPI'
import FoodsAPI_Manager from './api/managerAPI/FoodsAPI'
import MessageAPI from './api/managerAPI/MessageAPI'
import CustomerAPI_Manager from './api/managerAPI/CustomerAPI'
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
        categoryAPI: CategoryAPI_Manager(),
        foodsAPI: FoodsAPI_Manager(),
        messageAPI: MessageAPI(),
        customerAPI_Manager: CustomerAPI_Manager(),
        employeeAPI: EmployeeAPI(token)
    }
    
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}