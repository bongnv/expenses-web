<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :loading="loading"
    item-key="name"
    class="elevation-1"
    disable-sort
    disable-pagination
    disable-filtering
    hide-default-footer
  />
</template>

<script lang="ts">
import Vue from "vue";

import months from "@/data/months.json";
import { getShortMonth } from "@/utils/date-utils";
import { categoryName } from "@/utils/category-utils";
import { MonthlyExpense } from "../models/expense";

function getHeaders(): Record<"text" | "value", string>[] {
  return [
    {
      text: "Category",
      value: "category"
    },
    ...months
  ];
}

export default Vue.extend({
  data() {
    return {
      headers: getHeaders()
    };
  },

  computed: {
    items(): Record<string, string>[] {
      const allExpenses: MonthlyExpense[] = this.$store.state.expenses
        .monthlyExpenses;
      const expenseMap = new Map<string, Record<string, number>>();
      allExpenses.forEach(obj => {
        const mapItem = expenseMap.get(obj.category);
        if (mapItem) {
          mapItem[getShortMonth(obj.month)] = obj.totalAmount;
        } else {
          const newMap: Record<string, number> = {};
          newMap[getShortMonth(obj.month)] = obj.totalAmount;
          expenseMap.set(obj.category, newMap);
        }
      });

      const monthlyExpensesInArray: Record<string, string>[] = [];
      expenseMap.forEach((value: Record<string, number>, key: string) => {
        monthlyExpensesInArray.push({
          ...value,
          category: categoryName(key)
        });
      });

      return monthlyExpensesInArray;
    },
    loading(): boolean {
      return this.items.length === 0;
    }
  },

  mounted() {
    this.$store.dispatch("expenses/getOverview");
  }
});
</script>

<style module></style>
