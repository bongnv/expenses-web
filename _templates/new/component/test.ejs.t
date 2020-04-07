---
to: "src/components/<%= h.changeCase.pascalCase(name) %>.test.ts"
---
<%
  let fileName = h.changeCase.pascalCase(name)
  const importName = h.changeCase.pascalCase(fileName)
%>import <%= importName %> from "./<%= fileName %>.vue";
import { shallowMount } from "@vue/test-utils";

describe("@components/<%= fileName %>", () => {
  it("exports a valid component", () => {
    const wrapper = shallowMount(<%= importName %>);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
