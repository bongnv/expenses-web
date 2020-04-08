import {
  getExpense,
  createExpense,
  updateExpense,
  listExpenses,
  deleteExpense
} from "@/api/expenses";
import { Expense } from "@/models/expense";
import { ExpensesState, StoreState } from "@/store/types";
import { ActionContext, Module, MutationTree } from "vuex";

const state: ExpensesState = {
  expense: undefined,
  expenses: []
};

const getters = {};

const actions = {
  getExpense(context: ActionContext<ExpensesState, StoreState>, id: number) {
    getExpense(id).then(item => {
      context.commit("setExpense", item);
    });
  },

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

  updateExpense(
    context: ActionContext<ExpensesState, StoreState>,
    payload: Expense
  ) {
    return new Promise(resolve => {
      updateExpense(payload).then(item => {
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

const expenses: Module<ExpensesState, StoreState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

export default expenses;
