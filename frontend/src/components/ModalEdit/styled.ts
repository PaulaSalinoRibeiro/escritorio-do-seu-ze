import styled from 'styled-components';

export const Forms = styled.form`
  background: ${({theme}) => theme.colors.white};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: auto;
  position: absolute;
  top: 10%;
  left: 28%;

  label {
    display: flex;
    justify-content: space-between;
    padding: 18px;
    font-size: 18px;

    input {
      width: 70%;
    }
  }

  button {
    background: ${({theme}) => theme.colors.yellow };
    border: none;
    border-radius: 12px;
    padding: 16px 42px;
    color: ${({theme}) => theme.colors.dark };
    font-weight: 800;
    font-size: 18px;
    margin: 18px auto;
  }
`;