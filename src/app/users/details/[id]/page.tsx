'use client'


import next from "next/types"
import { useEffect, useState } from "react"

export interface UserProps {
  name: string
  age: number
  email: string
}


// TODO: Estudar uma forma de carregar os dados do usuario
export default function UserDetails() {

  const [user, setUser] = useState<UserProps | string>()

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3333/users/abb37afc-fea6-418c-bfd6-3a6bcd16c552')
      const data = await response.json()
      console.log(data)
      setUser(data.length === 0 ? 'User not found' : data)
    }
    )()
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Details</h1>
      <a href="/users/list" className="weight-bold bg-slate-800 text-gray-200 p-4">VOLTAR</a>
      <p className="text-black mt-10">{
        JSON.stringify(user)
      }</p>
    </div>
  )
}
