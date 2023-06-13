import { FC, ReactNode, useMemo, useState } from "react"

import { LOCAL_STORE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"

const defaultTheme = localStorage.getItem(LOCAL_STORE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC<{children?: ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>

    )
        
}

export default ThemeProvider