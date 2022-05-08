import React, { useContext, useState, useRef } from "react";
import { Store } from './StoreProvider'

const Form = () => {

    const formRef = useRef(null)

  
    const onAdd = async (event) => {
        event.preventDefault();
        if (category) {
            const noteFromForm={
                category
            }
            let noteSavePromise = await fetch(`http://localhost:8081/api/create/category`,
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body:JSON.stringify(noteFromForm)
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

    const { state, dispatch } = useContext(Store)


    const [category, setCategory] = useState('');


    const addingCategory = (e) => {
        setCategory(e.target.value)
    }


    return (
        <form ref={formRef}>

            <input onChange={addingCategory} type="text" name="message" />
            <button className="btn btn-success" onClick={onAdd}>Add Category</button>
        </form>
    )
}

export default Form;