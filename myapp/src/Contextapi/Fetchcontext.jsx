import axios from 'axios'
import React, { createContext, useEffect, useState, useContext } from 'react'
import { search } from './Searchcontext'

export const FetchContext = createContext()

export const FetchcontextProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([])
  const { searchterm } = useContext(search)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/expenses")
        setExpenses(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  },)

  const filteredExpenses = expenses.filter((item) =>
    item.title.toLowerCase().includes(searchterm.toLowerCase())
  )

  return (
    <FetchContext.Provider value={{ expenses: filteredExpenses, setExpenses }}>
      {children}
    </FetchContext.Provider>
  )
}

export default FetchcontextProvider
