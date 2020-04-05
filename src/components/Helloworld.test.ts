import { shallowMount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(HelloWorld, {});
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("h1").text()).toMatch("Welcome to Vuetify");
  });
});
