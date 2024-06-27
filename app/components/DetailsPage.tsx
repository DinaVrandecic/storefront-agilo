"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "./CartContext";
import RightSidebar from "./RightSidebar";

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
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>(
    variants[0]?.color || ""
  );
  const [displayedImage, setDisplayedImage] = useState<string>(
    variants[0]?.images[0] || image
  );
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const { addToCart } = useCart();

  useEffect(() => {
    if (selectedColor) {
      const selectedVariant = variants.find(
        (variant) => variant.color === selectedColor
      );
      if (selectedVariant && selectedVariant.images.length > 0) {
        setDisplayedImage(selectedVariant.images[0]);
        setCurrentImageIndex(0);
      }
    }
  }, [selectedColor, variants]);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handlePreviousImage = () => {
    const selectedVariant = variants.find(
      (variant) => variant.color === selectedColor
    );
    if (selectedVariant) {
      const newIndex =
        (currentImageIndex - 1 + selectedVariant.images.length) %
        selectedVariant.images.length;
      setCurrentImageIndex(newIndex);
      setDisplayedImage(selectedVariant.images[newIndex]);
    }
  };

  const handleNextImage = () => {
    const selectedVariant = variants.find(
      (variant) => variant.color === selectedColor
    );
    if (selectedVariant) {
      const newIndex = (currentImageIndex + 1) % selectedVariant.images.length;
      setCurrentImageIndex(newIndex);
      setDisplayedImage(selectedVariant.images[newIndex]);
    }
  };

  const handleAddToCart = () => {
    if (!selectedColor) {
      toast.error("Please select a color", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    if (!selectedSize) {
      toast.error("Please select a size.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    addToCart({
      name,
      price,
      image: displayedImage,
      quantity: counter,
      color: selectedColor,
      size: selectedSize,
    });
    toast.success(`${counter} ${name} added to cart!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const selectedVariant = variants.find(
    (variant) => variant.color === selectedColor
  );
  const hasMultipleImages = selectedVariant
    ? selectedVariant.images.length > 1
    : false;

  return (
    <div className="sm:flex justify-center my-10 mx-5 sm:my-[68px]">
      <div className="flex flex-col justify-center sm:pr-20">
        {hasMultipleImages && (
          <div className="relative">
            <button
              onClick={handlePreviousImage}
              className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-gray bg-opacity-50 p-2 rounded-full text-black transition-transform duration-100 ease-in hover:scale-125 hover:z-10 hover:cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <Image
              src={displayedImage}
              alt={name}
              width={500}
              height={500}
              style={{ objectFit: "contain", width: "370px" }}
            />
            <button
              onClick={handleNextImage}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray bg-opacity-50 p-2 rounded-full text-black transition-transform duration-100 ease-in hover:scale-125 hover:z-10 hover:cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
        {!hasMultipleImages && (
          <Image
            src={displayedImage}
            alt={name}
            width={500}
            height={500}
            style={{ objectFit: "contain", width: "370px" }}
          />
        )}
      </div>
      <div className="flex items-center justify-center">
        <div>
          <p className="text-2xl sm:text-3xl font-bold text-indigo font-mono mt-10 sm:mt-0">
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
          <p className="text-sm sm:text-md text-coolgray font-mono">
            {material}
          </p>
          <select
            name="Select color"
            id="1"
            className="mt-10 p-2 outline outline-1 outline-gray text-sm w-full font-mono text-black"
            defaultValue=""
            onChange={(e) => handleColorChange(e.target.value)}
          >
            {variants.map((variant) => (
              <option
                style={{
                  color:
                    variant.color === "White" ? "lightgray" : variant.color,
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
            onChange={(e) => handleSizeChange(e.target.value)}
          >
            <option value="" disabled className="text-gray">
              Select size
            </option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
          <div className="flex justify-between mt-5 outline outline-1 outline-gray py-1">
            <button
              onClick={() => (counter > 1 ? setCounter(counter - 1) : counter)}
              className="px-3 text-black"
            >
              -
            </button>
            <div className="text-black">{counter}</div>
            <button
              onClick={() => setCounter(counter + 1)}
              className="px-3 text-black"
            >
              +
            </button>
          </div>
          <button
            className="w-full bg-indigo text-white mt-5 py-1 font-mono hover:bg-violet"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            toastStyle={
              selectedSize
                ? { backgroundColor: "#8F58EE" }
                : { backgroundColor: "white" }
            }
          />
        </div>
      </div>
    </div>
  );
}
