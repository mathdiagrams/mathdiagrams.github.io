import React from "react";
import Gallery from "./Gallery";
import Header from "./Header";
import Search from "./Search";
import { allDiagrams, miniSearch } from "./main";

function Home() {
  const [diagrams, setDiagrams] = React.useState(allDiagrams);
  return (
    <div className="container mx-auto flex flex-col justify-center items-center m-8">
      <Header />
      <Search
        index={miniSearch}
        onFound={(res) => {
          const indices = res.map(({ id }) => id);
          // if no results, default to all
          if (res.length === 0) setDiagrams(allDiagrams);
          else {
            const filtered = allDiagrams.filter(({ id }) =>
              indices.includes(id)
            );
            const ranked = filtered.sort(
              (a, b) =>
                res.find(({ id }) => b.id === id)!.score -
                res.find(({ id }) => a.id === id)!.score
            );
            setDiagrams(ranked);
          }
        }}
      />
      <Gallery diagrams={diagrams} />
    </div>
  );
}

export default Home;
