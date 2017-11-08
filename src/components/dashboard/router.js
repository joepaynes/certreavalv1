import React from 'react'
import { Switch, Route } from 'react-router-dom'

//Components
import CertTable from './cert_table';
import NewCertForm from '../forms/new_certificate/root_form';


// The Roster component matches one of two different routes
// depending on the full pathname
const Dashboard = () => (
  <Switch>
    <Route exact path='/dashboard' component={CertTable}/>
    <Route path='/dashboard/new' component={NewCertForm}/>
  </Switch>
)


export default Dashboard