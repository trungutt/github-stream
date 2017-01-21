import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventsActions from '../../actions/eventsActions';
import EventsList from './EventsList';
import Loading from '../common/Loading';
import Filter from '../filter/Filter';

class EventsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {filtered, loading} = this.props;

        return (
            <div>
                {loading && <Loading interval={100} dots={20} />}
                <Filter />
                <EventsList events={filtered} />
            </div>
        );
    }
}

EventsPage.propTypes = {
    filtered: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        filtered: state.data.filtered,
        loading: state.pendingAjaxRequest > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(eventsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
