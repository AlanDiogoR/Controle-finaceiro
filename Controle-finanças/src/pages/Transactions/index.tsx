import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from '../components/SearchForm';

import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <>
      <Header/>
      <Summary/>

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width='50%'>Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>26/12/2022</td>
            </tr>
            <tr>
              <td width='50%'>Hamburgueres</td>
              <td>
                <PriceHighLight variant="outcome">-R$59,00</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>26/12/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}
