'use client'

export default async function GitInfo() {

  const request = await fetch('http://localhost:3332/prices');
  const data = await request.json();

  const { name, code, bid } = data.USDBRL
  return (
    <div>

      {/*
      justify move o elemento no eixo X, enquanto que items no eixo Y

      No css puro seria align-items e justify-content (acredito eu)
      */}
      <div
        className="h-16 w-32 bg-red-300 text-black text-center flex items-center justify-center">
        TESTE
      </div>


      <p>{name}</p>
      <p className="text-2xl text-gray-900 mt-2">

        {/* Se eu quiser passar o objeto inteiro que vem do back, para ser renderizado no front
        devo usar o JSON.stringify.
        Passando as chaves desestruturadas, funciona sem precisar usar o JSON.stringify.
         */}
        {code} R$ {bid}
      </p>
    </div>
  );
}
