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
        :value="date"
        @input="onDate"
        label="Date"
        prepend-icon="mdi-calendar"
        v-on="on"
        @keyup.enter="onEnter"
        :rules="rules"
      ></v-text-field>
    </template>
    <v-date-picker :value="date" @input="onDate" no-title scrollable />
  </v-menu>
</template>

<script lang="ts">
import Vue from "vue";

function validateDate(v: string): boolean {
  return !isNaN(Date.parse(v)) && v.length == 10;
}

export default Vue.extend({
  data: () => ({
    menu: false,
    valid: false,
    rules: [(v: string) => validateDate(v) || "Date is invalid."]
  }),

  computed: {
    date: function(): string {
      const dateObj = this.value as Date;
      return dateObj.toISOString().substr(0, 10);
    }
  },

  props: {
    value: {
      type: Date,
      default: (): Date => new Date()
    }
  },

  methods: {
    onDate: function(newDate: string) {
      if (validateDate(newDate)) {
        console.log("sending new date", newDate);
        this.$emit("input", new Date(newDate));
      }
    },

    onEnter: function() {
      this.menu = false;
    }
  }
});
</script>
