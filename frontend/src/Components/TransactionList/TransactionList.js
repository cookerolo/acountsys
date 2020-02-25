import React, { useContext } from 'react';
import './style.css';
import { TransactionContext } from '../../Context/TransactionContext';
import { stringToDate } from './addons';

const TransactionList = () => {
    const { transactions } = useContext(TransactionContext);
    

    return (
        <div className="container">
            <div className="bill-list-row-content row font-weight-bold">
                <div className="col-9"> Total </div>
                <div className="col-3"> ARS {
                    transactions.reduce((a, el) => a + parseFloat(el.amount), 0).toFixed(2)
                } </div>
            </div>
            {
                transactions.map((transaction, index) => {
                    return (
                        <div key={index} className="transaction-list-container card">
                            <div className="bill-list-row-content row">
                                <div className="col-6">
                                    {transaction.description}
                                </div>
                                <div className="col-3">
                                    {stringToDate(transaction.created_at)}
                                </div>
                                <div className="col-3">
                                    ARS {parseFloat(transaction.amount).toFixed(2)}
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            
        </div>
    );
};

export default TransactionList;
