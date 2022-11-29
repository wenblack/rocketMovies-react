import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
export function BackButton() {
  return (
    <>
      <Link to="/">
        <FiArrowLeft color="#FF859B" />
      </Link>

      <Link to="/">
        <a
          style={{
            color: "#FF859B"
          }}
        >
          Voltar
        </a>
      </Link>
    </>
  );
}
