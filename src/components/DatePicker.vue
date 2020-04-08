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
        v-on="on"
        @keyup.enter="onEnter"
        :rules="rules"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" no-title scrollable />
  </v-menu>
</template>

<script lang="ts">
import Vue from "vue";

import { formatDate, parseDate } from "@/utils/date-utils";

function validateDate(v: string): boolean {
  return !isNaN(Date.parse(v)) && v.length == 10;
}

export default Vue.extend({
  data() {
    return {
      menu: false,
      valid: false,
      rules: [(v: string) => validateDate(v) || "Date is invalid."]
    };
  },

  computed: {
    date: {
      get(): string {
        return formatDate(this.value);
      },

      set(val: string) {
        const d = parseDate(val);
        if (d) {
          this.$emit("input", val);
        }
      }
    }
  },

  props: {
    value: {
      type: Date,
      default: (): Date => new Date()
    }
  },

  methods: {
    onEnter: function() {
      this.menu = false;
    }
  }
});
</script>
