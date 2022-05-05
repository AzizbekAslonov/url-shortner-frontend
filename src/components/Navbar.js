import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
   const { logout } = useContext(AuthContext)
   const history = useHistory()

   const logoutHandler = (e) => {
      e.preventDefault()
      logout()
      history.push('/')
   }
   return (
      <nav className="navbar navbar-dark bg-primary py-3">
         <div className="container">
            <a className="navbar-brand" href="/">Reference</a>
            <ul className="navbar-nav flex-row">
               <li className="nav-item mx-2 mx-md-4">
                  <NavLink className="nav-link" to='/create'>Yangi</NavLink>
               </li>
               <li className="nav-item mx-2 mx-md-4">
                  <NavLink className="nav-link" to='/links'>Havolalar</NavLink>
               </li>
               <li className="nav-item mx-2 mx-md-4">
                  <NavLink className="nav-link" to='/' exact>About</NavLink>
               </li>
               <li className="nav-item mx-2 mx-md-4">
                  <a className="nav-link" onClick={logoutHandler} href='/'>Chiqish</a>
               </li>
            </ul>
         </div>
      </nav>
   )
}