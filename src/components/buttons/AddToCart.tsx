'use client'
export function AddToCart() {
  return (
    <button onClick={() => alert('Carrinho de compras')} className="mt-4 bg-gray-700 max-w-2xl px-4 align-middle w-full leading-9 rounded-sm text-gray-100">
      Adicionar ao carrinho
    </button>
  );
}
