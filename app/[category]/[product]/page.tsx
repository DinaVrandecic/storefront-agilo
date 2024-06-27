import React from "react";
import Header from "../../components/Header";
import products from "../../../public/data.json";
import Image from "next/image";
import DetailsPage from "@/app/components/DetailsPage";
import Link from "next/link";

interface pageProps {
  params: {
    category: string;
    product: string;
  };
}

import { notFound } from "next/navigation";

export default function Product({ params }: pageProps) {
  const newName = params.product.trim().replaceAll("_", " ");
  if (!products.some((product) => product.name === newName)) {
    return notFound();
  }

  return (
    <div>
      <Header />
      {products.map(
        (product) =>
          product.name === newName && (
            <DetailsPage
              key={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              description={product.description}
              material={product.material}
              image={product.variants[0].images[0]}
              variants={product.variants}
            />
          )
      )}
    </div>
  );
}
