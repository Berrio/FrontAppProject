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

    return (
        <div className='card '>
            {props.tasks.map(task => {
                return <div className="" key={task.id}>
                    <div>{task.id}<h5>{task.task}</h5> </div>
                    <div></div>
                    
                    <div className="align-items-center"><input  onChange={(event) => onCheckbox(event, task)} type="checkbox" id="complete" checked={task.complete} />
                    <label className="ms-2 " htmlFor="complete ">complete?</label>  </div>
                    <div className="" style={task.complete ? { textDecoration: 'line-through' } : {}}> </div>
                    <div className="">
                        <div className="card ">
                            <button className=" btn btn-secondary mt-1" onClick={() => {}}>Editar<i className=""></i> </button>
                            <button className="btn btn-warning mt-2" onClick={() => onDelete(task)}>Delete<i className=""></i> </button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default ListOfTasks