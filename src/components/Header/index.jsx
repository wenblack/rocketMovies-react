import { Container, Profile, Brand, Search } from "./styles";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

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
