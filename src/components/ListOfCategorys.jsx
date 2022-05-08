import React, { useContext, useEffect } from "react";
import { Store } from "./StoreProvider";
import ListOfTasks from "./ListOfTasks";

const ListOfToDo = () => {

    const { state, dispatch } = useContext(Store)

    useEffect(() => {

        let listOfNote = fetchAllNotes().then(
            notes => {
                // console.log(fetchAllNotes)
                let action = {
                    type: 'get-categorys',
                    payload: notes
                }
                dispatch(action)
            }
        )
    }, [state])

    const fetchAllNotes = async () => {
        let response = await fetch(`http://localhost:8081/api/`)
        let data = await response.json()
        return data;
    }

    const addingTask = () => {


    }


    const onDelete = async (note) => {
        let response = await fetch(`http://localhost:8081/api/delete/category/${note.id}`,
            {
                method: 'DELETE',
            })
        console.log(response)
        if (response.status === 200) {
            dispatch({
                type: 'remove-note',
                payload: note
            })
        }

    }

    const onAddTask = async (event) => {
        event.preventDefault();
        if (category) {
            const noteFromForm = {
                category
            }
            let noteSavePromise = await fetch(`http://localhost:8081/api/create/task/${idtask.id}`,
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(noteFromForm)
                })

            let noteSaved = await noteSavePromise.json();
            console.log(noteSaved)
            dispatch({
                type: 'add-note',
                payload: noteSaved
            })
            formRef.current.reset();
        }
    }
    return (
        <div className="card">
            <ul className="list-unstyled ms-4">
                {state.listOfCategorys.map(category => {
                    return <li key={category.id}>
                        {/* <input onChange={addingTask} type="text" name="message" />
                        <button className="btn btn-primary" onClick={(e) => onAddTask(category)}>Add Task</button> */}
                         <div className="input-group mb-3">
                            <input onChange={addingTask} name="message" type="text" className="form-control mt-2 me-2" placeholder="Insert New Task" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button onClick={(e) => onAddTask(category)} className="btn btn-success mt-2 me-3" type="button" id="button-addon2">Add Task</button>
                        </div>
                        <div>{category.id}<h4>{category.category}</h4>
                            <button className="btn btn-danger mt-2" onClick={(e) => onDelete(category)}>Delete</button>
                        </div>

                       

                        <div className="card-body">
                            <ListOfTasks tasks={category.listTask} />
                        </div>
                    </li>

                })}
            </ul>
        </div>
    )
}

export default ListOfToDo   