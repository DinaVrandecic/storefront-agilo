import Header from "./components/Header";
import Card from "./components/Card";
import products from "../public/data.json";
import { BiCategory } from "react-icons/bi";

export default function Home() {
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <main className="">
      <Header />
      {uniqueCategories.map((category) => (
        <li key={category} className="cursor-pointer">
          {category}
        </li>
      ))}
      <div className="flex justify-center mt-10">
        <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Card
              key={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              material={product.material}
              image={product.variants[0].images[0]}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
