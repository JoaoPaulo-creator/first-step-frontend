'use client'
import { useEffect, useState } from "react"

interface UserProps {
  id: string
  name: string
  age: number
  email: string
}


export default function UsersList() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<UserProps[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch('http://localhost:3333/users');
    const data = await response.json();

    setData(data);
    setLoading(false)
  };


  return (
    <div>
      <a href="/" className="text-blue-500">Voltar para home</a> <br />
      <a href="/users/new-contact" className="text-gray-500 inline-block self-end leading-none">Add contato</a>
      <div>
        {Array.isArray(data) && data.length !== 0 ? data.map((user) => (
          <div key={user.id} className="mt-4 bg-gray-100 p-4" >
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>E-mail: {user.email}</p>
          </div>
        ))
          : <p>Nenhum usuário encontrado</p>}
      </div>
    </div >
  )
}
