import { useEffect, useState } from "react";

export default function Domains({
  domains,
  colors,
  onSelect,
}: {
  domains: string[];
  colors: Map<string, string>;
  onSelect: (domains: string[]) => void;
}) {
  const [selected, setSelected] = useState<string[]>(domains);

  // update the selected domains when the domains prop changes
  useEffect(() => {
    setSelected(domains);
  }, [domains]);

  // a list of selectable colored pills for each domain
  return (
    <div className="flex flex-wrap gap-2">
      {domains.map((domain) => (
        <span
          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-s font-medium text-gray-800 cursor-pointer shadow-md dark:shadow-none select-none"
          key={domain}
          style={{
            backgroundColor: selected.includes(domain)
              ? colors.get(domain)
              : "gray",
          }}
          onClick={() => {
            // if already selected, remove
            if (selected.includes(domain)) {
              const res = selected.filter((d) => d !== domain);
              setSelected(res);
              onSelect(res);
            } else {
              // otherwise add
              const res = [...selected, domain];
              setSelected(res);
              onSelect(res);
            }
          }}
        >
          {domain}
        </span>
      ))}
      <span
        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-s font-medium text-gray-600 cursor-pointer shadow-md dark:shadow-none select-none
				bg-none dark:border-gray-300 border-s-2 border dark:text-gray-100"
        onClick={() => {
          if (selected.length === 0) {
            setSelected(domains);
            onSelect(domains);
          } else {
            setSelected([]);
            onSelect([]);
          }
        }}
      >
        {selected.length === 0 ? "Select All" : "Deselect All"}
      </span>
    </div>
  );
}
