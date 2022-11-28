import { Container, Profile, Brand } from "./styles";
import { Search } from "../Search";

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Search placeholder="Pesquisar pelo título" />

      <Profile to="/profile">
        <img src="https://github.com/wenblack.png" alt="Foto do usuário" />

        <div>
          <strong>Wender Barbosa</strong>
          <a>Sair</a>
        </div>
      </Profile>
    </Container>
  );
}
