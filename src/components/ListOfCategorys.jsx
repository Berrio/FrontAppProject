import React, { useContext, useEffect, useState } from "react";
import { Store } from "./StoreProvider";
import ListOfTasks from "./ListOfTasks";
import TaskForm from "./TaskForm";

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
    }, [])

    const fetchAllNotes = async () => {
        let response = await fetch(`http://localhost:8081/api/`)
        let data = await response.json()
        return data;
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

    return (
        <div className="card">
            <ul className="list-unstyled ms-4">
                {state.listOfCategorys.map(category => {
                    return <li key={category.id}>
                        <div>{category.id}<h4>{category.category}</h4>
                            <button className="btn btn-danger mt-2" onClick={(e) => onDelete(category)}>Delete</button>
                        </div>
                        
                        <div className="card-body">
                            <TaskForm category={category.id}></TaskForm>
                            <ListOfTasks tasks={category} />
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ListOfToDo   