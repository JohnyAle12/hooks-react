import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage } from './AboutPage'
import { UserProvider } from './context/UserProvider'
import { HomeApp } from './HomeApp'
import { Login } from './Login'
import { NavBar } from './NavBar'

export const MainApp = () => {
  return (
    <UserProvider>
        <NavBar />
        <hr/>
        <Routes>
            <Route path='/' element={ <HomeApp /> } />
            <Route path='login' element={ <Login /> } />
            <Route path='about' element={ <AboutPage /> } />
            <Route path='home' element={ <HomeApp /> } />
            <Route path='/*' element={ <Navigate to="/about" /> } />
        </Routes>
    </UserProvider>
  )
}
