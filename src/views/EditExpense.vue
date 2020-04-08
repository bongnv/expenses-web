<template>
  <MainLayout>
    <v-container id="expenses" class="fill-height" fluid>
      <v-row class="fill-height" no-gutters>
        <v-col>
          <ExpenseForm
            style="width: 90%"
            v-model="expense"
            @submit="submit(expense)"
          />
        </v-col>
        <v-col v-if="$vuetify.breakpoint.lgAndUp" class="fill-height">
          <TableExpenses
            class="fill-height"
            :expenses="expenses"
            @onItemClick="editExpense"
          />
        </v-col>
      </v-row>
    </v-container>
  </MainLayout>
</template>

<script lang="ts">
import Vue from "vue";

import { Expense } from "@/models/expense";
import MainLayout from "@/layouts/MainLayout.vue";
import ExpenseForm from "@/components/ExpenseForm.vue";
import TableExpenses from "@/components/TableExpenses.vue";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default Vue.extend({
  name: "Home",

  computed: {
    expense: {
      get(): any {
        console.log("getting expense", this.$store.state.expenses.expense);
        return this.$store.state.expenses.expense;
      },

      set(val: any) {
        this.$store.commit("expenses/setExpense", val);
      }
    },

    expenses(): any {
      return this.$store.state.expenses.expenses;
    }
  },

  components: {
    MainLayout,
    ExpenseForm,
    TableExpenses
  },

  methods: {
    reset() {
      console.log("reset");
    },

    submit(expense: any) {
      console.log("editing", expense);
      if (expense.id > 0) {
        this.$store
          .dispatch("expenses/updateExpense", expense)
          .then(() => this.$store.dispatch("expenses/listExpenses"));
      } else {
        this.$store.dispatch("expenses/createExpense", expense).then(() => {
          this.$store.dispatch("expenses/listExpenses");
          this.reset();
        });
      }
    },

    editExpense(expense: Expense) {
      this.$store.dispatch("expenses/getExpense", expense.id);
    }
  },

  mounted() {
    this.$store.dispatch("expenses/listExpenses");
  }
});
</script>
