import Minisearch from "minisearch"; // Import the Minisearch type using default import syntax

export type Match = {
  id: number;
};

export default function Search({
  index,
  onFound,
}: {
  index: Minisearch;
  onFound: (result: Match[]) => void;
}) {
  const search = (event: React.ChangeEvent<HTMLInputElement>) => {
    const res = index.search(event.target.value, { fuzzy: 0.2 });
    onFound(res);
  };

  return (
    <div className="w-full py-4">
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Start typing to search in title, notes, domain, or code"
            onChange={search}
            required
          />
        </div>
      </div>
    </div>
  );
}
