import { shallowMount } from "@vue/test-utils";
import Vuex from "vuex";

import ExpenseOverview from "./ExpenseOverview.vue";

describe("@components/ExpenseOverview", () => {
  it("exports a valid component", () => {
    const actions = {
      getOverview: jest.fn()
    };

    const store = new Vuex.Store({
      modules: {
        expenses: {
          namespaced: true,
          actions,
          state: {
            monthlyExpenses: []
          }
        }
      }
    });

    const wrapper = shallowMount(ExpenseOverview, {
      store
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.contains("v-data-table-stub")).toBeTruthy();
    expect(actions.getOverview).toHaveBeenCalled();
  });
});
