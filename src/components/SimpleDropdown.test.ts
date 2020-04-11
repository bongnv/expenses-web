import { shallowMount } from "@vue/test-utils";

import SimpleDropdown from "./SimpleDropdown.vue";

describe("@components/SimpleDropdown", () => {
  it("exports a valid component", () => {
    expect(shallowMount(SimpleDropdown).exists()).toBe(true);
  });
});
