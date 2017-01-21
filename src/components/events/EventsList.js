import React, { PropTypes } from 'react';
import EventRow from './EventRow';

const EventsList = ({events}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Type</th>
                    <th>Actor</th>
                    <th>Created at</th>
                </tr>
            </thead>
            <tbody>
                {events.map(event =>
                    <EventRow key={event.id} event={event} />
                )}
            </tbody>
        </table>
    );
};

EventsList.propTypes = {
    events: PropTypes.array.isRequired
};

export default EventsList;
