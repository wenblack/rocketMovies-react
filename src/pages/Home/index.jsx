import { FiPlus } from "react-icons/fi";
import { Container, Content, NewNote, Heading } from "./styles";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { StarBox } from "../../components/StarBox";

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <Heading>
          <h1>Meus Filmes</h1>
          <NewNote to="/new">
            <FiPlus />
            Adicionar filme
          </NewNote>
        </Heading>

        <Note
          data={{
            title: "Interestellar",
            stars: <StarBox />,
            sinopse: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se
            `,
            tags: [
              { id: "1", name: "Ficção Científica" },
              { id: "2", name: "Drama" },
              { id: "3", name: "Família" }
            ]
          }}
        />
        <Note
          data={{
            title: "Interestellar",
            stars: <StarBox />,
            sinopse: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se `,
            tags: [
              { id: "1", name: "Ficção Científica" },
              { id: "2", name: "Drama" },
              { id: "3", name: "Família" }
            ]
          }}
        />
        <Note
          data={{
            title: "Interestellar",
            stars: <StarBox />,
            sinopse: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se`,
            tags: [
              { id: "1", name: "Ficção Científica" },
              { id: "2", name: "Drama" },
              { id: "3", name: "Família" }
            ]
          }}
        />
        <Note
          data={{
            title: "Interestellar",
            stars: <StarBox />,
            sinopse: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se`,
            tags: [
              { id: "1", name: "Ficção Científica" },
              { id: "2", name: "Drama" },
              { id: "3", name: "Família" }
            ]
          }}
        />
      </Content>
    </Container>
  );
}
