//React Dependancies
import React from 'react';
import ReactDOM from 'react-dom';
import { 
    Router, 
    Route,
    Switch
} from 'react-router-dom';
import history from './history';

//Redux Dependancies
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//Components
import AppCert from './components/App_Cert';
import AppNew from './components/App_New'
import Home from './components/Home';
import SignUpForm from './components/auth/signup';
import reducers from './reducers';

//Style Sheets
import './style/style.css';

//Other
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard/new" component={AppNew} />
                <Route path="/dashboard" component={AppCert} />
                <Route path="/signup" component={SignUpForm} />
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
