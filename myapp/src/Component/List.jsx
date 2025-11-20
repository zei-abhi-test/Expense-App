import React, { useContext } from 'react'
import { FetchContext } from '../Contextapi/Fetchcontext'

const List = () => {
  const { expenses } = useContext(FetchContext)

  return (
    <div style={{ padding: "20px" }}>
      <h2>Expenses Table</h2>

      <table border="1" cellPadding="10" cellSpacing="0" 
        style={{ width: "50%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th>Title</th>
            <th>Amount ($)</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List
