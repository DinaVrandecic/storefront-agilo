import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import products from "../../public/data.json";
import Link from "next/link";

export default function Category({ params }: { params: { category: string } }) {
  return (
    <div>
      <Header />
      <div className="flex justify-center text-5xl font-bold text-indigo font-mono mt-10">
        {params.category}
      </div>
      <div className="flex justify-center my-10 md:mx-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map(
            (product) =>
              product.category === params.category && (
                <Card
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  category={product.category}
                  material={product.material}
                  image={product.variants[0].images[0]}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}
