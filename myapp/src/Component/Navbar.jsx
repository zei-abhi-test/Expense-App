import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{display: 'flex', gap: '20px', padding: '10px', borderBottom: '1px solid black'}}>
        <Link to="/">Item</Link>    
        <Link to="/expense">Expense</Link>
        <Link to="/add">Add Expense</Link>
    </nav>
  )
}

export default Navbar
