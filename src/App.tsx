import { useEffect, useState } from "react";
import "./App.css";
import Gallery from "./Gallery";
import Search from "./Search";
import { Diagram } from "./types";

function App() {
  const [diagrams, setDiagrams] = useState<Diagram[]>([]);
  useEffect(() => {
    async function fetchBundle() {
      const response = await fetch("./diagrams/diagrams.json");
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
  }),
    [];
  return (
    <>
      <h1 className="extra-bold">Math Diagrams</h1>
      <p className="text-slate">
        Your one-stop-shop for mathematical visualization.
      </p>
      <Search />
      <Gallery diagrams={diagrams} />
    </>
  );
}

export default App;
