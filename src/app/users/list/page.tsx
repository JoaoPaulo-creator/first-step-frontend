

interface UserProps {
  id: string
  name: string
  age: number
  email: string
}


export default async function UsersList() {

  const response = await fetch('http://localhost:3333/users')
  const data = await response.json()


  return (
    <div>
      <a href="/" className="text-blue-500">Voltar para home</a> <br />
      <a href="/users/new-contact" className="text-gray-500 inline-block self-end leading-none">Add contato</a>
      {data.map((user: UserProps) => (
        <div key={user.id} className="mt-4 bg-gray-100 p-4" >
          <p>Nome: {user.name}</p>
          <p>Idade: {user.age}</p>
          <p>E-mail: {user.email}</p>
        </div>
      ))
      }
    </div >
  )
}
