---
to: "src/components/<%= h.changeCase.pascalCase(name) %>.vue"
---
<%
if (blocks.indexOf('template') !== -1) {
%>
<template>
  <div/>
</template>

<%
}

if (blocks.indexOf('script') !== -1) {
%><script lang="ts">
import Vue from "vue";

export default Vue.extend({
  <% if (blocks.indexOf('template') === -1) {
  %>render(h) {
    return <div/>;
  }<% } %>
});
</script>
<%
}

if (blocks.indexOf('style') !== -1) {
%>
<style module>
</style><%
}
%>
