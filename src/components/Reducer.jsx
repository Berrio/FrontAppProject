import React from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'get-categorys':
            const stateWithAllTheNotes = {
                ...state,
                listOfCategorys: action.payload
            }
            return stateWithAllTheNotes
        case 'add-note':
            const newNote = action.payload;
            const newListOfNotesAddedOne = [...state.listOfCategorys, newNote]
            const newStateAddNote = {
                ...state, listOfCategorys: newListOfNotesAddedOne
            }
            return newStateAddNote
        case 'remove-note':
            const newListofNotesWithoutPayloadNote = state.listOfCategorys.filter(note => note.id !== action.payload.id)
            const newStateWithNoteDeleted = { ...state, listOfCategorys: newListofNotesWithoutPayloadNote }
            return newStateWithNoteDeleted
        case 'update-task':
            const newListOfTasks = state.listOfCategorys.map(category => {
                const ListTasks = category.ListTask.map(task => {
                    if (task.id == action.payload.id) {
                        return action.payload
                    }
                    return task
                })
                return { ...category, ListTask: ListTasks }
            })
            return { ...state, listOfCategorys: newListOfTasks }

    }
}

export default reducer;