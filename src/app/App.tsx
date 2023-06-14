
import { Link } from "react-router-dom"

import './styles/index.scss'

import { useTheme } from "app/providers/ThemeProvider"
import { classNames } from "shared/lib/classNames/classNames"
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { AppRouter } from "./providers/router"
import { Navbar } from "widgets/Navbar"


const App = () => {

   const {theme, toggleTheme} = useTheme()
   
    return (
        <div className={classNames('app', {}, [theme])}>
           
            <Navbar/>
            <button onClick={toggleTheme}>Toggle theme</button>
            <AppRouter/>
        </div>
    ) 
}

export default App