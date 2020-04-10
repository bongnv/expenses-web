<template>
  <MainLayout>
    <v-card class="ma-4">
      <v-card-title>
        Overview
        <v-spacer />
        <SimpleDropdown class="flex-grow-0" name="Year" :items="years" />
      </v-card-title>
      <ExpenseOverview />
    </v-card>
  </MainLayout>
</template>

<script lang="ts">
import Vue from "vue";

import MainLayout from "@/layouts/MainLayout.vue";
import ExpenseOverview from "@/components/ExpenseOverview.vue";
import SimpleDropdown from "@/components/SimpleDropdown.vue";

export default Vue.extend({
  metaInfo: {
    title: "Overview",
    meta: [{ name: "description", content: "The Overview page." }]
  },

  components: {
    MainLayout,
    ExpenseOverview,
    SimpleDropdown
  },

  data() {
    return {
      years: [2019, 2020]
    };
  }
});
</script>
