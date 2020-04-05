---
to: "src/layouts/<%= h.changeCase.pascalCase(name) %>.test.ts"
---
<%
  const fileName = h.changeCase.pascalCase(name)
  const importName = h.changeCase.pascalCase(fileName) + 'Layout'
%>import <%= importName %> from "./<%= fileName %>.vue";
import { shallowMount } from "@vue/test-utils";

describe('@layouts/<%= fileName %>', () => {
  it('renders its content', () => {
    const slotContent = '<p>Hello!</p>';
    const { element } = shallowMount(<%= importName %>, {
      slots: {
        default: slotContent,
      },
    });
    expect(element.innerHTML).toContain(slotContent);
  })
})
