import { shallowMount, createLocalVue } from "@vue/test-utils";
import MainLayout from "./MainLayout.vue";
import Vuetify from "vuetify/lib";

describe("@layouts/main.vue", () => {
  it("renders its content", () => {
    const slotContent = "<p>Hello!</p>";
    const vuetify = new Vuetify();
    const localVue = createLocalVue();

    const { element } = shallowMount(MainLayout, {
      slots: {
        default: slotContent
      },
      localVue,
      vuetify
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});
