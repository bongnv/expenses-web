---
to: "src/views/<%= h.changeCase.pascalCase(name) %>.test.ts"
---
<%
  const fileName = h.changeCase.pascalCase(name)
  const importName = h.changeCase.pascalCase(fileName)
%>import { shallowMount } from "@vue/test-utils";

import <%= importName %> from "./<%= fileName %>.vue";

describe("@/views/<%= fileName %>", () => {
  it("is a valid view", () => {
    const wrapper = shallowMount(<%= importName %>);
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
})
