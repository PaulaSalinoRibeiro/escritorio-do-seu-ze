import styled from "styled-components";

export const Container = styled.div`
  background: ${({theme}) => theme.colors.grey};
  height: 100%;
  position: relative;

  table {  
  font-size: 16px;
  border-collapse: collapse;
  height: 100%;
  margin: 0 auto;
  margin-top: 32px;
  color: ${({theme}) => theme.colors.white};
  
  td, th {
    padding: 8px;
    margin: 0
    width: 80%;
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
      margin-left: 2px;
      padding: 8px
    }
`;