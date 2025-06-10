export type Article = Record<"userId" | "id", number> &
  Record<"title" | "body", string>;
