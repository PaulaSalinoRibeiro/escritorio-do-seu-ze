import styled from "styled-components";

export const Container = styled.div`
  background: ${({theme}) => theme.colors.dark };
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${({theme}) => theme.colors.white };
    font-size: 42px;
  }

  button {
    background: ${({theme}) => theme.colors.yellow };
    border: none;
    border-radius: 12px;
    padding: 18px 42px;
    color: ${({theme}) => theme.colors.dark };
    font-weight: 800;
    font-size: 18px;
  }
`;
