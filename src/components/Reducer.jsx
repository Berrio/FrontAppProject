import React from "react";

function reducer(state,action){
    switch(action.type){
        case 'get-categorys':
        const stateWithAllTheNotes={
            ...state,
            listOfCategorys:action.payload
        }
        return stateWithAllTheNotes
        case 'add-note':
            const newNote=action.payload;
            const newListOfNotesAddedOne=[...state.listOfCategorys,newNote]
            const newStateAddNote={
                ...state,listOfCategorys:newListOfNotesAddedOne
            }
            return newStateAddNote
        case 'remove-note':
            const newListofNotesWithoutPayloadNote = state.listOfCategorys.filter(note => note.id !== action.payload.id)
            const newStateWithNoteDeleted = { ...state, listOfCategorys: newListofNotesWithoutPayloadNote}
            return newStateWithNoteDeleted
        case 'update-note':
            const newListofNotes = state.listOfCategorys.map(note=>{
                if(note.id ==action.payload.id){
                    return action.payload
                }
                return note
            })

            const newStateModifiedCheckbox = { ...state, listOfCategorys: newListofNotes }
            return newStateModifiedCheckbox
            
    }
}

export default reducer;