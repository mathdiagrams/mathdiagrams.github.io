import { useState } from "react";
import Gallery from "./Gallery";
import Header from "./Header";
import Search from "./Search";
import { allDiagrams, allDomains, miniSearch } from "./main";
import Domains from "./Domains";
import { DiagramData } from "./types";

const uniqueDomains = (diagrams: DiagramData[]): string[] =>
  Array.from(new Set(diagrams.map(({ domains }) => domains).flat()));

function Home({ domainColors }: { domainColors: Map<string, string> }) {
  // diagrams displayed in the gallery
  const [diagrams, setDiagrams] = useState(allDiagrams);
  // diagrams matching the search query
  const [matches, setMatches] = useState(allDiagrams);
  const [domains, setDomains] = useState(allDomains);

  return (
    <div className="container mx-auto flex flex-col justify-center items-center m-8">
      <Header />
      <Search
        index={miniSearch}
        onFound={(res) => {
          const indices = res.map(({ id }) => id);
          // if no results, default to all
          if (res.length === 0) {
            setDiagrams(allDiagrams);
            setMatches(allDiagrams);
            setDomains(allDomains);
          } else {
            const filtered = allDiagrams.filter(({ id }) =>
              indices.includes(id)
            );
            const ranked = filtered.sort(
              (a, b) =>
                res.find(({ id }) => b.id === id)!.score -
                res.find(({ id }) => a.id === id)!.score
            );
            setDomains(uniqueDomains(ranked));
            setDiagrams(ranked);
            setMatches(ranked);
          }
        }}
      />
      <Domains
        domains={domains}
        colors={domainColors}
        onSelect={(domains) => {
          const filtered = matches.filter(({ domains: d }) =>
            d.every((domain) => domains.includes(domain))
          );
          setDiagrams(filtered);
        }}
      />
      <Gallery diagrams={diagrams} />
    </div>
  );
}

export default Home;
