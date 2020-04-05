<template>
  <MainLayout>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </MainLayout>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    MainLayout
  }
};
</script>
