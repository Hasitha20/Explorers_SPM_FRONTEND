import React, {createContext} from 'react'

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    return(
        <GlobalState.Provider value={"value in GlobalState"}>
            {children}
        </GlobalState.Provider>
    )
}