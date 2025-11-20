import React, { useContext } from 'react'
import { FetchContext } from '../Contextapi/Fetchcontext'

const Expensetotal = () => {
  const { expenses } = useContext(FetchContext)

  const total = expenses.reduce((acc, curr) => acc + Number(curr.amount), 0)

  return (
    <div>
      <h1>Count Total: {total}</h1>
    </div>
  )
}

export default Expensetotal
