import axios from "axios";

import appConfig from "@/app.config.json";
import { Expense } from "@/models/Expense";

export function createExpense(payload: Expense) {
  return new Promise((resolve, reject) => {
    axios
      .post(appConfig.apiServer + "expenses", {
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
      .then(response => resolve(response.data.expenses))
      .catch(error => reject(error));
  });
}

export function deleteExpense(id: number) {
  return axios.delete(appConfig.apiServer + "expenses/" + id);
}
