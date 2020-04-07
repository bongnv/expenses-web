---
to: "src/layouts/<%= h.changeCase.pascalCase(name) %>.test.ts"
---
<%
  const fileName = h.changeCase.pascalCase(name)
  const importName = h.changeCase.pascalCase(fileName)
%>import { shallowMount } from "@vue/test-utils";

import <%= importName %> from "./<%= fileName %>.vue";

describe("@/layouts/<%= fileName %>", () => {
  it("renders its content", () => {
    const slotContent = "<p>Hello!</p>";
    const { element } = shallowMount(<%= importName %>, {
      slots: {
        default: slotContent,
      },
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});
