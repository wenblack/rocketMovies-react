import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const Form = styled.form`
  max-width: 1137px;
  margin: 38px auto;
  padding: 0 80px;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;
  }

  a {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  h1 {
    margin-top: 24px;
  }
`;

export const InputWrapper = styled.div`
display: flex;
gap: 40px;
height: 55px;
`
export const DarkButton = styled.button`
  width: 100%;
  background-color: #0D0C0F;
  color: ${({ theme }) => theme.COLORS.PINK};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  margin-bottom: 42px;
  &:disabled {
    opacity: 0.5;
  }
`;
