import { DiagramData } from "./types";
import { Link } from "react-router-dom";

export default function Gallery({ diagrams }: { diagrams: DiagramData[] }) {
  return (
    <div className="grid py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {diagrams.map((diagram) => {
        const previewURL = import.meta.env.BASE_URL + diagram.previewURI;
        return (
          <Link key={`link-to-${diagram.id}`} to={`/diagrams/${diagram.id}`}>
            <div
              key={`card-${diagram.id}`}
              className="rounded-md bg-white p-4 shadow-md hover:shadow-lg focus:ring"
            >
              <img
                key={`preview-${diagram.id}`}
                className="w-full h-60  object-center object-cover"
                src={previewURL}
                alt={diagram.title}
                loading="lazy"
              />
              <h2 key={`title-${diagram.id}`} className="font-bold text-black">
                {diagram.title}
              </h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
