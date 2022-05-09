import React, { createContext, ReactNode } from 'react'

interface ProgressContextProviderProps {
    children: ReactNode
}

interface ProgressContextDefault{
    lastTime: string;
    status: string;
}

const progressDefault = {
    lastTime : "9/5/2022",
    status: "In Progress",

}

export const ProgressContext = createContext<ProgressContextDefault>(progressDefault);

const ProgressContextProvider = ({children} : ProgressContextProviderProps) => {
    

    return <ProgressContext.Provider value={progressDefault}>
        {children}
    </ProgressContext.Provider>
}

export default ProgressContextProvider;