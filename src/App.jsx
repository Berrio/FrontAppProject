import { useState } from 'react'
import StoreProvider from './components/StoreProvider'
import './App.css'
import ListOfToDo from './components/ListOfCategorys'
import Form from './components/Form'

function App() {

  return (
    <StoreProvider>
     <Form></Form>
     <ListOfToDo />
    

    </StoreProvider>
  )
}

export default App
