

interface UserProps {
  id: string
  name: string
  age: number
  email: string
}


export default async function UsersList() {

  const response = await fetch('http://localhost:3002/users')
  const data: UserProps[] = await response.json()


  return (
    <div>
      <a href="/" className="text-blue-500">Voltar para home</a>
      <a href="/users/new-contact" className="text-gray-500 inline-block self-end leading-none">Add contato</a>
      {data.map((user) => (
        <div className="mt-4 bg-gray-100 p-4" key={user.id}>
          Nome: {user.name} <br />
          Idade: {user.age} <br />
          Email: {user.email} <br />
        </div>
      ))}
    </div>
  )
}
