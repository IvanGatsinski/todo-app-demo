import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = { value: "", id: 0, enableEdit: false }
    }

    submitInfo = (ev) => {
        ev.preventDefault();

        this.props.addListItem(this.state.value, this.state.id, this.state.enableEdit);
        this.setState({ value: "", id: Math.random(), enableEdit: false })
    }
    handleChangeInput = (ev) => {
        this.setState({ value: ev.target.value });
    }

    render() {
        return (
            <form onSubmit={this.submitInfo}>
                <label>
                    <span>Task: </span>
                    <input type="text" value={this.state.value} onChange={this.handleChangeInput} name="name" />
                </label>
                <input type="submit" value="Add To List" />
            </form>
        )
    }
}

export default Form;
