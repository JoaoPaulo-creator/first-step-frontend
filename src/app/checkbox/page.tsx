'use client'

import Link from "next/link";
import { useState } from "react"

interface TesteProps {
  name: string | null;
  email: string;
  age: number;

}


export default function CheckboxPage() {

  const [checked, setChecked] = useState(false)
  const [checkName, setCheckName] = useState('')
  const [select, setSelect] = useState('')
  const [teste, setTeste] = useState<TesteProps>()
  const [email, setEmail] = useState('')

  function handleChange(event: any) {

    const { name } = event.target


    /*
    capturo o estado anterior, e retorno um novo estado anterior, mas com valor ao contrario.
    Exemplo: Meu checkbox inicia desmarcado, sendo assim, seu prevState é checked=false,
    quando eu marco o checkbox, a function setChecked() verifica o estado anterior (que no momento é false)
    e retorna true. E quando desmarco, a function setChecked() verifica o estado anterior (que no momento é true)
    e retorna false
    */
    setChecked(prevState => !prevState)
    setCheckName(name)
  }



  async function handleSubmit() {

    const objetoTeste = {
      name: checked ? checkName : null,
      email: email,
      age: parseInt(select),
    }

    const response = await fetch('http://localhost:3333/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(objetoTeste)
    })

    const data = await response.json()
    console.log(data)

    setTeste(data)
  }


  const selectOptions = [
    { id: 'TESTE_1', label: 'Teste 1', age: 26 },
    { id: 'TESTE_2', label: 'Teste 2', age: 27 },
    { id: 'TESTE_3', label: 'Teste 3', age: 28 },
  ]


  return (
    <>
      <Link className="h-6 w-8 bg-slate-300 text-gray-800 p-2 rounded-md" href="/">Voltar</Link>

      <div className="flex flex-row space-x-2 mt-6">
        <input name='nome_checkbox' type="checkbox" onClick={handleChange} />
        <label className="flex flex-row">
          Teste
        </label>
      </div>

      <div className="flex flex-row space-x-2">
        <input className="border-2 color-blue" name='nome_checkbox' type="input" value={email} onChange={(event) => setEmail(event.target.value)} />
        <label className="flex flex-row">
          email
        </label>
      </div>

      <div>
        <select name="Teste" id="" onChange={(event) => setSelect(event.target.value)}>
          <option value=''>Seleciona uma opcao</option>
          {selectOptions.map(option => (
            <option key={option.id} value={option.age}>{option.age}</option>
          ))}
        </select>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        type="submit"
        onClick={handleSubmit}>Botao teste
      </button>
      <h1>{JSON.stringify(teste)}</h1>
    </>
  )
}
