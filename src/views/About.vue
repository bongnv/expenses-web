<template>
  <MainLayout>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </MainLayout>
</template>

<script lang="ts">
import Vue from "vue";

import appConfig from "@/app.config.json";
import MainLayout from "@/layouts/MainLayout.vue";

export default Vue.extend({
  name: "About",
  metaInfo: {
    title: "About",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: {
    MainLayout
  }
});
</script>
