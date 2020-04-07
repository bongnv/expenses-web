<template>
  <MainLayout>
    <div class="home">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </MainLayout>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";

import appConfig from "@/app.config.json";
import HelloWorld from "@/components/HelloWorld.vue";
import MainLayout from "@/layouts/MainLayout.vue";

export default Vue.extend({
  name: "Home",
  metaInfo: {
    title: "Home",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: {
    HelloWorld,
    MainLayout
  }
});
</script>
