import React, { Component } from "react";

class EditForm extends Component {
    constructor(props) {
        super(props)

        this.state = { value: "", id: this.props.id };
    }

    cancelUpdate = (ev) => {
        ev.preventDefault()

        this.props.cancelUpdate(this.state.id);
    }
    submitEdittedItem = (ev) => {
        ev.preventDefault()

        this.props.saveEdittedItem(this.state.value, this.state.id)
    }
    handleChangeInput = (ev) => {
        this.setState({ value: ev.target.value });
    }
    render() {
        return (
            <li className="edit-field">
            <span>{this.props.msgCounter}.</span>
                <form onSubmit={this.submitEdittedItem}>
                    <label>
                        <input type="text" value={this.state.value} onChange={this.handleChangeInput} placeholder="Enter your new text here..." name="name" />
                    </label>
                    <input type="submit" value="Save Changes" />
                    <button onClick={this.cancelUpdate}>CANCEL</button>
                </form>
            </li>
        )
    }
}

export default EditForm;