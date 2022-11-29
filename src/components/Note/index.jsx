import { Container } from "./styles";
import { Tag } from "../Tag";

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <span>{data.stars}</span>
      <textarea readOnly>{data.sinopse}</textarea>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
