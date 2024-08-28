import React, { useState } from 'react'
import { createContext } from 'react'

export const GlobalContext = createContext(null);



export default function GlobalState({ children }) {

    const [formData, setFormData] = useState({
        type: 'expense',
        amount: 0,
        description: ''
    });

    const [value, setValue] = useState('expense');
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [allTransactions, setAllTransactions] = useState([]);


    function handleFormSubmit(submittedData) {
        if (!submittedData.description || !submittedData.amount) return;
        setAllTransactions([
            ...allTransactions,
            { ...submittedData, id: Date.now() },
        ]);
        
    }   


    return <GlobalContext.Provider
        value={{
            formData,
            setFormData,
            value,
            setValue,
            totalExpense,
            setTotalExpense,
            totalIncome,
            setTotalIncome,
            allTransactions,
            setAllTransactions,
            handleFormSubmit
        }}
    >
        {children}
    </GlobalContext.Provider>
}