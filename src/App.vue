<script setup lang="ts">
import Navbar from './components/Navbar.vue';
// import Home from './components/Home.vue';
import Projects from './components/Projects.vue'

</script>

<template>
  <Navbar></Navbar>
  <div id="home">
    <!-- <Home></Home> -->
  </div>
  <div id="projects">
    <Projects></Projects>
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
