import React, { useContext, useState } from 'react'
import { Store } from './StoreProvider'

const ListOfTasks = (props) => {

    

    return (
        <div className='card'>
            {props.notes.map(task => {
                return <div className="" key={task.id}>
                    <div>{task.id}<h5>{task.task}</h5> </div>
                    <div></div>
                    <div className=""><input onChange={(event) => onCheckbox(event, task)} type="checkbox" checked={task.complete} />complete?</div>
                    <div className="" style={task.complete ? { textDecoration: 'line-through' } : {}}> </div>
                    <div className="">
                        <div className="">
                            <button className="btn btn-secondary" onClick={() => {}}>Editar<i className=""></i> </button>
                            <button className="btn btn-warning" onClick={() => onDelete(task)}>Delete<i className=""></i> </button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default ListOfTasks