import React from 'react'
import { useState } from 'react'


const Addform = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] =useState('');

    return (
    <div>
        <h1>Add Expense</h1>
        <form>
            <div>
                <label>Title    </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div><br />
            <div>
                <label>Amount     </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div> <br />
            <div>
                <label>Date     </label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div> <br/>
                
            <button type="submit">Add Expense</button>
        </form>
    </div>

    )
}

export default Addform
