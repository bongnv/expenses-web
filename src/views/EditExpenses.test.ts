import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify/lib";
import Vuex from "vuex";

import EditExpense from "./EditExpense.vue";

describe("@components/EditExpenses", () => {
  it("exports a valid component", () => {
    const vuetify = new Vuetify();
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const actions = {
      listExpenses: jest.fn()
    };
    const store = new Vuex.Store({
      modules: {
        expenses: {
          namespaced: true,
          actions
        }
      }
    });

    const wrapper = shallowMount(EditExpense, {
      localVue,
      vuetify,
      store
    });

    expect(wrapper.exists()).toBe(true);
    expect(actions.listExpenses).toHaveBeenCalled();
  });
});
