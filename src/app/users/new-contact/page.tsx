'use client'

import { useState } from "react"

export default function NewContact() {

  const [firstName, setFirstName] = useState<string>('')


  return (
    <div>
      <a href="/users/list" className="text-gray-900 bg-slate-200">Contatos</a>
      <h1>NewContact</h1>

      <label htmlFor="first-name">
        First name:
        <input className="rounded border border-gray-300 ml-2" value={firstName} type="text" onChange={(event) => setFirstName(event.target.value)} placeholder="First name" />
      </label>
      {firstName !== '' && <p>Your name is {firstName}!</p>}

    </div>
  )
}
