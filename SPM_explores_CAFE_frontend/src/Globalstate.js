 
import axios from 'axios'

import MenuAPI from './Components/mainPages/user/api/MenuAPI'
// import UserAPI from './api/UserAPI'

 
import React, {createContext, useState, useEffect} from 'react'
import CategoryAPI from './api/managerAPI/CategoryAPI'
import EmployeeAPI from './api/managerAPI/EmployeeAPI'

 

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [token, setToken] = useState(false)

 
    const refreshToken = async () =>{
        const res = await axios.get('/user/refresh_token')

        // console.log(token)
        setToken(res.data.accesstoken)
    }

    useEffect(() =>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin) refreshToken()
    },[])


    
    const state = {
        token: [token, setToken],
        menuAPI: MenuAPI(),
        // userAPI: UserAPI(token)
        categoryAPI: CategoryAPI(),
        employeeAPI: EmployeeAPI(token)
    }

 
    // useEffect(() => {
    //     const firstLogin = localStorage.getItem('firstLogin')
    //     if(firstLogin){
    //         const refreshToken = async () => {
    //             const res = await axios.get('/emp/refresh_token')
        
    //             setToken(res.data.accesstoken)
    //         }
    //         refreshToken()
    //     }
        
    // }, [])

    

    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}