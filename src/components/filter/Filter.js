import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventsActions from '../../actions/eventsActions';

class Filter extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onChangeDate = this.onChangeDate.bind(this);
    }

    onChangeDate() {
        const start = this.start.value;
        const end = this.end.value;
        this.props.actions.filterEvents({
            start,
            end
        });
    }

    render() {
        const {start, end} = this.props;

        return (
            <div>
                <span>
                    <label>Start</label>
                    <input name="start" placeholder="YYYY-MM-DD HH:mm:ss"
                        ref={(start) => this.start = start}
                        />
                </span>
                <span>
                    <label>End</label>
                    <input name="end" placeholder="YYYY-MM-DD HH:mm:ss"
                        ref={(end) => this.end = end}
                        />
                </span>
                <span>
                    <button onClick={this.onChangeDate}>Apply</button>
                </span>
            </div>
        );
    }
}

Filter.propTypes = {
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        events: state.data.events,
        start: state.data.start,
        end: state.data.end
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(eventsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
