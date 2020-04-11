import { Expense, MonthlyExpense } from "@/models/expense";

export interface ExpensesState {
  expense?: Expense;
  expenses: Expense[];
  monthlyExpenses: MonthlyExpense[];
}

export interface RootState {
  expenses: ExpensesState;
}
