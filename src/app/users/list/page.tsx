'use client'
import { useFetch } from "@/hooks/use-fetch"

export interface UserProps {
  id: string
  name: string
  age: number
  email: string
}


export default function UsersList() {

  const [loading, data] = useFetch('http://localhost:3333/users')

  if (loading) {
    return (
      <div className="flex items-midle justify-center h-screen text-lg">
        <div className="text-center">Loading...</div>
      </div>
    )
  }


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
          : <p className="flex items-center justify-center">Nenhum usuário encontrado</p>}
      </div>
    </div >
  )
}
