import { useState } from 'react'
import StoreProvider from './StateManager/StoreProvider'
import './App.css'
import ListOfToDo from './components/ListOfToDo'
import Form from './components/Form'

import Category from './components/Category'

function App() {

  return (
    <Category>
      <StoreProvider>
        <Form></Form>

        <ListOfToDo>

        </ListOfToDo>
      </StoreProvider>
    </Category>


  )
}

export default App
