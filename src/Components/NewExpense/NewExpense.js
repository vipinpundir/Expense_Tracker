import React from 'react';
import './NewExpense.css';
import ExpenseFome from './ExpenseForm';    

const NewExpense = (props) => {

    // this function created for take data from fome 
    const TakeExpenseFomeData = (StoredExpenseFomeData) => {
       const NewExpenseData  = {
            ...StoredExpenseFomeData
            // id: Math.random().toString()
        }
     console.log(NewExpenseData)

     // send data to his parent 
     props.GiveNewExpenseData(NewExpenseData); //we send StoredExpenseFomeData data in GIveNewExpensedata
     
    }
    
    
    



    return(

        <div className='new-expense'>
            <ExpenseFome GiveExpenseFomeData={TakeExpenseFomeData} />
        </div>

    );


}


export default NewExpense;
