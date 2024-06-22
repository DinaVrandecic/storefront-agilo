import Header from "./components/Header";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="">
      <Header></Header>
      <div className="flex justify-center mt-10">
        <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </section>
      </div>
    </main>
  );
}
