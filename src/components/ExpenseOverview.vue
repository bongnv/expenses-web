<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="items"
    :single-select="singleSelect"
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

import headers from "@/data/expense-overview-table.json";

export default Vue.extend({
  data() {
    return {
      headers,
      items: []
    };
  }
});
</script>

<style module></style>