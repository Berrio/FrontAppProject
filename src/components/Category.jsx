import React, { useContext, useEffect } from "react";
import { render } from "react-dom";
import { Store } from "../StateManager/StoreProvider";

const Category =()=>{
    const addCategory = (e) => {
        console.log(e.target.value)
      }
      const onAdd = (e) => {
        console.log(e.target.value)
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