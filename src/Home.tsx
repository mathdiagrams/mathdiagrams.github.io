import Gallery from "./Gallery";
import Header from "./Header";
import Search from "./Search";
import { diagrams } from "./main";

function Home() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center m-8">
      <Header />
      <Search />
      <Gallery diagrams={diagrams} />
    </div>
  );
}

export default Home;
