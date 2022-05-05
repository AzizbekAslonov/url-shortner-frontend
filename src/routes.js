import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LinksPage } from './pages/LinksPage.jsx'
import { CreatePage } from './pages/CreatePage.jsx'
import { AboutPage } from './pages/About.jsx'
import { DetailPage } from './pages/DetailPage.jsx'
import { AuthPage } from './pages/AuthPage.jsx'
import { Navbar } from './components/Navbar'

export const useRoutes = (isAuthenticated) => {
    return (
        <Switch>
            {isAuthenticated ?
                <>
                    <Navbar />
                    <div className="container">
                        <Route path='/links' component={LinksPage} />
                        <Route path='/detail/:id' component={DetailPage} />
                        <Route path='/create' component={CreatePage} />
                        <Route path='/' exact component={AboutPage} />
                    </div>
                </> :
                <>
                    <Route path='/' component={AuthPage} />
                    <Redirect to='/' />
                </>
            }
        </Switch>
    )
}
