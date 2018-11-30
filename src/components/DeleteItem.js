import React, { Component } from "react";

class DeleteItem extends Component {
    constructor(props) {
        super(props)

        this.state = { id: this.props.id };
    }
    removeItem = (ev) => {
        ev.preventDefault();
        this.props.removeItem(this.state.id);
    }
    render() {
        return (
            <button className="list-item-btn" onClick={this.removeItem}>DELETE</button>
        )
    }
}

export default DeleteItem;