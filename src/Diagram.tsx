import Code from "./Code";
import { DiagramData } from "./types";
import { Link } from "react-router-dom";

export default function Diagram({ diagram }: { diagram: DiagramData }) {
  const previewURL = import.meta.env.BASE_URL + diagram.previewURI;
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 p-8 h-screen">
      <div className="flex flex-col justify-center h-full gap-4">
        <img
          className="rounded-md w-full object-contain shadow-md bg-white"
          src={previewURL}
          alt={diagram.title}
          loading="lazy"
        />
        <Link to={"/"} className="order-first md:order-none">
          <button className="dark:bg-slate-700 dark:hover:bg-slate-500 bg-gray-100 hover:bg-gray-200 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded">
            <span className="prose sm:text-sm md:text-xl dark:prose-invert">
              <svg className="inline-block w-4 h-6" viewBox="10 0 10 24">
                <path
                  fill="currentColor"
                  d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"
                ></path>
              </svg>
              Back to home
            </span>
          </button>
        </Link>
      </div>
      <div className="h-full overflow-auto py-4">
        <h1 className="text-black text-4xl pb-2 dark:text-white">
          {diagram.title}
        </h1>
        <h2 className="inline font-light italic">{diagram.author}</h2>
        <div className="pb-2">
          {diagram.domains.map((domain) => (
            <span
              key={domain}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            >
              {domain}
            </span>
          ))}
        </div>
        <p className="prose pb-2 dark:prose-invert">{diagram.notes}</p>
        <div className="bg-gray-100 dark:bg-[#282c34] p-4 rounded-md whitespace-pre-wrap overflow-scroll h-4/5">
          <Code src={diagram.code} language="latex" />
        </div>
      </div>
    </div>
  );
}
