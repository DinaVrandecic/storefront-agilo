import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  name: string;
  price: string;
  category: string;
  material: string;
  image: string;
}

export default function Card({
  name,
  price,
  category,
  material,
  image,
}: CardProps) {
  const newName = name.trim().replaceAll(" ", "_");
  return (
    <div>
      <Link
        href={"/" + category + "/" + newName}
        className="flex flex-col items-center bg-white shadow-md shadow-mauve w-fit h-fit pb-[20px] m-[10px] hover:bg-gray hover:cursor-pointer"
      >
        <div className="m-[20px]">
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        <p className="text-xl font-bold text-black font-mono">{name}</p>
        <p className="text-xl text-black font-mono">{price}</p>
      </Link>
    </div>
  );
}
