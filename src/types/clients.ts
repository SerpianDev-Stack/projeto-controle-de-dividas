export type Client = {
  id: number;
  name: string;
  value: number;
  paid: boolean;
  transactions: Transaction[];
};

export type Transaction = {
  id: number;
  value: number;
  type: "debt" | "payment";
  readonly date: string;
  description: string;
};
