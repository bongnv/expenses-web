import { shallowMount } from "@vue/test-utils";

import Overview from "./Overview.vue";

describe("@/views/Overview", () => {
  it("is a valid view", () => {
    const wrapper = shallowMount(Overview);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
