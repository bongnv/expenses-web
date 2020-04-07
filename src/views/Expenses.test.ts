import Expenses from "./Expenses.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify/lib";
import Vuex from "vuex";

describe("@components/Expenses", () => {
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

    const wrapper = shallowMount(Expenses, {
      localVue,
      vuetify,
      store
    });

    expect(wrapper.exists()).toBe(true);
    expect(actions.listExpenses).toHaveBeenCalled();
  });
});
