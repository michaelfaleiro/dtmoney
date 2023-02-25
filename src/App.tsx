import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";


import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/index";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionsModal, setIsNewTransactionsModal] = useState(false);

  function HandleOpenNewTransactionsModal() {
    setIsNewTransactionsModal(true);
  }

  function HandleCloseNewTransactionsModal() {
    setIsNewTransactionsModal(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={HandleOpenNewTransactionsModal} />

      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionsModal} onRequestClose={HandleCloseNewTransactionsModal} />

      <GlobalStyle />
    </>
  );
}

export default App;
