import { ChangeEvent } from 'react';

import { Forms } from './styled'

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
  data: DataProps;
  setIsModalOpen: (value: boolean) => void;
  setUpdateItem: (value: DataProps) => void;
}

export function ModalEdit({data, setIsModalOpen, setUpdateItem}: Props) {

  const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => {
    setUpdateItem({ ...data, [name]: value});
  };

  const updateDB = async (id: string) => {
    await fetch(`http://localhost:3333/offices/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  const handleClick = (id: string) => {
    updateDB(id);
    setIsModalOpen(false);
  }

  return (
    <Forms>
      <label htmlFor="first_name">
        Nome:
        <input id="first_name" name="first_name" value={data.first_name} onChange={handleChange}/>
      </label>
      <label htmlFor="last_name">
        Sobrenome:
        <input id="last_name" name="last_name" value={data.last_name} onChange={handleChange}/>
      </label>
      <label htmlFor="birthday">
        Aniversário:
        <input id="birthday" name="birthday" placeholder="30-12-2000" value={data.birthday} onChange={handleChange}/>
      </label>
      <label htmlFor="city">
        Cidade:
        <input id="city" name="city" value={data.city} onChange={handleChange}/>
      </label>
      <label htmlFor="email">
        Email:
        <input id="email" name="email" value={data.email} onChange={handleChange}/>
      </label>
      <label htmlFor="phone">
        Telefone:
        <input id="phone" name="phone" value={data.phone} onChange={handleChange}/>
      </label>
      <label htmlFor="state">
        Estado:
        <input id="state" name="state" value={data.state} onChange={handleChange}/>
      </label>
      <label htmlFor="address">
        Endereço:
        <input id="address" name="address" value={data.address} onChange={handleChange}/>
      </label>
      <button
        type="button"
        onClick={() => handleClick(data.id) }
      >
        Finalizar
      </button>
    </Forms>
  )
}