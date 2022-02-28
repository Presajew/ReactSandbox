import React from "react";

// be sure to always call super(props) in constructor for 
// react components as they all inherit from a parent class

class ConsoleLoggingButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }
    
    render() {
        return (
            <div>
                <label>
                    Number of clicks on this button: {this.state.value}
                </label>
                <br/>
                <button
                    className="buttonTest"
                    onClick={ () => this.setState(
                        (previousState, props) => ({ value: previousState.value + 1 })
                    ) }
                    >{this.props.name}
                </button>
            </div>
        );
    }
}

export default ConsoleLoggingButton;