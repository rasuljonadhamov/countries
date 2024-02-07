import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="container h-[100vh] bg-slate-50 ">
      <Header title="Where in the world?" />
      <Hero />
    </div>
  );
}
