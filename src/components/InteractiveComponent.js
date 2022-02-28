import React from "react";

class ConsoleLoggingButton extends React.Component {
    render() {
        return (
            <button
                className="buttonTest"
                onClick={
                    function() {
                        console.log('SUCCESS!');
                    }
                }
                >{this.props.name}
            </button>
        );
    }
}

export default ConsoleLoggingButton;