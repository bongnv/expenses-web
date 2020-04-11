import axios, { AxiosResponse } from "axios";

import appConfig from "@/app.config.json";
import { Expense, MonthlyExpense } from "@/models/expense";
import { parseDate } from "@/utils/date-utils";

/* eslint-disable @typescript-eslint/no-explicit-any */
function convertExpense(remoteExpense: any): Expense {
  return {
    ...remoteExpense,
    date: parseDate(remoteExpense.date)
  };
}

function parseGetExpense(response: AxiosResponse<any>): Expense {
  return convertExpense(response.data.expense);
}

function parserListExpenses(response: AxiosResponse<any>): Expense[] {
  return response.data.expenses.map(convertExpense);
}

function parseGetOverview(response: AxiosResponse<any>): MonthlyExpense[] {
  return response.data.data;
}

export function getExpense(id: number): Promise<Expense> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${appConfig.apiServer}expenses/${id}`)
      .then(response => resolve(parseGetExpense(response)))
      .catch(error => reject(error));
  });
}

export function createExpense(payload: Expense): Promise<Expense> {
  return new Promise((resolve, reject) => {
    axios
      .post(`${appConfig.apiServer}expenses`, {
        expense: payload
      })
      .then(response => resolve(parseGetExpense(response)))
      .catch(error => reject(error));
  });
}

export function updateExpense(payload: Expense): Promise<Expense> {
  return new Promise((resolve, reject) => {
    axios
      .put(`${appConfig.apiServer}expenses/${payload.id}`, {
        expense: payload
      })
      .then(response => resolve(parseGetExpense(response)))
      .catch(error => reject(error));
  });
}

export function listExpenses(): Promise<Expense[]> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${appConfig.apiServer}expenses`)
      .then(response => resolve(parserListExpenses(response)))
      .catch(error => reject(error));
  });
}

export function deleteExpense(id: number): Promise<void> {
  return axios.delete(`${appConfig.apiServer}expenses/${id}`);
}

export function getOverview(): Promise<MonthlyExpense[]> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${appConfig.apiServer}expenses-overview`)
      .then(response => resolve(parseGetOverview(response)))
      .catch(error => reject(error));
  });
}
