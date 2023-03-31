import React from 'react';
import ListToDo_css from '../styles/ListToDo_css.scss'
import AddToDo from './AddToDo';
import { ToastContainer, toast } from 'react-toastify';

class ListToDo extends React.Component {
    state = {
        ListToDos: [
            {
                id: 'to_Do_1',
                title: 'Do homework'
            },
            {
                id: 'to_Do_2',
                title: 'Do homework2'
            },
            {
                id: 'to_Do_3',
                title: 'Do homework3'
            }

        ],
        EditToDo: {}
    }
    AddNewToDo = (NewToDo) => {
        this.setState(
            {
                ListToDos: [...this.state.ListToDos, NewToDo]
            }
        )
        toast.success('🦄 Add Successful')

    }
    handleOnCLickDelete = (todo) => {
        let currentToDo = this.state.ListToDos;
        currentToDo = currentToDo.filter(item => item.id !== todo.id)
        this.setState(
            {
                ListToDos: currentToDo
            }
        )
        toast.success('Delete success')
    }
    handleOnCLickEdit = (todo) => {
        let { EditToDo, ListToDos } = this.state
        let isEmptyObj = Object.keys(EditToDo).length === 0;

        if (isEmptyObj === false && todo.id == EditToDo.id) // save
        {
            let currentToDos = [...ListToDos];
            let objIndex = currentToDos.findIndex(todo1 => todo1.id === todo.id)
            //console.log(objIndex)
            currentToDos[objIndex].title = EditToDo.title
            this.setState({
                ListToDos: currentToDos,
                EditToDo: ''
            })
            toast.success('Edit success')
            return;
        }
        this.setState(
            {
                EditToDo: todo
            }
        )
    }
    handleOnChangeEdit = (event) => {
        let editToDoCopy = { ...this.state.EditToDo };
        editToDoCopy.title = event.target.value;

        this.setState(
            {
                EditToDo: editToDoCopy
            }
        )
    }
    render() {
        let { ListToDos, EditToDo } = this.state;
        let isEmptyObj = Object.keys(EditToDo).length === 0;
        console.log(isEmptyObj)
        return (
            <div className='list_To_Do'>
                <AddToDo AddNewToDo={this.AddNewToDo} />
                <div className='List_To_do_content'>
                    {ListToDos && ListToDos.length > 0 &&
                        ListToDos.map((item, index) => {
                            return (
                                <div className='child_todo' key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>{index + 1} - {item.title} </span> :
                                        <>
                                            {EditToDo.id === item.id ?
                                                <span>{index + 1} - <input value={EditToDo.title} onChange={(event) => this.handleOnChangeEdit(event)} /></span> :
                                                <span>{index + 1} - {item.title}</span>
                                            }
                                        </>
                                    }


                                    <button type='button' className='Edit_button' onClick={() => this.handleOnCLickEdit(item)}>{isEmptyObj === false && EditToDo.id === item.id ? 'save' : 'edit'}</button>
                                    <button type='button' className='Delete_button' onClick={() => this.handleOnCLickDelete(item)}>Delete</button>
                                </div>
                            )
                        })}



                </div>
            </div>

        )
    }
}

export default ListToDo;
