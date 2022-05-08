import React from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'add-categorys':
            const newCategory = action.payload;
            const newListOfCategoriesAddedOne = [...state.listOfCategories, newCategory]
            const newStateAddedCategory = {
                ...state, listOfCategories: newListOfCategoriesAddedOne
            }
            return newStateAddedCategory
        case 'get-categorys':
            const stateWithTasks = {
                ...state,
                listOfCategories: action.payload
            }
            return stateWithTasks

        case 'get-notes':
            const stateWithAllTheTask = {
                ...state,
                listOfCategories: action.payload
            }
            return stateWithAllTheTask

            case 'remove-task':
                const newListOfNotesWithoutPayloadNote = state.listOfCategories.map(category => {
                    const deleteFromList = category.listTask.filter(task => task.id !== action.payload.id)
                    return { ...category, listTask: deleteFromList }
                })
            return { ...state, listOfCategories: newListOfNotesWithoutPayloadNote }
        case 'update-note':
            const newListofNotes = state.listOfNotes.map(note => {
                if (note.id == action.payload.id) {
                    return action.payload
                }
                return note
            })

            const newStateModifiedCheckbox = { ...state, listOfNotes: newListofNotes }
            return newStateModifiedCheckbox
    }
}

export default reducer;