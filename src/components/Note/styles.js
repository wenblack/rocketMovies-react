import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: rgba(255, 133, 155, 0.05);
  height: 222.85px;
  border: none;
  border-radius: 10px;
  overflow-y: hidden;

  padding: 22px;
  margin-bottom: 16px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 8px;
  }
  > textarea {
    text-align: justify;
    width: 100%;
    background-color: transparent;
    border: none;
    overflow-y: hidden;
    text-align: justify;
    resize: none;
    margin-top: 15px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  > footer {
    width: 100%;
    display: flex;
    margin-top: 15px;
    margin-bottom: 10px;
  }
`;
