'use client'

import { ChangeEvent, FormEvent, useState } from "react"

export default function Price() {

  const [inputValue, setInputValue] = useState<string>('')
  const [content, setContent] = useState<string>('')


  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  function handleClick() {
    if (inputValue === 'Joao') {
      return setContent(`Ola, ${inputValue}`) // por algum motivo que ainda nao sei, o estado so atualiza quando uso o return
    }

    setContent(inputValue)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    handleClick()
    setInputValue('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} className="border border-gray-300 rounded-lg px-5 py-3" onChange={handleChange} />
        <button type="submit" onClick={handleClick} className="bg-blue-500 rounded-lg px-5 py-3 ml-4">TESTE</button>
      </form>
      <p className="bg-slate-100 rounded-lg px-5 py-3 mt-4 text-lg">{content}</p>
    </div>
  )
}
