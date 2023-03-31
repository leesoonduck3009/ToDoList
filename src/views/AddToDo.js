import React from "react";
class AddToDo extends React.Component {

    state = {
        title: ''
    }
    handleOnClick = (event) => {
        let ID = Math.floor(Math.random() * 10000)
        if (!this.state.title) {
            alert('Missing title')
            return;
        }
        let ToDo = { id: ID, title: this.state.title }
        this.props.AddNewToDo(ToDo)
        this.setState({
            title: ''
        })
    }
    handleOnChange = (event) => {
        this.setState(
            {
                title: event.target.value
            }
        )
    }
    render() {
        return (
            <div className='add_todo'>
                <input type='text' value={this.state.title} onChange={(event) => this.handleOnChange(event)} />
                <button type='button' className='Add_Button' onClick={(event) => this.handleOnClick(event)}>Add</button>

            </div>
        )
    }
}
export default AddToDo