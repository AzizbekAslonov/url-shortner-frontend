import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// additions
import { AuthContext } from './context/AuthContext'
import { AlertContext } from './context/AlertContext'
import { useRoutes } from './routes'
import { useAuth } from './hooks/auth.hook'
import { useAlert } from './hooks/alert.hook'
// components & styles
import { Loader } from './components/Loader'
import { Alert } from './components/Alert'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const { token, login, logout, user, ready } = useAuth()
  const { alert, show, hide } = useAlert()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if (!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{
      token, login, logout, user, isAuthenticated
    }}>
      <AlertContext.Provider value={{ alert, show, hide }}>
        <Router>
          <Alert />
          {routes}
        </Router>
      </AlertContext.Provider>
    </AuthContext.Provider>
  )
}

export default App