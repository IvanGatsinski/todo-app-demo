import React, { Component } from "react";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";

class Item extends Component {

    render() {
        return (
            <li>
                <span>{this.props.msgCounter}.</span> {this.props.msg}
                <div className="list-item-wrapper">
                    <EditItem id={this.props.id} editItem={this.props.editItem} /> <DeleteItem id={this.props.id} removeItem={this.props.removeItem} />
                </div>
            </li>
        )
    }
}

export default Item;