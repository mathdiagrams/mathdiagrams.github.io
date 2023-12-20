import { useEffect, useState } from "react";
import Gallery from "./Gallery";
import Search from "./Search";
import { Diagram } from "./types";

function Home() {
  const [diagrams, setDiagrams] = useState<Diagram[]>([]);
  useEffect(() => {
    async function fetchBundle() {
      const bundleURL = new URL("/diagrams/diagrams.json", import.meta.url)
        .href;
      const response = await fetch(bundleURL);
      const bundle = await response.json();
      setDiagrams([
        bundle[0],
        bundle[0],
        bundle[0],
        bundle[0],
        bundle[0],
        bundle[0],
        bundle[0],
        bundle[0],
        bundle[0],
      ]);
    }
    fetchBundle();
  }, []);
  return (
    <>
      <h1 className="text-6xl font-bold leading-loose text-black dark:text-white">
        Math Diagrams
      </h1>
      <p className="prose prose-lg dark:prose-invert font-light">
        Your one-stop-shop for mathematical visualization.
      </p>
      <Search />
      <Gallery diagrams={diagrams} />
    </>
  );
}

export default Home;
