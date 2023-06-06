'use client'

import { useState } from "react"

export default function NewContact() {

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [age, setAge] = useState<string>('')

  function handleSubmit(e: any) {
    e.preventDefault();

    const user = {
      name: name,
      email: email,
      age: parseInt(age!),
    }

    console.log(user)
    fetch('http://localhost:3333/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        // gambiarra temporaria
        const erroMessage = 'User already exists'
        if (data.error !== erroMessage) {
          window.location.href = '/users/list'
        }
      }).catch(error => console.log(error))
  };


  return (
    <>
      <a href="/users/list" className="text-lg">Voltar</a>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          {/* line clamp serve para quebar a linha */}
          <input className="border rounded-sm line-clamp-2 px-1"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength={20}
            placeholder="Digite seu nome"
          />
        </div>
        <div>
          <label htmlFor="salary">Email:</label>
          <input
            className="border rounded-sm line-clamp-2 px-1"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Digite seu email"
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input className="border rounded-sm line-clamp-2 px-1"
            type="age"
            id="age"
            name="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            maxLength={3}
            minLength={1}
            placeholder="Digite sua idade"
          />
        </div>
        <button type="submit" className="rounded-lg bg-blue-500 py-2 px-4 text-gray-100 mt-4">Submit</button>
      </form>
    </>
  );
}
