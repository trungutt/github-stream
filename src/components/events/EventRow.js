import React, { PropTypes } from 'react';
import { formatDate } from '../../utils/utils';

const EventRow = ({event}) => {
    return (
        <tr>
            <td>{event.id}</td>
            <td>{event.type}</td>
            <td>{event.actor.id}</td>
            <td>{formatDate(event.created_at)}</td>
        </tr>
    );
};

EventRow.propTypes = {
    event: PropTypes.object.isRequired
};

export default EventRow;
