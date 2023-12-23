import { useState } from "react";
import Gallery from "./Gallery";
import Header from "./Header";
import Search from "./Search";
import { allDiagrams, allDomains, miniSearch, uniqueDomains } from "./main";
import Domains from "./Domains";

function Home({ domainColors }: { domainColors: Map<string, string> }) {
  const [diagrams, setDiagrams] = useState(allDiagrams);
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
            setDomains(uniqueDomains(filtered));
            setDiagrams(ranked);
          }
        }}
      />
      <Domains
        domains={domains}
        colors={domainColors}
        onSelect={(domains) => {
          const filtered = allDiagrams.filter(({ domains: d }) =>
            d.some((domain) => domains.includes(domain))
          );
          setDiagrams(filtered);
        }}
      />
      <Gallery diagrams={diagrams} />
    </div>
  );
}

export default Home;
