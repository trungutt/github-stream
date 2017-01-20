import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import EventsPage from './components/events/EventsPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={EventsPage} />
    </Route>
);
