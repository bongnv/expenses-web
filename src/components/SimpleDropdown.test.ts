import SimpleDropdown from "./SimpleDropdown.vue";
import { shallowMount } from "@vue/test-utils";

describe("@components/SimpleDropdown", () => {
  it("exports a valid component", () => {
    expect(shallowMount(SimpleDropdown).exists()).toBe(true);
  });
});
