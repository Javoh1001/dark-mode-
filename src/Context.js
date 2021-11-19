import React,{useState,createContext} from 'react';

export const ThemeContext = createContext();

const Context = ({children}) => {
    const [theme,setTheme] = useState({
        icon:'black',
        title:'black',
        background:'white',
    })
    return (
        <ThemeContext.Provider value={[theme,setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}

export default Context
