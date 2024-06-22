// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import BlueShirt from "../pictures/T-Shirt-blue.webp";

// export default function Card() {
//   return (
//     <div className="flex flex-col items-center bg-lightgray shadow w-fit h-fit pb-[20px] m-[10px] hover:bg-gray hover:cursor-pointer">
//       <div className="m-[20px]">
//         <Image
//           src={BlueShirt}
//           alt="Logo T-Shirt"
//           width={300}
//           height={300}
//           style={{ width: "300px", height: "300px" }}
//         />
//       </div>
//       <p className="text-xl font-bold text-black">Logo T-Shirt</p>
//       <p className="text-xl text-black">30€</p>
//     </div>
//   );
// }

// components/Card.tsx
import React from "react";
import Image from "next/image";

interface CardProps {
  name: string;
  price: string;
  description: string;
  material: string;
  image: string;
}

export default function Card({
  name,
  price,
  description,
  material,
  image,
}: CardProps) {
  return (
    <div className="flex flex-col items-center bg-lightgray shadow w-fit h-fit pb-[20px] m-[10px] hover:bg-gray hover:cursor-pointer">
      <div className="m-[20px]">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          style={{ width: "300px", height: "300px" }}
        />
      </div>
      <p className="text-xl font-bold text-black">{name}</p>
      <p className="text-xl text-black">{price}</p>
    </div>
  );
}
