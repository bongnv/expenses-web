export type Expense = {
  id: number;
  date: string;
  currency: string;
};

export function defaultExpense(): Expense {
  return {
    id: 0,
    date: new Date().toISOString().substr(0, 10),
    currency: "SGD"
  };
}
