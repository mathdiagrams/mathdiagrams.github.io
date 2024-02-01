export type DiagramData = {
  id: number;
  title: string;
  author: string;
  code: string;
  notes: string;
  previewURI: string;
  domains: string[];
};

export type DiagramMetaData = {
  count: number;
  ids: number[];
  domains: string[];
  titles: { [id: number]: string };
};
