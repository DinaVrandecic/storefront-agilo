"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Variant {
  color: string;
  images: string[];
}

interface DetailsPageProps {
  name: string;
  price: string;
  category: string;
  description: string;
  material: string;
  image: string;
  variants: Variant[];
}

export default function DetailsPage({
  name,
  price,
  category,
  description,
  material,
  image,
  variants,
}: DetailsPageProps) {
  const [counter, setCounter] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [displayedImage, setDisplayedImage] = useState<string>(image);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    const selectedVariant = variants.find((variant) => variant.color === color);
    if (selectedVariant && selectedVariant.images.length > 0) {
      setDisplayedImage(selectedVariant.images[0]);
    }
  };
  return (
    <div className="sm:flex justify-center my-10 mx-5">
      <div className="sm:pr-20">
        <Image src={displayedImage} alt={name} width={400} height={400} />
      </div>
      <div>
        <p className="text-2xl sm:text-3xl font-bold text-indigo font-mono mt-10">
          {name}
        </p>
        <p className="text-2xl sm:text-2xl text-black font-mono mt-3">
          {price}
        </p>
        <p className="text-sm sm:text-md text-black font-mono mt-10">
          {description}
        </p>
        <p className="text-sm sm:text-md font-bold text-black font-mono mt-3">
          Material:
        </p>
        <p className="text-sm sm:text-md text-coolgray font-mono">{material}</p>
        <p className="text-sm sm:text-md font-bold text-black font-mono mt-3">
          Colors:
        </p>
        <select
          name="Select color"
          id="1"
          className="mt-10 p-2 outline outline-1 outline-gray text-sm w-full font-mono text-black"
          defaultValue=""
          onChange={(e) => handleColorChange(e.target.value)}
        >
          <option value="" disabled className="text-gray">
            Select color
          </option>
          {variants.map((variant) => (
            <option
              style={{
                color: variant.color === "White" ? "lightgray" : variant.color,
              }}
              key={variant.color}
              value={variant.color}
            >
              {variant.color}
            </option>
          ))}
        </select>
        <select
          name="Select size"
          id="1"
          className="mt-5 p-2 outline outline-1 outline-gray text-sm w-full font-mono text-black"
          defaultValue=""
        >
          <option value="" disabled className="text-gray">
            Select size
          </option>
          <option value="small">S</option>
          <option value="medium">M</option>
          <option value="large">L</option>
        </select>
        <div className="flex justify-between mt-5 outline outline-1 outline-gray py-1">
          <button
            onClick={() => (counter > 1 ? setCounter(counter - 1) : counter)}
            className="px-3"
          >
            -
          </button>
          <div>{counter}</div>
          <button onClick={() => setCounter(counter + 1)} className="px-3">
            +
          </button>
        </div>
        <button className="w-full bg-indigo text-white mt-5 py-1 font-mono">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
