import { useState } from "react";
import Modal from "react-modal";

import logoImg from "../../assets/logo.svg";
import { Container, Contente } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}


export function Header({onOpenNewTransactionModal}: HeaderProps ) {

  return (
    <Container>
      <Contente>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
        
      </Contente>
    </Container>
  );
}
