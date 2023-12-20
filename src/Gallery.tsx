import { Diagram } from "./types";

export default function Gallery({ diagrams }: { diagrams: Diagram[] }) {
  return (
    <div className="grid py-8 grid-cols-1 md:grid-cols-4 gap-4 ">
      {diagrams.map((diagram) => {
        const previewURL = import.meta.env.BASE_URL + diagram.previewURI;
        return (
          <div key={diagram.id} className="rounded-md bg-white p-4">
            <img src={previewURL} alt={diagram.title} loading="lazy" />
            <h2 className="font-bold text-black">{diagram.title}</h2>
          </div>
        );
      })}
    </div>
  );
}
