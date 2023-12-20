import { useEffect, useState } from "react";
import { getHighlighter, Highlighter } from "shikiji";

export default function Code({
  src,
  language,
}: {
  src: string;
  language: string;
}) {
  const [highlighter, setHighlighter] = useState<Highlighter | undefined>(
    undefined
  );
  const [rendered, setRendered] = useState<string | undefined>(undefined);
  useEffect(() => {
    async function loadHighlighter() {
      const hl = await getHighlighter({
        themes: ["one-dark-pro", "vitesse-light"],
        langs: ["javascript", "latex", "python"],
      });
      setHighlighter(hl);
    }
    loadHighlighter();
  }, []);

  useEffect(() => {
    if (highlighter) {
      const code = highlighter.codeToHtml(src, {
        lang: language,
        themes: {
          light: "one-dark-pro",
          dark: "vitesse-light",
        },
      });
      setRendered(code);
    }
  }, [highlighter, language, src]);

  return rendered ? (
    <div dangerouslySetInnerHTML={{ __html: rendered }} />
  ) : (
    <pre>Rendering</pre>
  );
}
