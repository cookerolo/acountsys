import React, {createContext, useState, useEffect} from 'react';

const TransactionContext = createContext();

const TransactionProvider = ({children}) => {
    const [transactions, setTransactions] = useState([]);
    

    useEffect(() => {
        loadTransactions();
      }, []);

      function loadTransactions() {
      
        fetch('http://127.0.0.1:8000/api/transactions/')
          .then(res => { if (res.ok) return res; else throw new Error(res.statusText); })
          .then(res => res.json())
          .then(json => {
            setTransactions(json);
          })
          .catch(err => alert(err))
      }


    

    return (
        <TransactionContext.Provider value={{transactions, loadTransactions}} >
            {children}
        </TransactionContext.Provider>
    );
};

export {TransactionContext, TransactionProvider};
