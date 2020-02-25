import React from 'react';
import './App.css';
import AddTransaction from '../AddTransaction/AddTransaction';
import { TransactionProvider } from '../../Context/TransactionContext';
import TransactionList from '../TransactionList/TransactionList';
import Navbar from '../Navbar/Navbar';

const App = () => {
  return (
    <div className='bills-container'>
      <Navbar></Navbar>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <TransactionProvider>
              <AddTransaction />
              <TransactionList />
            </TransactionProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
