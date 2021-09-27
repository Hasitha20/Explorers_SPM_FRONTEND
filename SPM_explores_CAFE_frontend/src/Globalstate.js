import React, {createContext, useState, useEffect} from 'react' 
import axios from 'axios'
import MenuAPI from './api/user/MenuAPI'
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
        employeeAPI: EmployeeAPI(token),
        menuAPI: MenuAPI(),
    }

    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}