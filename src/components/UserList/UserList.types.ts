export type User = {
  id: number;
  address: Record<"street" | "suite" | "city" | "zipcode", string> & {
    geo: Record<"lat" | "lng", string>;
  };
} & Record<"name" | "username" | "email" | "website" | "phone", string> & {
    company: Record<"name" | "catchPhrase" | "bs", string>;
  };
