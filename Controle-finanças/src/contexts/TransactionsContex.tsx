import { ReactNode, useCallback, useEffect, useState } from 'react';
import { createContext } from 'use-context-selector';
import { api } from '../lib/axios';
interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createAt: string;
}

interface CrateTransactionInput {
  description: string,
  price: number,
  category: string,
  type: 'income' | 'outcome',
}

interface TransactionContexType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CrateTransactionInput) => Promise<void>;
}


interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContexType);

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = useCallback(
    async (query?: string) => {
      const response = await api.get('/transactions', {
        params: {
          _sort: 'createAt',
          _order: 'desc',
          q: query,
        }
      });

      setTransactions(response.data);
    },
    []
  );

  const createTransaction = useCallback(
    async (data: CrateTransactionInput) => {
      const { description, category, price, type } = data;

      const response =await api.post('transactions', {
        description,
        price,
        category,
        type,
        createAt: new Date(),
      });

      setTransactions(state => [response.data, ...state]);
    },
    [],
  );

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);
  return (
    <TransactionContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}

    >
      {children}
    </TransactionContext.Provider>
  );
}

