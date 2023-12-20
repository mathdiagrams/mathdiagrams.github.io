import Gallery from "./Gallery";
import Search from "./Search";
import { diagrams } from "./main";

function Home() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center m-8">
      <h1 className="text-6xl font-bold leading-loose text-black dark:text-white">
        Math Diagrams
      </h1>
      <p className="prose prose-lg dark:prose-invert font-light">
        Your one-stop-shop for mathematical visualization.
      </p>
      <Search />
      <Gallery diagrams={diagrams} />
    </div>
  );
}

export default Home;
