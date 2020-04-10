import ExpenseOverview from "./ExpenseOverview.vue";
import { shallowMount } from "@vue/test-utils";

describe("@components/ExpenseOverview", () => {
  it("exports a valid component", () => {
    const wrapper = shallowMount(ExpenseOverview);
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.contains("v-data-table-stub")).toBeTruthy();
  });
});
