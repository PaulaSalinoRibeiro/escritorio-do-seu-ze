
import { Container } from './styled';

interface DataProps {
  id: string;
  first_name: string;
  last_name: string;
  birthday: string;
  city: string;
  email: string;
  phone: string;
  state: string;
  address: string;
}

interface Props {
  data: DataProps
}

export function Cards({data}: Props) {
  return (
    <Container id={data.id}>
      <p>{data.first_name}</p>
      <p>{data.last_name}</p>
      <p>{data.birthday}</p>
      <p>{data.city}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
      <p>{data.state}</p>
      <p>{data.address}</p>
    </Container>
  )
}