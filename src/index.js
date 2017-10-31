//React Dependancies
import React from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router, 
    Route,
    Switch
} from 'react-router-dom';

//Redux Dependancies
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//Components
import AppCert from './components/App_Cert';
import AppNew from './components/App_New'
import Home from './components/Home';
import reducers from './reducers';

//Style Sheets
import './style/style.css';

//Other
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard/new" component={AppNew} />
                <Route path="/dashboard" component={AppCert} />
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
