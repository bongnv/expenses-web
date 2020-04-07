---
to: src/store/modules/<%= h.changeCase.kebab(name) %>.test.ts
---
<%
  const fileName = h.changeCase.kebab(name)
  const importName = h.changeCase.camel(fileName) + 'Module'
%>import <%= importName %> from "./<%= fileName %>";

describe("@/store/modules/<%= fileName %>", () => {
  it("exports a valid Vuex module", () => {
    expect(<%= importName %>.actions).toBeTruthy();
    expect(<%= importName %>.getters).toBeTruthy();
    expect(<%= importName %>.state).toBeTruthy();
    expect(<%= importName %>.mutations).toBeTruthy();
  });
});