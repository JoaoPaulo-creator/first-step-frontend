import Link from "next/link";

interface ProductsProps {
  name: string;
  color: string;
  price: string;
}

export function ProductInfo(props: ProductsProps) {
  return (
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          <Link href="/details">
            <span aria-hidden="true" className="absolue inset-0" />
            {props.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{props.color}</p>
      </div>
      <p className="text-md text-gray-700">{props.price}</p>
    </div>
  );
}
