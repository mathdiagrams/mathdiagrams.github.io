import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Diagram from "./Diagram";
import { DiagramData } from "./types";
import NotFound from "./NotFound";
import MiniSearch from "minisearch";
import randomColor from "randomcolor";

// HACK: load the diagrams.json file from the public folder on startup and build a search index.
// NOTE: in production, this should be done as a build step and the index should be loaded from a static file.
const bundleURL = new URL("/diagrams/diagrams.json", import.meta.url).href;
export const allDiagrams: DiagramData[] = await fetch(bundleURL).then(
  (response) => response.json()
);
// return a unique list of all domains
export const uniqueDomains = (diagrams: DiagramData[]): string[] =>
  Array.from(new Set(diagrams.map(({ domains }) => domains).flat()));
export const allDomains: string[] = uniqueDomains(allDiagrams);

export const miniSearch = new MiniSearch({
  fields: ["title", "notes", "code", "author", "domains"], // fields to index for full-text search
  storeFields: ["title", "id"], // fields to return with search results
});

// Index all documents
miniSearch.addAll(allDiagrams);

// generate a random color for each domain

const rndColors = randomColor({
  count: allDomains.length,
  luminosity: "light",
  seed: 1,
});
const colorMap = allDomains.reduce((acc, domain, i) => {
  acc.set(domain, rndColors[i]);
  return acc;
}, new Map<string, string>());

const DiagramWrapper = () => {
  const { diagramID } = useParams();

  const diagram = allDiagrams.find(({ id }) => id === parseInt(diagramID!))!;

  return <Diagram diagram={diagram} />;
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home domainColors={colorMap} />,
    },
    {
      // it renders this element
      element: <DiagramWrapper />,

      // when the URL matches this segment
      path: "diagrams/:diagramID",

      // // with this data loaded before rendering
      // loader: async ({ request, params }) => {
      //   return fetch(`/fake/api/teams/${params.diagramId}.json`, {
      //     signal: request.signal,
      //   });
      // },
      errorElement: <NotFound />,
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
