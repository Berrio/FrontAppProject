import { useState } from 'react'
import StoreProvider from './StateManager/StoreProvider'
import './App.css'
import Form from './components/Form'

import Category from './components/Category'
import ListOfCategories from './components/ListOfCategories'

function App() {

  return (
    <StoreProvider>
    <Category>
        <Form />
        <ListOfCategories />
    </Category>
    </StoreProvider>

  )
}

export default App
