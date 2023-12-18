import "./App.css";
import Gallery from "./Gallery";
import Search from "./Search";

export type Diagram = {
  name: string;
  notes: string;
  previewURI: string;
};

function App() {
  return (
    <>
      <h1 className="extra-bold">Math Diagrams</h1>
      <p className="text-slate">
        Your one-stop-shop for mathematical diagrams.
      </p>
      <Gallery />
      <Search />
    </>
  );
}

export default App;
