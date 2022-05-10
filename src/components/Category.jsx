import React, { useContext, useEffect, useState } from "react";
import { render } from "react-dom";
import { Store } from "./StoreProvider";

const Category = () => {

    const onAdd = async (event) => {
        event.preventDefault();
        if (category) {
            const categoryFromForm = { category }

            let CreateSavedPromise = await fetch(`http://localhost:8081/api/create/category`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(categoryFromForm)
            })

            let CreatedCategory = await CreateSavedPromise.json()
            
            dispatch({
                type: 'add-categorys',
                payload: CreatedCategory
                
            })


        }
    }

    const { state, dispatch } = useContext(Store)

    const [category, setCategory] = useState('')

    const addCategory = (e) => {
        setCategory(e.target.value)
    }

    return (
        <form >
            <label className=""></label>
            <input onChange={addCategory} type="text" name="category" id="category" required />
            <button type="submit" className="" onClick={onAdd}>New Category</button>
        </form>
    )

}

export default Category;