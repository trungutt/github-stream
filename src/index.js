import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import {loadEvents} from './actions/eventsActions';

const store = configureStore();
store.dispatch(loadEvents());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
