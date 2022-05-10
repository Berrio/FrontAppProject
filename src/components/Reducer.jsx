import React from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'get-categorys':
            const stateWithAllTheNotes = {
                ...state,
                listOfCategorys: action.payload
            }
            return stateWithAllTheNotes
        case 'add-category':
            const newNote = action.payload;
            const newListOfNotesAddedOne = [...state.listOfCategorys, newNote]
            const newStateAddNote = {
                ...state, listOfCategorys: newListOfNotesAddedOne
            }
            return newStateAddNote
        case 'remove-category':
            const categorysWithoutTask = state.listOfCategorys.filter(note => note.id !== action.payload.id)
            const TaskDeleted = { ...state, listOfCategorys: categorysWithoutTask }
            return TaskDeleted
        case 'update-task':
            const categorysWithoutTaskUpdated = state.listOfCategorys.find(todo => todo.id === action.payload.fkTasktId)
            const categorysCheck = {
                ...categorysWithoutTaskUpdated, listTask: categorysWithoutTaskUpdated.listTask.map(
                    task => {
                        if (task.id === action.payload.id) {
                            return action.payload
                        }
                        return task
                    })
            }
            const taskCheckbox = state.listOfCategorys.map(
                todo => todo.id !== action.payload.fkTasktId ? todo : categorysCheck)
            const taskUpdated = { ...state, listOfCategorys: taskCheckbox }

            return taskUpdated
        case 'add-task':
            console.log("action.payload")
            console.log(action.payload)
            const Task = action.payload
            const listCategoriesWithTasks = state.listOfCategorys.map(todo => todo.id !== action.payload.id ? todo : Task)
            const categoryWithTask = {
                ...state, listOfCategorys: listCategoriesWithTasks
            }
            return categoryWithTask

        case 'remove-task':
            const CategorysWithoutTasks = state.listOfCategorys.find(todo => todo.id === action.payload.fkTasktId)
            const listCategorys = {
                ...CategorysWithoutTasks, listTask: CategorysWithoutTasks.listTask.filter(
                    task => task.id !== action.payload.id)
            }
            const TaskUpdated = state.listOfCategorys.map(note => note.id !== action.payload.fkTasktId ? note : listCategorys)
            const taskDeleted = { ...state, listOfCategorys: TaskUpdated }

            return taskDeleted

    }
}

export default reducer;