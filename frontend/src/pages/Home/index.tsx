import { useNavigate } from 'react-router-dom';

import { Container } from './styled';

export function Home() {  

  const history = useNavigate();

  return (
    <>
      <Container>
          <h1>Bem vindo(a) ao Escritório do Seu Zé!</h1>
          <button
            type="button"
            onClick={() => history('/dashboard')}
          >
            Ir para escritórios
          </button>
      </Container>
    </>
  )
}
