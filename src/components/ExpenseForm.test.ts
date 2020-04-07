import ExpenseForm from "./ExpenseForm.vue";
import DatePicker from "./DatePicker.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify/lib";

describe("@/components/ExpenseForm", () => {
  it("exports a valid component", () => {
    const vuetify = new Vuetify();
    const localVue = createLocalVue();

    const wrapper = shallowMount(ExpenseForm, {
      localVue,
      vuetify
    });

    expect(wrapper.contains(DatePicker)).toBe(true);
  });
});
