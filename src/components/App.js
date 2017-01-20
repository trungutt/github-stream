import React, { PropTypes } from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
