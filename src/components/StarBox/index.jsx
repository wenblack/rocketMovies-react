import { Container } from "./styles";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";

export function StarBox() {
  return (
    <Container>
      <IoIosStar size={20} color={"#FF859B"} />
      <IoIosStar size={20} color={"#FF859B"} />
      <IoIosStar size={20} color={"#FF859B"} />
      <IoIosStar size={20} color={"#FF859B"} />
      <IoIosStarOutline size={20} color={"#FF859B"} />
    </Container>
  );
}
