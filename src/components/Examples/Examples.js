import React from "react";

class Examples extends React.Component {

    render() {
        const str = 'some text';
        return (
            <div>
                <h2>
                    Examples
                </h2>
                <div>{str}</div>
                <div>{str}</div>
                <div>{str}</div>

            </div>
        )
    }
}

export default Examples;