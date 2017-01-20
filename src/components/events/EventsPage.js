import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventsActions from '../../actions/eventsActions';
import EventsList from './EventsList';

class EventsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            event: {
                title: ""
            }
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(ev) {
        const event = this.state.event;
        console.log('event = ', JSON.stringify(event, null, 5));
        console.log('ev.target.value = ', JSON.stringify(ev.target.value, null, 5));
        console.log('this.props.actions = ', JSON.stringify(this.props.actions, null, 5));
        event.title = ev.target.value;

    }

    render() {
        const {events} = this.props;

        return (
            <div>
                <h1>GitHub Events</h1>
                <input
                    type="text"
                    onChange={this.onChange}
                    value={this.state.event.title}
                    />
                <EventsList events={events} />
            </div>
        );
    }
}

EventsPage.propTypes = {
    events: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        events: state.events
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(eventsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
