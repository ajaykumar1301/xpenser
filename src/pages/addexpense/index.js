import React from 'react'
import AddForm from '../../components/addform'
import TopFold from '../../components/topfold'
import './addexpense.css'

const AddExpense = () => {
    return (
        <div className='add-expense'>
            <TopFold />
            <AddForm />
        </div>
    )
}

export default AddExpense
