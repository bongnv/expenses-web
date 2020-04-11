import { ActionContext, Module, MutationTree } from "vuex";

import * as api from "@/api/expenses";
import { Expense, MonthlyExpense } from "@/models/expense";
import { ExpensesState, RootState } from "@/store/types";

const state: ExpensesState = {
  expense: undefined,
  expenses: [],
  monthlyExpenses: []
};

const getters = {};

const actions = {
  getExpense(context: ActionContext<ExpensesState, RootState>, id: number) {
    api.getExpense(id).then(item => {
      context.commit("setExpense", item);
    });
  },

  createExpense(
    context: ActionContext<ExpensesState, RootState>,
    payload: Expense
  ) {
    api.createExpense(payload).then(item => {
      context.commit("setExpense", item);
    });
  },

  updateExpense(
    context: ActionContext<ExpensesState, RootState>,
    payload: Expense
  ) {
    api.updateExpense(payload).then(item => {
      context.commit("setExpense", item);
    });
  },

  listExpenses(context: ActionContext<ExpensesState, RootState>) {
    api.listExpenses().then(items => {
      context.commit("setExpenses", items);
    });
  },

  deleteExpense(_: ActionContext<ExpensesState, RootState>, id: number) {
    api.deleteExpense(id);
  },

  getOverview(context: ActionContext<ExpensesState, RootState>) {
    api.getOverview().then((monthlyExpenses: MonthlyExpense[]) => {
      context.commit("setMonthlyExpenses", monthlyExpenses);
    });
  }
};

const mutations: MutationTree<ExpensesState> = {
  setExpense(expenseState: ExpensesState, payload: Expense) {
    expenseState.expense = payload;
  },

  setExpenses(expenseState: ExpensesState, payload: Expense[]) {
    expenseState.expenses = payload;
  },

  setMonthlyExpenses(expenseState: ExpensesState, payload: MonthlyExpense[]) {
    expenseState.monthlyExpenses = payload;
  }
};

const expenses: Module<ExpensesState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

export default expenses;
