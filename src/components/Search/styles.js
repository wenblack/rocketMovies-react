import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 64px;
  max-width: 630px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
