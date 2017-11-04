//React Dependancies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from './history';

//Redux Dependancies
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
//Components
import App from './components/App';
//Style Sheets
import './style/style.css';

//Other
import registerServiceWorker from './registerServiceWorker';

//Returning user
import { AUTH_USER } from './actions/types';
import { auth } from './firebase/firebase';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

auth.onAuthStateChanged(user => {
    if(user) {
        store.dispatch({ type: AUTH_USER });
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
