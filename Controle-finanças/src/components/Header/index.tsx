import { HeaderContainer, HeaderContent, NewTransacionButton } from './styles';

import * as Dialog from '@radix-ui/react-dialog';

import logo from '../../assets/logo-ignite.svg';
import { NewTransactionModal } from '../NewTransactionModal';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt=""/>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransacionButton>Nova transação</NewTransacionButton>
          </Dialog.Trigger>

          <NewTransactionModal/>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
