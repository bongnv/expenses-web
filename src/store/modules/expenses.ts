import { createExpense, listExpenses, deleteExpense } from "@/api/expenses";
import { Expense } from "@/models/Expense";
import { ExpensesState, StoreState } from "@/store/types";
import { ActionContext, Module, MutationTree } from "vuex";

const state: ExpensesState = {
  expenses: []
};

const getters = {};

const actions = {
  createExpense(
    context: ActionContext<ExpensesState, StoreState>,
    payload: Expense
  ) {
    return new Promise(resolve => {
      createExpense(payload).then(item => {
        context.commit("setExpense", item);
        resolve(item);
      });
    });
  },

  listExpenses(context: ActionContext<ExpensesState, StoreState>) {
    listExpenses().then(items => context.commit("setExpenses", items));
  },

  deleteExpense(_: ActionContext<ExpensesState, StoreState>, id: number) {
    return deleteExpense(id);
  }
};

const mutations: MutationTree<ExpensesState> = {
  setExpense(state: ExpensesState, payload: Expense) {
    state.expense = payload;
  },

  setExpenses(state: ExpensesState, payload: Array<Expense>) {
    state.expenses = payload;
  }
};

export const expenses: Module<ExpensesState, StoreState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
