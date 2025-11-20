import React from 'react'
import { useContext } from 'react'
import { search } from '../Contextapi/Searchcontext'

const Searchbar = () => {
    const {searchterm, setSearchterm} = useContext(search);
  return (
    <div>
      <input type="text" 
      placeholder='Search Expense'
      value={searchterm}
      onChange={(e) => setSearchterm(e.target.value)}
      />
    </div>
  )
}

export default Searchbar
