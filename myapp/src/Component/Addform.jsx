import React, { useState, useContext } from 'react'
import axios from 'axios'
import { FetchContext } from '../Contextapi/Fetchcontext'

const Addform = () => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const { expenses, setExpenses } = useContext(FetchContext)

  const handlesubmit = async (e) => {
    e.preventDefault()

    const expenseData = {
      id: Math.random().toString(),
      title,
      amount: +amount,
      date
    }

    const res = await axios.post("http://localhost:3000/expenses", expenseData)

    setExpenses([...expenses, res.data])
    alert("Expense Added Successfully")

    setTitle('')
    setAmount('')
    setDate('')
  }

  return (
    <div>
      <h1>Add Expense</h1>
      <form onSubmit={handlesubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div>
          <label>Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>

        <div>
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <button type="submit">Add Expense</button>
      </form>
    </div>
  )
}

export default Addform
