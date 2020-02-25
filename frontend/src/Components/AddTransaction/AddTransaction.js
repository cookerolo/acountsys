import React, { useContext, useState } from 'react';
import './style.css';
import { TransactionContext } from '../../Context/TransactionContext';

const AddTransaction = () => {
    const [newDescription, setNewDescription] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [validForm, setValidForm] = useState(false);
    const { transactions, loadTransactions} = useContext(TransactionContext);

    const transactionObjectValid = () => {
        setValidForm(newAmount
            && newDescription
            && !isNaN(newAmount)
            && newAmount !== 0
            && newAmount >= - transactions.reduce((a, el) => a + parseFloat(el.amount), 0) + 0);
    };
    const clearForm = () => {
        setNewDescription('');
        setNewAmount('');
    };

    function updateTransactions() {
        const description = newDescription;
        const amount = parseFloat(newAmount)

        fetch('http://127.0.0.1:8000/api/transactions/', {
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ description, amount }),
        })            
            .then(res => { if (res.ok) return res; else throw new Error(res.statusText); })
            .then(() => {
                setNewDescription('');
                setNewAmount('');
                setValidForm(false);
            })
            .catch(err => alert(err))
            .finally(loadTransactions)
    }

    return (
        <div className='add-bill-container'>
            <div className="input-group">
                <div className="input-group-prepend">
                    <label className="input-group-text">Description / amount: </label>
                </div>
                <input className='add-bill-form-control form-control'
                    placeholder='Enter Description'
                    type='text'
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    onKeyUp={transactionObjectValid}
                    onInput={transactionObjectValid} />
                <input className='add-bill-form-control form-control '
                    placeholder='Enter Amount'
                    type='number'
                    value={newAmount}
                    onChange={(e) => setNewAmount(e.target.value)}
                    onKeyUp={transactionObjectValid}
                    onInput={transactionObjectValid} />
                <button className="add-bill-form-control btn btn-primary col-1"
                    onClick={updateTransactions}
                    disabled={!validForm}
                >Add</button>
                <button className="add-bill-form-control btn btn-warning btn-sm col-1"
                    onClick={() => {
                        clearForm();
                        setValidForm(false);
                    }
                    }
                >Clear</button>
            </div>
        </div>
    );
};

export default AddTransaction;
