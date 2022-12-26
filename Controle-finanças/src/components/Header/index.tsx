import { HeaderContainer, HeaderContent, NewTransacionButton } from "./styles";

import logo from '../../assets/logo-ignite.svg';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt=""/>

        <NewTransacionButton>Nova transação</NewTransacionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
