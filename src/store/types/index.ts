import { Expense } from "@/models/expense";

export type ExpensesState = {
  expense?: Expense;
  expenses: Array<Expense>;
};

export type StoreState = {
  expenses: ExpensesState;
};
