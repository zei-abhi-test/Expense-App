import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

const Navbar = () => {
  return (
    <nav style={{display: 'flex', gap: '20px', padding: '10px', borderBottom: '1px solid black'}}>
        <Searchbar />
        <Link to="/">Item</Link>    
        <Link to="/expense">Expense</Link>
        <Link to="/add">Add Expense</Link>
    </nav>
  )
}

export default Navbar
