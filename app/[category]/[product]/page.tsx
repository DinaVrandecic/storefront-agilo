import React from "react";
import Header from "../../components/Header";
import products from "../../../public/data.json";
import Card from "@/app/components/Card";
import Link from "next/link";

interface pageProps {
  params: {
    category: string;
    newName: string;
  };
}

export default function Product({ params }: pageProps) {
  return (
    <div>
      <Header />
      <div className="text-xl font-bold text-black font-mono">
        {params.newName}
      </div>
    </div>
  );
}
