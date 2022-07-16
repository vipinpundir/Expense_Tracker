import React, { useState } from 'react';
import './ExpenseForm';
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [entertitle, setentertitle] = useState('');
    const [enterdate, setenterdate] = useState('');
    const [enteramount, setenteramount] = useState('');

    const titlechangehandler = (event) => {
        setentertitle(event.target.value);
    }
    const datechangehandler = (event) => {
        setenterdate(event.target.value);
    }
    const amountchangehandler = (event) => {
        setenteramount(event.target.value);
    }
    const submithandler = (event) => {

        event.preventDefault(); //default nature stop because default nature is refrs
        const ExpenceObject = {
            title: entertitle,
            date: enterdate,
            amount: enteramount
        }
        console.log(ExpenceObject)


        // send data to his parent 

        props.GiveExpenseFomeData(ExpenceObject); //we send expenseobject data in GIveExpensedata

        setentertitle('');
        setenterdate('');
        setenteramount('');
    }

    return (

        <form onSubmit={submithandler} >
            <div className='new-expense-controls'>

                <div className='new-expense-control'>
                    <label>Title</label>
                    <input type="text" value={entertitle} onChange={titlechangehandler} />
                </div>
                <div className='new-expense-control'>
                    <label>Amount</label>
                    <input type="number" value={enteramount} onChange={amountchangehandler} />
                </div>
                <div className='new-expense-control'>
                    <label>Date</label>
                    <input type="date" value={enterdate} onChange={datechangehandler} />
                </div>
                <div className='new-expense-btn'>
                    <button type='submit'> Add Expense </button>
                </div>
            </div>

        </form>

    );

}



export default ExpenseForm;