import { Container } from "./styles";

export function Search({ ...rest }) {
  return (
    <Container>
      <input {...rest} />
    </Container>
  );
}
