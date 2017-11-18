import React from 'react'
import { Switch, Route } from 'react-router-dom'

//Components
import Home from './home/Home';
import Dashboard from './dashboard/router';
import SignOut from './auth/signout';

//Auth
import RequireAuth from './auth/require_auth';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/signout' component={SignOut} />
      <Route path='/dashboard' component={RequireAuth(Dashboard)}/>
    </Switch>
  </main>
)

export default Main;