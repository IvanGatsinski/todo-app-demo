import React, { Component } from "react";
import Form from "./Form";
import EditForm from "./EditForm";
import Item from "./Item";
import ClearList from "./ClearList";

class List extends Component {

    constructor(props) {
        super(props)

        this.state = { todoList: [] }
    }

    addListItem = (listItem, id, enableEdit) => {
        let newList = this.state.todoList

        let regEx = /^$|\s+/g;
        let wordIsValid = regEx.test(listItem)

        if (!wordIsValid) {
            newList.push({ id: id, listItem: listItem, enableEdit: enableEdit })

            this.setState({ todoList: newList })
        }
    }
    editItem = (id) => {
        let oldList = this.state.todoList;

        oldList.map((item) => {
            if (item.id === id) {
                if (!item.enableEdit) {

                    item.enableEdit = true;
                    return;
                }
            }
        })
        this.setState({ todoList: oldList })
    }
    saveEdittedItem = (listItem, id) => {
        let oldList = this.state.todoList;

        let regEx = /^$|\s+/g;
        let wordIsValid = regEx.test(listItem)

        if (!wordIsValid) {
            oldList.map((item) => {
                if (item.id === id) {
                    if (item.enableEdit) {

                        item.listItem = listItem;
                        item.enableEdit = false;
                        return;
                    }
                }
            })
        }

        this.setState({ todoList: oldList })
    }
    cancelUpdate = (id) => {
        let oldList = this.state.todoList;

        oldList.map((item) => {
            if (item.id === id) {
                if (item.enableEdit) {

                    item.enableEdit = false;
                    return;
                }
            }
        })

        this.setState({ todoList: oldList })
    }
    clearList = (ev) => {
        ev.preventDefault();

        this.setState({ todoList: [] })
    }
    removeItem = (id) => {
        let oldList = this.state.todoList;
        let newList = [];

        oldList.forEach((item) => { if (item.id !== id) newList.push(item) })

        this.setState({ todoList: newList })
    }
    render() {

        return (
            <div>
                <Form addListItem={this.addListItem} /><ClearList clearList={this.clearList} />
                <h1>Tasks</h1>
                <ul>
                    {this.state.todoList.map((itemList, index) => {
                        if (itemList.enableEdit) {
                            return <EditForm saveEdittedItem={this.saveEdittedItem} key={itemList.id} msgCounter={index + 1}  id={itemList.id} cancelUpdate={this.cancelUpdate} />
                        }
                        else {
                            return <Item key={itemList.id} msgCounter={index + 1} id={itemList.id} msg={itemList.listItem} editItem={this.editItem} removeItem={this.removeItem} />
                        }
                    })}
                </ul>
            </div>
        )
    }
}

export default List;