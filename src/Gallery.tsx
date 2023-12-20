import { DiagramData } from "./types";
import { Link } from "react-router-dom";

export default function Gallery({ diagrams }: { diagrams: DiagramData[] }) {
  return (
    <div className="grid py-8 grid-cols-1 md:grid-cols-4 gap-4 ">
      {diagrams.map((diagram) => {
        const previewURL = import.meta.env.BASE_URL + diagram.previewURI;
        return (
          <Link to={`/diagrams/${diagram.id}`}>
            <div
              key={diagram.id}
              className="rounded-md bg-white p-4 shadow-md hover:shadow-lg focus:ring"
            >
              <img src={previewURL} alt={diagram.title} loading="lazy" />
              <h2 className="font-bold text-black">{diagram.title}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
