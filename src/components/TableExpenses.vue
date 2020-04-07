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
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from "vue";

import categories from "@/data/categories.json";

const iconMap = categories.reduce(function(map: any, obj: any) {
  map[obj.value] = obj.icon;
  return map;
}, {});

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const formatDate = (date: string): string => {
  const obj = new Date(date);
  return obj.getDate() + "-" + months[obj.getMonth()] + "-" + obj.getFullYear();
};

const formatAmount = (item: any) => item.currency + " " + item.amount;

export default Vue.extend({
  data: () => ({
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
      { text: "Actions", value: "actions" }
    ]
  }),

  computed: {
    computedItems() {
      return this.expenses.filter(Boolean).map((item: any) => ({
        ...item,
        amount: formatAmount(item),
        icon: iconMap[item.category],
        date: formatDate(item.date)
      }));
    }
  },

  methods: {
    editItem(item: any) {
      console.log(item);
    },
    deleteItem(item: any) {
      this.$store
        .dispatch("expenses/deleteExpense", item.id)
        .then(() => this.$store.dispatch("expenses/listExpenses"));
    }
  },

  props: {
    expenses: {
      type: Array,
      default: () => []
    }
  }
});
</script>