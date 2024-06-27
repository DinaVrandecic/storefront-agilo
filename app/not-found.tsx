import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import notFound from "../public/pictures/not-found.jpg";

export default function NotFound() {
  return (
    <div>
      <Header></Header>
      <div className="flex flex-col sm:flex-row justify-center mb-20">
        <div className="flex justify-center sm:mr-20">
          <Image
            src={notFound}
            alt="not-found"
            width={300}
            height={300}
            style={{ objectFit: "contain", height: "400px" }}
          />
        </div>

        <div className="flex justify-center flex-col items-center">
          <p className="text-9xl text-mono text-mauve">404</p>
          <p className="text-2xl text-mono text-bold text-indigo">
            Uh-oh, something's missing!
          </p>
          <p className="text-center text-xl text-mono text-black">
            The page you&apos;re trying to reach is not available. Maybe it's
            taking a coffee break?
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
