"use client";
import { useState, useEffect, use } from "react";
import { useCart } from "./CartContext";
import CartCard from "./CartCard";
import EmptyCart from "./EmptyCart";

export default function RightSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const { cart, getQuantityAllItems } = useCart();

  useEffect(() => {
    setQuantity(getQuantityAllItems());
  }, [cart, getQuantityAllItems]);

  const subtotal = cart.reduce((total, item) => {
    const itemTotal = parseFloat(item.price) * item.quantity;
    return total + itemTotal;
  }, 0);

  return (
    <div>
      <div className="my-2 mx-2 relative">
        <button
          className="p-5 w-10 h-10 focus:outline-none flex justify-center items-center relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="black"
              className="size-5"
            >
              <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
            </svg>
          </div>
          {quantity > 0 && (
            <div className="absolute z-100 bg-red-500 rounded-full w-4 h-4 text-xs top-[3px] left-[20px] text-white">
              {quantity}
            </div>
          )}
        </button>
      </div>

      <div
        className={`fixed inset-0 top-[56px] bg-black bg-opacity-50 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed right-0 w-full sm:w-96 h-full bg-white shadow-md transform transition-transform duration-700 delay-150 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ maxHeight: "calc(100vh - 56px)" }}
      >
        {cart.length === 0 ? (
          <EmptyCart></EmptyCart>
        ) : (
          <div className="border-t border-mauve h-full overflow-y-auto">
            {cart.map((item) => (
              <CartCard key={item.name} {...item} />
            ))}
            <div className="mx-2 my-4">
              <div className="flex justify-between font-mono text-black">
                <p className="font-mono text-black">Subtotal:</p>
                <p className="font-bold font-mono text-black">{subtotal}€</p>
              </div>
              <div className="flex justify-between  ">
                <p className="font-mono text-black">Shipping:</p>
                <p className="font-mono text-green">FREE</p>
              </div>
              <div className="flex justify-between pt-2 ">
                <p className="font-bold font-mono text-black text-xl">Total:</p>
                <p className="font-bold font-mono text-black text-xl">
                  {subtotal}€
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
