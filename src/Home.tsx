import { useCallback, useEffect, useState } from "react";
import Gallery from "./Gallery";
import Header from "./Header";
import Search from "./Search";
import { metaData, allDomains, miniSearch } from "./main";
import Domains from "./Domains";
import { DiagramData } from "./types";

const uniqueDomains = (diagrams: DiagramData[]): string[] =>
  Array.from(new Set(diagrams.map(({ domains }) => domains).flat()));

function Home({ domainColors }: { domainColors: Map<string, string> }) {
  // diagrams displayed in the gallery, initialized with all diagrams
  const [diagrams, setDiagrams] = useState(metaData.ids);
  // diagrams matching the search query
  const [matches, setMatches] = useState(metaData.ids);
  // set of domains based on matching diagrams
  const [domains, setDomains] = useState(allDomains);
  // actual diagram data. initialized to be undefined first and hydrated as needed
  const [diagramData, setDiagramData] = useState<Map<number, DiagramData>>(
    new Map()
  );

  const collectDiagramData = useCallback(
    (ids: number[]): DiagramData[] => {
      const diagrams = [];
      for (const id of ids) {
        const diagram = diagramData.get(id);
        if (diagram) {
          diagrams.push(diagram);
        }
      }
      return diagrams;
    },
    [diagramData]
  );

  // whenever the matches change
  useEffect(() => {
    // fetch all diagrams in `diagram`, if it's not already in `diagramData`
    if (matches.length > 0) {
      const missing = matches.filter((id) => !diagramData.has(id));
      if (missing.length > 0) {
        // console.log("Fetching missing diagrams", missing);
        const fetchDiagrams = async (ids: number[]) => {
          const diagrams: DiagramData[] = [];
          for (const id of ids) {
            const diagramData: DiagramData = await fetch(
              `diagrams/${id}.json`
            ).then((response) => response.json());
            diagrams.push(diagramData);
          }
          setDiagramData((prev) => {
            const next = new Map(prev);
            for (const diagram of diagrams) {
              next.set(diagram.id, diagram);
            }
            return next;
          });
        };
        fetchDiagrams(missing);
      }
    }
    setDomains(uniqueDomains(collectDiagramData(matches)));
  }, [matches, diagramData, collectDiagramData]);

  return (
    <div className="container mx-auto flex flex-col justify-center items-center m-8">
      <Header />
      <Search
        index={miniSearch}
        onFound={(res) => {
          const indices = res.map(({ id }) => id);
          // if no results, default to all
          if (res.length === 0) {
            setDiagrams(metaData.ids);
            setMatches(metaData.ids);
            setDomains(allDomains);
          } else {
            const filtered = metaData.ids.filter((id) => indices.includes(id));
            const ranked = filtered.sort(
              (a, b) =>
                res.find(({ id }) => b === id)!.score -
                res.find(({ id }) => a === id)!.score
            );
            setDiagrams(ranked);
            setMatches(ranked);
          }
        }}
      />
      <Domains
        domains={domains}
        colors={domainColors}
        onSelect={(domains) => {
          const filtered = collectDiagramData(matches)
            .filter(({ domains: d }) =>
              d.every((domain) => domains.includes(domain))
            )
            .map(({ id }) => id);
          setDiagrams(filtered);
        }}
      />
      <Gallery diagrams={collectDiagramData(diagrams)} />
    </div>
  );
}

export default Home;
