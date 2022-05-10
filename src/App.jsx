import { useEffect, useState } from 'react'
import StoreProvider from './components/StoreProvider'
import './App.css'
import ListOfCategorys from './components/ListOfCategorys'
import Form from './components/Form'

function App() {
  const VALOR="valor"
  const [value,setValue]=useState("");
  const [error,seterror]=useState(false);
  const [loading,setloading]=useState(false);



 
  return (
    <StoreProvider>
      <Form></Form>
      <ListOfCategorys />
    </StoreProvider>
     
  )
}

export default App
