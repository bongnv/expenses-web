import { shallowMount } from "@vue/test-utils";
import MainLayout from "./MainLayout.vue";

describe("@layouts/MainLayout.vue", () => {
  it("renders its content", () => {
    const slotContent = "<p>Hello!</p>";
    const { element } = shallowMount(MainLayout, {
      slots: {
        default: slotContent
      }
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});
