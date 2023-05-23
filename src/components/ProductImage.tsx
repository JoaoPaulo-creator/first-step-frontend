import Link from "next/link";

interface ProductProps {
  image: string;
  alt: string;
}

export function ProductImage(props: ProductProps) {
  return (
    <div className="aspec-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:apect-none group:hover:opacity-75 lg:h-80">
      <Link href="/details">
        <img
          src={props.image}
          alt={props.alt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </Link>
    </div>
  );
}
