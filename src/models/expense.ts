export interface Expense {
  id: number;
  date: Date;
  account: string;
  category: string;
  currency: string;
}

export interface MonthlyExpense {
  year: number;
  month: number;
  category: string;
  totalAmount: number;
}

export function defaultExpense(): Expense {
  return {
    id: 0,
    account: "",
    category: "",
    currency: "SGD",
    date: new Date()
  };
}
