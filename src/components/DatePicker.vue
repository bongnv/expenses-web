<template>
  <v-menu
    ref="menu"
    v-model="menu"
    close-on-content-click
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="date"
        label="Date"
        prepend-icon="mdi-calendar"
        :rules="rules"
        v-on="on"
        @keyup.enter="onEnter"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" no-title scrollable />
  </v-menu>
</template>

<script lang="ts">
import Vue from "vue";

import { formatDate, parseDate } from "@/utils/date-utils";

function isValidDate(v: string): boolean {
  return !Number.isNaN(Date.parse(v)) && v.length === 10;
}

export default Vue.extend({
  props: {
    value: {
      type: Date,
      default: (): Date => new Date()
    }
  },

  data() {
    return {
      menu: false,
      valid: false,
      rules: [(v: string) => isValidDate(v) || "Date is invalid."]
    };
  },

  computed: {
    date: {
      get(): string {
        return formatDate(this.value as Date);
      },

      set(val: string) {
        if (isValidDate(val)) {
          const d = parseDate(val);
          if (d) {
            this.$emit("input", d);
          }
        }
      }
    }
  },

  methods: {
    onEnter() {
      this.menu = false;
    }
  }
});
</script>
