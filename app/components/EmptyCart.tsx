import React from "react";
import Image from "next/image";
import Link from "next/link";
import empty_cart from "../../public/pictures/empty-cart.png";

export default function EmptyCart() {
  return (
    <div>
      <div className="flex flex-col  justify-center m-5">
        <div className="flex justify-center my-5">
          <Image
            src={empty_cart}
            alt="empty_cart"
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="flex justify-center flex-col items-center">
          <p className="text-2xl text-mono text-bold text-indigo">
            Whoops! Nothing here yet.
          </p>
          <p className="text-center text-xl text-mono text-black">
            Don't worry, our products are just a click away. Start adding items
            to your cart now!
          </p>
          <Link href={"/"}>
            <button className=" bg-indigo text-white mt-5 py-1 font-mono hover:bg-violet p-3">
              Shop now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
