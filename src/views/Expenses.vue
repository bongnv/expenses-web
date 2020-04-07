<template>
  <MainLayout>
    <v-container id="expenses" class="fill-height" fluid>
      <v-row class="fill-height" no-gutters>
        <v-col>
          <ExpenseForm style="width: 90%" />
        </v-col>
        <v-col v-if="$vuetify.breakpoint.lgAndUp" class="fill-height">
          <TableExpenses class="fill-height" :expenses="expenses" />
        </v-col>
      </v-row>
    </v-container>
  </MainLayout>
</template>

<script lang="ts">
import Vue from "vue";

// @ is an alias to /src
import MainLayout from "@/layouts/MainLayout.vue";
import ExpenseForm from "@/components/ExpenseForm.vue";
// import ListTransactions from "@/components/ListTransactions.vue";
import TableExpenses from "@/components/TableExpenses.vue";

export default Vue.extend({
  name: "Home",
  computed: {
    expenses() {
      return this.$store.state.expenses.expenses;
    }
  },

  components: {
    MainLayout,
    ExpenseForm,
    TableExpenses
  },

  mounted() {
    this.$store.dispatch("expenses/listExpenses");
  }
});
</script>
