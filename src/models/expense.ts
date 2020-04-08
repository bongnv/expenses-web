export type Expense = {
  id: number;
  date: Date;
  category: string;
  currency: string;
};

export function defaultExpense(): Expense {
  return {
    id: 0,
    category: "",
    currency: "SGD",
    date: new Date()
  };
}
