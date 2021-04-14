import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';
const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ "amount": 5000, "category": "Salary", "type": "Income", "date": "2021-04-08", "id": "783d0654-7608-4ef7-b1af-72128aa85d7f" }];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    }

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    }

    const balance = transactions.reduce((acc, currVal) =>
        currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount, 0);

    return ( <
        ExpenseTrackerContext.Provider value = {
            {
                deleteTransaction,
                addTransaction,
                transactions,
                balance
            }
        } > { children } <
        /ExpenseTrackerContext.Provider>
    );
}