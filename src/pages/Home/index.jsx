import { FiPlus } from "react-icons/fi";
import { Container, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <Section title="Minhas notas">
          <NewNote to="/new">
            <FiPlus />
            Criar nota
          </NewNote>
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "rocketseat" }
              ]
            }}
          />
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "rocketseat" }
              ]
            }}
          />
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "rocketseat" }
              ]
            }}
          />
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "rocketseat" }
              ]
            }}
          />
        </Section>
      </Content>
    </Container>
  );
}
