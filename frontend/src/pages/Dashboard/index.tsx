import { useEffect, useState } from 'react';

import { Header } from '../../components/Header'
import { ModalEdit } from '../../components/ModalEdit';

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

export function Dashboard() {
  const [offices, setOffices] = useState<DataProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateItem, setUpdateItem] = useState({} as DataProps);

  useEffect(() => {
    const fetchApi = async () => {
      const url = 'http://localhost:3333/offices'
      const res = await fetch(url);
      const data = await res.json();
      setOffices(data);
    }

    fetchApi();
  }, []);

  const handleEdit = (id: string) => {
    const update = offices.find(item => item.id === id);
    setUpdateItem(update!);
    setIsModalOpen(true);
  }

  const deleteDB = async (id : string) => {
    await fetch(`http://localhost:3333/offices/${id}`, {
      method: 'DELETE'
    });
  }

  const handleDelete = (id: string) => {
    const newOffices = offices.filter(item => item.id !== id);
    setOffices(newOffices);

    deleteDB(id);
  }

  return (
    <Container>
      <Header />
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Aniversário</th>
            <th>Cidade</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Estado</th>
            <th>Endereço</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            offices?.map((item) => (
              <tr key={item.id}>
                <td>{`${item.first_name} ${item.last_name}`}</td>
                <td>{item.birthday}</td>
                <td>{item.city}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.state}</td>
                <td>{item.address}</td>
                <td>{
                    <>
                      <button 
                      type="button" 
                      onClick={() => handleEdit(item.id) }
                    >
                      Editar
                    </button>
                    <button 
                      type="button" 
                      onClick={() => handleDelete(item.id) }
                    >
                      Excluir
                    </button>
                    </>
                    }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      {
        isModalOpen && <ModalEdit data={updateItem} setIsModalOpen={setIsModalOpen} setUpdateItem={setUpdateItem}/>
      }
    </Container>
  )
}