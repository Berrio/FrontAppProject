import React, { useState, useContext, useRef } from 'react'
import { Store } from './StoreProvider';

const TaskForm = (props) => {
    const formRef = useRef(null)

    const onAdd = async (event) => {
        // event.preventDefault();
        if (task) {
            const taskFromForm = {
                task,
                complete: false,
                fkTasktId: props.category
            }
            let noteSavedPromise = await fetch(`http://localhost:8081/api/create/task`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(taskFromForm)
            })

            let noteSaved = await noteSavedPromise.json();

            dispatch({
                type: 'add-task',
                payload: noteSaved
            })

            
        }
    }

    const { state, dispatch } = useContext(Store)

    const [task, setTask] = useState('');

    const addingtask = (e) => {
        setTask(e.target.value)
    }


    return (
        <div className='container'>
            <form >
                <div className="input-group mb-3">
                    <input onChange={addingtask} name="message" type="text" className="form-control mt-2 me-2" 
                        placeholder="Insert New Task" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button onClick={onAdd} className="btn btn-success mt-2 me-3" type="button" id="button-addon2">Add Task</button>
                </div>
            </form>
        </div>
    )
}

export default TaskForm