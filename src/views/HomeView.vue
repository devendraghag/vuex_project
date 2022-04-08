<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <NamesComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import NamesComponent from "@/components/NamesComponent.vue";

export default {
  name: "HomeView",
  components: {
    NamesComponent,
  },
};
</script>
