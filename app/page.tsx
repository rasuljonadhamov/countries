import Countries from "./components/Countries";
import Header from "./components/Header";
import Hero from "./components/Hero";

async function getData() {
  try {
    const res = await fetch(
      "https://frontend-mentor-apis-6efy.onrender.com/countries"
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();

    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="container h-[100vh] bg-slate-50 ">
      <Header title="Where in the world?" />
      <Hero />

      <Countries countries={data} />
    </div>
  );
}
