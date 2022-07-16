
import React, { useState } from 'react';

import './App.css';
import ExpenseItem from './Components/ExpenseItem';
import NewExpense from './Components/NewExpense/NewExpense';





let Dummy_Expense = [
  {
    id: 'e1',
    title: "Tittle",
    date: "2022-07-13",
    amount: 18
  },

  // {
  //   id: 'e1',
  //   title: "new2 title",
  //   date: "12 August 2022",
  //   amount: 18
  // }

];





const App = (props) => {


  const [Expense, setExpense] = useState(Dummy_Expense);


  // this function created for take data from fome 
  const TakeNewExpenseData = (StoredNewExpenseData) => {

    // use taki purane expence k sath new v aaye 
    const Updated_Expense = [StoredNewExpenseData, ...Expense];
    setExpense(Updated_Expense)
  }

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <NewExpense GiveNewExpenseData={TakeNewExpenseData} />
      <ExpenseItem Item={Expense} />
    </div>
  );
}

export default App;
