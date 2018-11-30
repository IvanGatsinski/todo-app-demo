import React, { Component } from "react";

class EditItem extends Component {
    constructor(props) {
        super(props)

        this.state = { id: this.props.id};
    }
    editItem = (ev) => {
        ev.preventDefault();
        this.props.editItem(this.state.id);
    }
    
    render() {
        return (
            <button className="list-item-btn" onClick={this.editItem}>EDIT</button>
        )
    }
}

export default EditItem;