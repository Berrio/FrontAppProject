import React, { useContext, useEffect } from "react";
import { Store } from "./StoreProvider";
import ListOfTasks from "./ListOfTasks";

const ListOfToDo =()=>{

    const {state,dispatch}= useContext(Store)

    useEffect(()=>{
        
        let listOfNote= fetchAllNotes().then(
            notes=>{
                // console.log(fetchAllNotes)
                let action={
                    type:'get-categorys',
                    payload:notes
                }
                dispatch(action)
            }
        )
    },[state])

    const fetchAllNotes=async()=>{
        let response=await fetch(`http://localhost:8081/api/`)
        let data= await response.json()
        return data;
    }

     const addingTask=()=>{
        
        
    }


    const onDelete = async(note) => {
        let response=await fetch(`http://localhost:8081/api/delete/category/${note.id}`,
        {
            method: 'DELETE',
            })
        console.log(response)
        if(response.status===200){
            dispatch({
                type: 'remove-note',
                payload:note
            })
        }
        
   }
    return(
        <div className="card">
            <ul>
            {state.listOfCategorys.map(category =>{
                return <li key={category.id}>
                    <input onChange={addingTask} type="text" name="message" />
                    <button className="btn btn-primary" onClick={(e) => onAddTask(category)}>Add Task</button>
                    <div>{category.id}<h4>{category.category}</h4></div>
                    
                    <button className="btn btn-danger" onClick={(e) => onDelete(category)}>Delete</button>
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