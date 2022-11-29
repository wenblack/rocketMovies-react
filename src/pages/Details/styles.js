import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px, auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 64px 0;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding-inline: 100px;
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 24px;
    margin-bottom: 24px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  text-align: center;
  > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }
  span {
    font-size: 16px;
  }
  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin: 24px 0;
`;
