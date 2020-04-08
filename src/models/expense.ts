export type Expense = {
  id: number;
  date: Date;
  currency: string;
};

export function defaultExpense(): Expense {
  return {
    id: 0,
    date: new Date(),
    currency: "SGD"
  };
}
