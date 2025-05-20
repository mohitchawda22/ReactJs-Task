import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider'

function ThemeSwitcher() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <div>
            <button className={`btn btn-${theme === 'light' ? 'dark' : 'light'}`} onClick={toggleTheme}> {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}</button>
        </div>
    )
}

export default ThemeSwitcher

