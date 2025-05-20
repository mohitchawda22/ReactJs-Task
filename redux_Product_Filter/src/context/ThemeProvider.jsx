/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

function ThemeProvider({ children }) {

    const [theme, setTheme] = useState(()=>{
        return localStorage.getItem("app-theme") || "light"
    })

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const nextTheme=prevTheme==="light"?"dark":"light"
            localStorage.setItem("app-theme",nextTheme)
            return nextTheme
        })
    }

    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div className={theme === "light" ? "light" : "dark"}>
                    {children}
                </div>
            </ThemeContext.Provider>
        </>
    )
}

export default ThemeProvider
