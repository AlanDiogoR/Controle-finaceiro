import { useContext, useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { TransactionContext } from '../../contexts/TransactionsContex';
import { SearchForm } from '../components/SearchForm';

import { PriceHighLight, TransactionsContainer, TransactionsTable } from './styles';


export function Transactions() {
  const { transactions } = useContext(TransactionContext)

  return (
    <>
      <Header/>
      <Summary/>

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width='50%'>{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.price}
                      </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}
