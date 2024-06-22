import Header from "./components/Header";
import Card from "./components/Card";
import products from "../public/data.json";

export default function Home() {
  return (
    <main className="">
      <Header />
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
