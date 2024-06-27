import React from "react";
import Image from "next/image";
import { useCart } from "./CartContext";

interface CartCardProps {
  name: string;
  price: string;
  image: string;
  quantity: number;
  color: string;
  size: string;
}

export default function CartCard({
  name,
  price,
  image,
  quantity,
  color,
  size,
}: CartCardProps) {
  const { removeFromCart } = useCart();
  const newPrice = parseFloat(price) * quantity;

  const handleRemove = () => {
    removeFromCart(name, color, size);
  };

  return (
    <div className="flex p-2 border-b border-mauve ">
      <Image
        src={image}
        alt={name}
        width={500}
        height={500}
        style={{ objectFit: "contain", width: "90px" }}
      />
      <div className="ml-2 grow">
        <div className="flex justify-between">
          <p className="text-black font-bold font-mono text-xl py-1">
            {newPrice}€
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5 cursor-pointer"
            onClick={handleRemove}
          >
            <path
              fillRule="evenodd"
              d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-black font-mono text-lg">{name}</p>
        <div className="flex justify-start">
          <p className="text-darkgray font-mono pr-4">{size}</p>
          <p className="text-darkgray font-mono pr-4">{color}</p>
          <p className="text-darkgray font-mono">{quantity}x</p>
          <p className="text-darkgray font-mono pr-3 pl-2">{price}</p>
        </div>
      </div>
    </div>
  );
}
