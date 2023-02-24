import logoImg from "../../assets/logo.svg";
import { Container, Contente } from "./styles";

export function Header() {
  return (
    <Container>
      <Contente>
        <img src={logoImg} alt="dt money" />
        <button type="button">Nova Transação</button>
      </Contente>
    </Container>
  );
}
