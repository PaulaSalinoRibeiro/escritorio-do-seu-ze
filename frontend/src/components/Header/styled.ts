import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: ${({theme}) => theme.colors.dark};
  padding: 24px;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.yellow};
  }

  button {
    background: ${({theme}) => theme.colors.yellow };
    border: none;
    border-radius: 12px;
    color: ${({theme}) => theme.colors.dark };
    padding: 8px;
    font-size: 16px;
    font-weight: 600;
  }
`;