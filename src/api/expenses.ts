import axios, { AxiosResponse } from "axios";

import appConfig from "@/app.config.json";
import { Expense } from "@/models/expense";
import { parseDate } from "@/utils/date-utils";

/* eslint-disable @typescript-eslint/no-explicit-any */
function concertExpense(remoteExpense: any): Expense {
  return {
    ...remoteExpense,
    date: parseDate(remoteExpense.date)
  };
}

function parseGetExpense(response: AxiosResponse<any>): Expense {
  return concertExpense(response.data.expense);
}

function parserListExpenses(response: AxiosResponse<any>): Array<Expense> {
  return response.data.expenses.map(concertExpense);
}

export function getExpense(id: number) {
  return new Promise((resolve, reject) => {
    axios
      .get(appConfig.apiServer + "expenses/" + id)
      .then(response => resolve(parseGetExpense(response)))
      .catch(error => reject(error));
  });
}

export function createExpense(payload: Expense) {
  return new Promise((resolve, reject) => {
    axios
      .post(appConfig.apiServer + "expenses", {
        expense: payload
      })
      .then(response => resolve(parseGetExpense(response)))
      .catch(error => reject(error));
  });
}

export function updateExpense(payload: Expense) {
  return new Promise((resolve, reject) => {
    axios
      .put(appConfig.apiServer + "expenses/" + payload.id, {
        expense: payload
      })
      .then(response => resolve(response.data.expense))
      .catch(error => reject(error));
  });
}

export function listExpenses() {
  return new Promise((resolve, reject) => {
    axios
      .get(appConfig.apiServer + "expenses")
      .then(response => resolve(parserListExpenses(response)))
      .catch(error => reject(error));
  });
}

export function deleteExpense(id: number) {
  return axios.delete(appConfig.apiServer + "expenses/" + id);
}
