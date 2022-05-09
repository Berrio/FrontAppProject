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
            const newListofNotesWithoutPayloadNote = state.listOfCategorys.filter(note => note.id !== action.payload.id)
            const newStateWithNoteDeleted = { ...state, listOfCategorys: newListofNotesWithoutPayloadNote }
            return newStateWithNoteDeleted
        case 'update-task':

            const newListOfTasks = state.listOfCategorys.map(category => {

                const ListTasks = category.ListTask.map(task => {
                    console.log(task)
                    if (task.fkTasktId == action.payload.fkTasktId) {
                        return action.payload
                    }
                    return task
                })
                return { ...category, ListTask: ListTasks }
            })
            return { ...state, listOfCategorys: newListOfTasks }
        case 'add-task':

            const AddListOfTasks = state.listOfCategorys.filter(category => {
                if (category.id == action.payload.fkTasktId) {
                    category.add(action.payload)
                }
            })
            return { ...state, listOfCategorys: AddListOfTasks }

        case 'delete-task':

            const deleteListOfTasks = state.listOfCategorys.filter(category => {
                category.id == action.payload.fkTasktId
            })
            
            return { ...state, listOfCategorys: deleteListOfTasks }

    }
}

export default reducer;