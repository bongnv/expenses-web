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
  props: {
    name: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: () => []
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      rules(name: string) {
        return [(v: string) => !!v || `${name} is required`];
      }
    };
  }
});
</script>
