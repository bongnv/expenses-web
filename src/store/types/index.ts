import { Expense } from "@/models/Expense";

export type ExpensesState = {
  expense?: Expense;
  expenses: Array<Expense>;
};

export type StoreState = {
  expenses: ExpensesState;
};
