import './App.css'
import { Route, Routes } from 'react-router-dom'
import Item from './Page/Item'
import Expense from './Page/Expense'
import { Add } from './Page/Addexpense'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Item />} />
        <Route path='/expense' element={<Expense />} />
        <Route path='/add' element={<Add />} />
      </Routes>
    </>
  )
}

export default App
