export type Expense = {
  id: number;
  date: Date;
  account: string;
  category: string;
  currency: string;
};

export function defaultExpense(): Expense {
  return {
    id: 0,
    account: "",
    category: "",
    currency: "SGD",
    date: new Date()
  };
}
