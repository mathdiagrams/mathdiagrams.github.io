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

const bundleURL = new URL("/diagrams/diagrams.json", import.meta.url).href;
export const diagrams: DiagramData[] = await fetch(bundleURL).then((response) =>
  response.json()
);

const DiagramWrapper = () => {
  const { diagramID } = useParams();

  const diagram = diagrams.find(({ id }) => id === parseInt(diagramID!))!;

  return <Diagram diagram={diagram} />;
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
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
      errorElement: (
        <h1 className="prose dark:prose-invert">Diagram not found</h1>
      ),
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
