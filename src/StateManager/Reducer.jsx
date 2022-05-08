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
            const stateWithAllTheNotes = {
                ...state,
                listOfNotes: action.payload
            }
            return stateWithAllTheNotes
        case 'add-note':
            const newNote = action.payload;
            const newListOfNotesAddedOne = [...state.listOfNotes, newNote]
            const newStateAddNote = {
                ...state, listOfNotes: newListOfNotesAddedOne
            }
            return newStateAddNote
        case 'remove-task':
            const newListofTasksWithoutPayloadTask = state.listOfCategories.filter(task => task.id !== action.payload.id)
            const newStateWithTaskDeleted = { ...state, listOfCategories: newListofTasksWithoutPayloadTask }
            return newStateWithTaskDeleted
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