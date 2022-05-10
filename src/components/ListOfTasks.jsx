import React, { useContext, useState } from 'react'
import { Store } from './StoreProvider'


const ListOfTasks = (props) => {

    const { state, dispatch } = useContext(Store)

    const onDelete = async (idtask) => {
        let response = await fetch(`http://localhost:8081/api/delete/task/${idtask.id}`,
            {
                method: 'DELETE'
            })
        if (response.status === 200) {
            dispatch({
                type: 'remove-task',
                payload: idtask
            })
        }
    }

    const onCheckBox = async (e, task) => {
        const checked = e.currentTarget.checked;

    
        let noteWithCheckedboxInformation = {
            ...task,
            complete: checked
        }


        let noteUpdatedPromise = await fetch(`http://localhost:8081/api/update/task`,
            {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(noteWithCheckedboxInformation)
            })

        let noteUpdated = await noteUpdatedPromise.json()

        dispatch({
            type: 'update-task',
            payload: noteUpdated
        })
    }



    return (
        <div className='card '>
            {props.tasks.listTask.map(task => {
                return <div className="" key={task.id}>
                    <div>{task.id}
                        <li style={task.complete ? { textDecoration: 'line-through' } : {}}><h5>{task.task}</h5></li>
                    </div>
                    <div></div>

                    <div className="align-items-center"><input onChange={(event) => onCheckBox(event, task)}
                        type="checkbox" id="complete" checked={task.complete}  />
                        <label className="ms-2 " htmlFor="complete ">complete?</label>  </div>
                    <div className="" style={task.complete ? { textDecoration: 'line-through' } : {}}> </div>
                    <div className="">
                        <div className="card ">
                            <button className=" btn btn-secondary mt-1" disabled={task.complete} > Editar<i className=""></i> </button>
                            <button className="btn btn-warning mt-2"  onClick={() => onDelete(task)}>Delete<i className=""></i> </button>
                        </div>
                    </div>
                </div>
            })}
            {/* onChange={(e) => onCheckBox(e, note)} */}
        </div>
    )
}

export default ListOfTasks