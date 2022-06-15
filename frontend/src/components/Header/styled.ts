import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: ${({theme}) => theme.colors.dark};
  padding: 24px;

  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.yellow};
  }
`;