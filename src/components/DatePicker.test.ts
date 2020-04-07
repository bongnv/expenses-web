import Vuetify from "vuetify/lib";
import { shallowMount, createLocalVue } from "@vue/test-utils";

import DatePicker from "./DatePicker.vue";

describe("@components/date-picker", () => {
  it("exports a valid component", () => {
    const vuetify = new Vuetify();
    const localVue = createLocalVue();

    const wrapper = shallowMount(DatePicker, {
      localVue,
      vuetify
    });

    expect(wrapper.contains("v-date-picker-stub")).toBe(true);
  });
});
