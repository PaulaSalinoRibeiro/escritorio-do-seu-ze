import styled from "styled-components";

export const Container = styled.div`
  background: ${({theme}) => theme.colors.grey};
  height: 100vh;

  table {  
  font-size: 16px;
  border-collapse: collapse;
  margin: 0 auto;
  margin-top: 32px;
  color: ${({theme}) => theme.colors.white};
  
  td, th {
    padding: 10px;
    margin: 0
    width: 100%;
  }

  th {
    position: sticky;
    top: 0;
    background-color: ${({theme}) => theme.colors.grey};
    color: ${({theme}) => theme.colors.yellow};
  }
  button {
      background-color: ${({theme}) => theme.colors.yellow};
      border: none;
      border-radius: 8px;
      color: ${({theme}) => theme.colors.dark};
      font-size: 12px;
      margin-left: 10px;
      padding: 8px
    }
`;