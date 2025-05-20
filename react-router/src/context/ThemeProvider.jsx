import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

function ThemeProvider({children}) {

    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        console.log("hello world");
        
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    }

    useEffect(()=>{
        document.body.className=""
        document.body.classList.add=(`${theme}`)
    })

    return (
        <>
            <ThemeContext.Provider value={{theme,toggleTheme}}>
                <div className={theme === "light" ? "light" : "dark"}>
                    {children}
                </div>
            </ThemeContext.Provider>
        </>
    )
}

export default ThemeProvider
