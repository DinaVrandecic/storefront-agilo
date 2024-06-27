import React from "react";
import Image from "next/image";
import Header from "./components/Header";
import notFound from "../public/pictures/not-found.jpg";

export default function NotFound() {
  return (
    <div>
      <div className="flex justify-center">
        <Image
          src={notFound}
          alt="not-found"
          width={300}
          height={300}
          style={{ objectFit: "contain", height: "400px" }}
        />
        <div className="flex justify-center flex-col items-center">
          <p className="text-9xl text-mono text-mauve">404</p>
          <p className="text-2xl text-mono text-indigo">
            Uh-oh, something's missing!
          </p>
          <p className="text-xl text-mono text-black">
            The page you’re trying to reach is not available. Maybe it’s taking
            a coffee break?
          </p>
          <button className="w-full bg-indigo text-white mt-5 py-1 font-mono hover:bg-violet">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
}
