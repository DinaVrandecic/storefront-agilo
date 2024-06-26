"use client";
import { useState } from "react";
import Card from "./Card";
import products from "../../public/data.json";
import Link from "next/link";

export default function LeftSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div>
      <div className="my-2 mx-2">
        <button
          className="p-5 w-10 h-10 relative focus:outline-none bg-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute bg-current transform transition duration-500 ease-in-out w-6 h-0.5 bg-black rounded-sm ${
                isOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute bg-current transform transition duration-500 ease-in-out w-6 h-0.5 bg-black rounded-sm ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute bg-current transform transition duration-500 ease-in-out w-6 h-0.5 bg-black rounded-sm ${
                isOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </div>

      <div
        className={`fixed inset-0  top-[56px] bg-black bg-opacity-50 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed left-0 w-full sm:w-64 h-full pt-5  bg-white shadow-md transform transition-transform duration-700 delay-150 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {uniqueCategories.map((category) => (
          <Link href={"/" + category} key={category}>
            <div
              key={category}
              className="text-xl  text-black font-mono cursor-pointer p-3 hover:bg-lightgray active:bg-darkgray active:text-white"
            >
              {category}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
