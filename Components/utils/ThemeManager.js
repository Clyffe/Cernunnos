import React, { createContext, useState } from "react"; 

import { current } from "../Styles/themes";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) =>{
    //light, dark

    const light = {
        background: '#f5f5f5',
        accent: 'rgba(175, 47, 47, .5)',
        text: '#333333',
        seperator: '#E2E2E2',
        card: '#e8e8e8'
    }
    
    const dark = {
        background: '#121212',
        accent: '#351c75',
        text: '#16537e',
        seperator: '#20124d',
        card: '#12234d'
    }
    

    const[theme, setTheme] = React.useState(light);

    const toggleTheme = () =>{
        if(theme === light){
            setTheme(dark);

        }
        else{
            setTheme(light);
        }
    }

    const currentTheme = theme


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
    )
}
