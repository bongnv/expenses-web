<template>
  <v-data-table
    :headers="headers"
    :items="computedItems"
    class="overflow-y-hidden"
    disable-sort
    disable-pagination
    hide-default-footer
    fill-height
  >
    <template #item.category="{ item }">
      <v-avatar>
        <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
      </v-avatar>
    </template>

    <template #item.actions="{ item }">
      <v-icon small class="mr-2" @click="onItemClick(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from "vue";

import categories from "@/data/categories.json";
import { beautyFormatDate } from "@/utils/date-utils";
import { getDisplayName } from "@/utils/account-utils";

/* eslint-disable @typescript-eslint/no-explicit-any */
const iconMap = categories.reduce((map: Map<string, any>, obj: any) => {
  map.set(obj.value, obj.icon);
  return map;
}, new Map<string, any>());

const formatAmount = (item: any) => `${item.currency} ${item.amount}`;

export default Vue.extend({
  props: {
    expenses: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      headers: [
        {
          text: "Category",
          value: "category"
        },
        {
          text: "Amount",
          value: "amount"
        },
        { text: "Date", value: "date" },
        { text: "Account", value: "account" },
        { text: "Actions", value: "actions" }
      ]
    };
  },

  computed: {
    computedItems() {
      return this.expenses.filter(Boolean).map((item: any) => ({
        ...item,
        amount: formatAmount(item),
        icon: iconMap.get(item.category),
        date: beautyFormatDate(item.date),
        account: getDisplayName(item.account)
      }));
    }
  },

  methods: {
    onItemClick(item: any) {
      this.$emit("onItemClick", item);
    },

    deleteItem(item: any) {
      this.$store
        .dispatch("expenses/deleteExpense", item.id)
        .then(() => this.$store.dispatch("expenses/listExpenses"));
    }
  }
});
</script>
