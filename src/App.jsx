import { useState } from 'react'
import StoreProvider from './components/StoreProvider'
import './App.css'
import ListOfCategorys from './components/ListOfCategorys'
import Form from './components/Form'

function App() {

  return (
    <StoreProvider>
     <Form></Form>
     <ListOfCategorys />
    </StoreProvider>
  )
}

export default App
