'use client'
import { useEffect, useState } from "react"

export interface UserProps {
  id: string
  name: string
  age: number
  email: string
}


export default function UsersList() {

  //const [loading, data] = useFetch('http://localhost:3333/users')
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<UserProps[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3333/users');
      const responseData: UserProps[] = await response.json();

      setLoading(false)
      setData(responseData)
    })()
  }, []);

  if (loading) {
    return (
      <div className="flex items-midle justify-center h-screen text-lg">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  async function handleDelete(id: string) {
    await fetch(`http://localhost:3333/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    /*

    Aqui eu consigo filtrar todos os usuarios que não foram deletados
    É realizado uma filtragem em todos os items que estão sendo renderizados


    Se os id's que estão sendo filtrados não forem iguais ao id do usuario

    */
    setData(prevData => prevData.filter((data: { id: string }) => data.id !== id))
  }


  return (
    <div>
      <a href="/" className="text-blue-500">Voltar para home</a> <br />
      <a href="/users/new-contact" className="text-gray-500 inline-block self-end leading-none">Add contato</a>
      <div>
        {Array.isArray(data) && data.length !== 0 ? data.map((user) => (
          <div key={user.id} className="mt-4 bg-gray-100 p-4" >

            <div className="flex text-right justify-end">

              <a href={`/users/details/${user.id}`} className="mr-4">Detalhes</a>
              <button className="rounded bg-slate-700 text-gray-300 p-2" onClick={() => handleDelete(user.id)}>Apagar contato</button>

            </div>

            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>E-mail: {user.email}</p>
          </div>
        ))
          : <p className="flex items-center justify-center">Nenhum usuário encontrado</p>}
      </div>
    </div >
  )
}
