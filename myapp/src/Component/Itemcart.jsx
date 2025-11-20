import React, { useContext } from 'react'
import { FetchContext } from '../Contextapi/Fetchcontext'

const Item = () => {
  const { expenses } = useContext(FetchContext)

  return (
    <div>
      {expenses.map((item) => (
        <div 
          key={item.id} 
          style={{ border: '1px solid black', margin: '10px', padding: '10px' }}
        >
          <h3>{item.title}</h3>
          <p>Amount: {item.amount}</p>
          <p>Date: {item.date}</p>
        </div>
      ))}
    </div>
  )
}

export default Item
