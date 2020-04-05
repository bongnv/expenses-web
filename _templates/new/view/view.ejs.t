---
to: "src/views/<%= h.changeCase.pascalCase(name) %>.vue"
---
<%
  const fileName = h.changeCase.kebab(name)
  const importName = h.changeCase.pascal(fileName)
  const titleName = h.changeCase.title(name)
%>

<template>
  <MainLayout>
    <%= titleName %>
  </MainLayout>
</template>

<script lang="ts">
import Vue from "vue";
import MainLayout from "@/layouts/MainLayout.vue";

export default Vue.extend({
  page: {
    title: "<%= titleName %>",
    meta: [{ name: "description", content: "The <%= titleName %> page." }],
  },
  components: { MainLayout }
});
</script>

<%

if (useStyles) { %>
<style module>
</style>
<% } %>
