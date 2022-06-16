import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Container } from './styled';

interface Data {
  first_name: string;
  last_name: string;
  birthday: string;
  city: string;
  email: string;
  phone: string;
  state: string;
  address: string;
}

export function Registration() {
  const [ newOffice, setNewOffice ] = useState(
    { first_name: '', last_name: '', birthday: '', city: '', email: '', phone: '', state: '', address: '' }
    )
  
  const history = useNavigate();

  const handleChange = ({ target : {name, value} }: ChangeEvent<HTMLInputElement>) => {
    setNewOffice({ ...newOffice, [name]: value});
  };

  const createDb = async(data: Data) => {
    const id = uuidv4();
    await fetch(`http://localhost:3333/offices/${id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  const handleClick = () => {
    createDb(newOffice);
    history('/Dashboard');
  }

  return (
    <Container>
      <form>
        <label htmlFor="first_name">
          Nome:
          <input id="first_name" name="first_name" value={newOffice.first_name} onChange={handleChange}/>
        </label>
        <label htmlFor="last_name">
          Sobrenome:
          <input id="last_name" name="last_name" value={newOffice.last_name} onChange={handleChange}/>
        </label>
        <label htmlFor="birthday">
          Aniversário:
          <input id="birthday" name="birthday" placeholder="30-12-2000" value={newOffice.birthday} onChange={handleChange}/>
        </label>
        <label htmlFor="city">
          Cidade:
          <input id="city" name="city" value={newOffice.city} onChange={handleChange}/>
        </label>
        <label htmlFor="email">
          Email:
          <input id="email" name="email" value={newOffice.email} onChange={handleChange}/>
        </label>
        <label htmlFor="phone">
          Telefone:
          <input id="phone" name="phone" value={newOffice.phone} onChange={handleChange}/>
        </label>
        <label htmlFor="state">
          Estado:
          <input id="state" name="state" value={newOffice.state} onChange={handleChange}/>
        </label>
        <label htmlFor="address">
          Endereço:
          <input id="address" name="address" value={newOffice.address} onChange={handleChange}/>
        </label>
        <button
          type="button"
          onClick={() => handleClick() }
        >
          Cadastrar
        </button>
      </form>
    </Container>
  )
}