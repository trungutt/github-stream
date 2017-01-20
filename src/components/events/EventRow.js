import React, { PropTypes } from 'react';

const EventRow = ({event}) => {
    return (
        <tr>
            <td>{event.id}</td>
            <td>{event.type}</td>
            <td>{event.actor.id}</td>
        </tr>
    );
};

EventRow.propTypes = {
    event: PropTypes.object.isRequired
};

export default EventRow;
