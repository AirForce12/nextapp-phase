import { useEffect, useState } from 'react'

export default () => {
    const [theme, setTheme] = useState(null);
    const toggleTheme = () => {
        if (theme === 'dark') {
            // setTheme('light')
            localStorage.setItem('theme', 'light')
        } else {
            // setTheme('dark')
            localStorage.setItem('theme', 'dark')
        }
        location.reload();
    }

    useEffect(() => {
        const localTheme = localStorage.getItem('theme')
        if (localTheme) {
            setTheme(localTheme)
        } else {
            setTheme('dark');
        }
    }, [])

    return {
        theme,
        toggleTheme,
    }
}
