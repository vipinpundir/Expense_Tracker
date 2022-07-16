

import React, { useState } from 'react';

// this usestate is a huk, all starting element  with u is called huk 

import './ExpenseItem.css';
import '../App'
const ExpenseItem = (props) => {

  return (
    <div className="">

      {/* #Map fun() use for all new upcoming object already print on screen
      #map fun() array prr lagta hai taki array ki sari object pr operation perform ho jaye  */}
      {props.Item.map(
        Expense => (
          <div className='expenseitem_1'>
            <p>{Expense.date}</p>
            <p> {Expense.title} </p>
            <p className='expenseitem_1_btn'>${Expense.amount}</p>
          </div>
        )

      )
      }

      {/* <div className='expenseitem_1'>
        <p>{props.Item[0].date}</p>
        <p> {props.Item[0].title} </p>
        <p className='expenseitem_1_btn'>${props.Item[0].amount}</p>
      </div>
      <div className='expenseitem_1'>
        <p>{props.Item[0].date}</p>
        <p> {props.Item[0].title} </p>
        <p className='expenseitem_1_btn'>${props.Item[0].amount}</p>
      </div>
      <div className='expenseitem_1'>
        <p>{props.Item[0].date}</p>
        <p> {props.Item[0].title} </p>
        <p className='expenseitem_1_btn'>${props.Item[0].amount}</p>
      </div> */}

    </div>
  );
}

export default ExpenseItem;