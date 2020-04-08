<template>
  <v-autocomplete
    :value="value"
    :items="items"
    :rules="rules(name)"
    :label="name"
    required
    @input="$emit('input', $event)"
  ></v-autocomplete>
</template>

<script lang="ts">
import Vue from "vue";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default Vue.extend({
  data() {
    return {
      rules(name: string) {
        return [(v: string) => !!v || name + " is required"];
      }
    };
  },

  props: {
    name: String,
    items: Array,
    value: String
  }
});
</script>
