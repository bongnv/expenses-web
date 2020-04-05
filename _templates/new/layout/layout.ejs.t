---
to: "src/layouts/<%= h.changeCase.pascalCase(name) %>.vue"
---
<template>
  <v-app>
    <v-content style="height:100vh">
      <slot />
    </v-content>
  </v-app>
</template>
