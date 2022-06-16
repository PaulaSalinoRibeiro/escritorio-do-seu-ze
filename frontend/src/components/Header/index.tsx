import { Link, useNavigate } from 'react-router-dom';

import { Container } from './styled';

export function Header() {

  const history = useNavigate();

  return (
    <Container>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
      <button
        type="button"
        onClick={() => history('/registration')}
      >
        Cadastrar Escritório
      </button>
    </Container>
  )
}