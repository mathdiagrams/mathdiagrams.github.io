import { Link } from "react-router-dom";
import Header from "./Header";

export default function NotFound() {
  return (
    <div className="mx-auto flex flex-col justify-center items-center p-8 h-screen">
      <Header />
      <div className="flex justify-center items-center flex-grow flex-col">
        <h1 className="text-2xl md:text-4xl font-bold text-black dark:text-white pb-4">
          404 Diagram Not Found
        </h1>
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
    </div>
  );
}
