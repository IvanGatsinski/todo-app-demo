import React, { Component } from "react";

class ClearList extends Component {

    render() {
        return (
                <button onClick={this.props.clearList}>
                    DELETE LIST
                </button>
        )
    }
}

export default ClearList;