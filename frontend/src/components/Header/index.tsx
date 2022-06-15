import { Link } from 'react-router-dom';

import { Container } from './styled';

export function Header() {
  return (
    <Container>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </Container>
  )
}