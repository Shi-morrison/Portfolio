<script setup lang="js">
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
import Projects from './components/Projects.vue'
import Introduction from './components/Introduction.vue'

</script>

<template>
  <Navbar></Navbar>
  <div id="backround">
    <Home></Home>
  </div>
  <div id="introduction">
    <Introduction></Introduction>
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
