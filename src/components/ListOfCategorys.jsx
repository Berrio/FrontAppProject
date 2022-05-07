import React, { useContext, useEffect } from "react";
import { Store } from "./StoreProvider";

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
    },[])

    const fetchAllNotes=async()=>{
        let response=await fetch(`http://localhost:8081/api/`)
        let data= await response.json()
        return data;
    }

    const onCheckBox = async (e, note)=>{
        const checked=e.currentTarget.checked;

        let noteWithCheckedboxInformation={...note,
        done:checked}

        let noteUpdatedPromise= await fetch(`http://localhost:8081/api/update/note`,
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(noteWithCheckedboxInformation)
})

let noteUpdated=await noteUpdatedPromise.json()

        dispatch({
            type: 'update-note',
            payload: noteUpdated
        })
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
        <div>
            <ul>
            {state.listOfCategorys.map(category =>{
                return <li key={category.id}>
                    {category.id}<br />
                    {category.category}<br />
                    <button onClick={(e) => onDelete(category)}>Delete</button>
                </li>
            })}
            </ul>
        </div>
    )
}

export default ListOfToDo   