<template>
  <v-container fill-width>
    <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
      class="justify-center"
    >
      <DatePicker v-model="date" />

      <SimpleDropdown
        v-model="currency"
        name="Currency"
        :items="currencies"
      ></SimpleDropdown>
      <SimpleDropdown
        v-model="category"
        name="Category"
        :items="categories"
      ></SimpleDropdown>
      <v-text-field
        v-model.number="amount"
        :counter="amountLength"
        :rules="amountRules"
        label="Amount"
        required
        placeholder="0"
        type="number"
        @keyup.enter="submit"
      ></v-text-field>

      <v-text-field
        v-model="note"
        :counter="noteLength"
        :rules="noteRules"
        label="Note"
        placeholder="A note on the expense."
      ></v-text-field>

      <v-row>
        <v-spacer />
        <v-btn :disabled="!valid" class="ma-4" color="success" @click="submit"
          >Submit</v-btn
        >
        <v-spacer />
        <v-btn color="error" class="ma-4" @click="reset">Reset Form</v-btn>
        <v-spacer />
      </v-row>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

import SimpleDropdown from "@/components/SimpleDropdown.vue";
import DatePicker from "@/components/DatePicker.vue";
import categories from "@/data/categories.json";
import currencies from "@/data/currencies.json";
import { Expense, defaultExpense } from "@/models/expense";

const NOTE_LENGTH = 64;

// data, amount, category, account, note, currency, category group
export default Vue.extend({
  data() {
    return {
      valid: true,
      noteLength: NOTE_LENGTH,
      noteRules: [
        (v: string) =>
          !v ||
          v.length <= NOTE_LENGTH ||
          "Note must not be more than " + NOTE_LENGTH + " characters"
      ],
      amountLength: 20,
      amountRules: [
        (v: number) => !!v || "Amount is required",
        (v: number) => v > 0 || "Amount must be valid"
      ],
      categories,
      currencies,
      lazy: false
    };
  },

  computed: {
    date: {
      get(): string {
        return this.value.date;
      },
      set(date: string) {
        const newExpense = {
          ...this.value,
          date
        };
        this.$emit("input", newExpense);
      }
    },

    currency: {
      get(): string {
        return this.value.currency;
      },
      set(currency: string) {
        const newExpense = {
          ...this.value,
          currency
        };
        this.$emit("input", newExpense);
      }
    },

    category: {
      get(): string {
        return this.value.category;
      },
      set(category: string) {
        const newExpense = {
          ...this.value,
          category
        };
        this.$emit("input", newExpense);
      }
    },

    amount: {
      get(): number {
        return this.value.amount;
      },
      set(amount: number) {
        const newExpense = {
          ...this.value,
          amount
        };
        this.$emit("input", newExpense);
      }
    },

    note: {
      get(): string {
        return this.value.note;
      },
      set(note: string) {
        const newExpense = {
          ...this.value,
          note
        };
        this.$emit("input", newExpense);
      }
    }
  },

  props: {
    value: {
      type: Object,
      default: () => defaultExpense()
    }
  },

  methods: {
    submit() {
      this.$emit("submit", this.value);
    },
    reset() {
      const defaultVal = defaultExpense();
      this.$emit("input", defaultVal);
    }
  },

  components: {
    SimpleDropdown,
    DatePicker
  }
});
</script>
