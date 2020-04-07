import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify/lib";

import TableExpenses from "./TableExpenses.vue";

describe("@components/TableExpenses", () => {
  it("exports a valid component", () => {
    const vuetify = new Vuetify();
    const localVue = createLocalVue();

    const wrapper = mount(TableExpenses, {
      localVue,
      vuetify
    });

    expect(wrapper.exists()).toBe(true);
  });
});
