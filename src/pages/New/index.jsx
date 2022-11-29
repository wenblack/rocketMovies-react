import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Form, InputWrapper, DarkButton } from "./styled";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";

export function New() {
  return (
    <Container>
      <Header></Header>

      <main>
        <Form>
          <BackButton />
          <header>
            <h1>Novo Filme</h1>
          </header>

          <InputWrapper>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </InputWrapper>

          <Textarea placeholder="Observações" />



          <Section title="Categorias">
            <div className="tags" style={{
              padding: '16px',
              height: '88px',
              background: '#0D0C0F',
              gap: '24px',
              justifyContent: 'flex-start',
              alignItems: 'center'

            }}>
              <NoteItem value="Drama" />
              <NoteItem isNew placeholder="Nova Categoria" />
            </div>
            <div className="buttons"
              style={{
                display: 'flex',
                height: '88px',
                gap: '24px',
                justifyContent: 'flex-start',
                marginTop: '40px',
                alignItems: 'center'
              }}


            >
              <DarkButton>Excluir Filme</DarkButton>
              <Button title="Salvar alterações" />
            </div>

          </Section>


        </Form>
      </main>
    </Container>
  )
}