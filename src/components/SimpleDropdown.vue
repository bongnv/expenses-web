<template>
  <v-autocomplete
    :value="value"
    :items="items"
    :rules="rules"
    :label="name"
    required
    @input="$emit('input', $event)"
  ></v-autocomplete>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: function(vm: { name: string }) {
    return {
      rules: [(v: string) => !!v || vm.name + " is required"]
    };
  },

  props: {
    name: String,
    items: Array,
    value: String
  }
});
</script>
