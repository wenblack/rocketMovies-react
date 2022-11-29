import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px, auto;
  grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  overflow-y: auto;
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 50px;
`;
export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  > h1 {
    font-weight: 400;
    font-size: 32px;
    line-height: 42px;
  }
`;

export const NewNote = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 207px;
  height: 48px;
  border-radius: 8px;

  svg {
    margin-right: 8px;
  }
`;
