<script setup lang="js">
import Navbar from './components/Navbar.vue';
import Background from './components/Background.vue';
import Projects from './components/Projects.vue'
import Introduction from './components/Introduction.vue'
import Contact from './components/Contact.vue'

</script>

<!-- <template>
  <Navbar></Navbar>
  <div id="backround">
    <Backround></Backround>
    <Introduction></Introduction>
  </div>
  <div id="introduction">

  </div>
  <div id="projects">
    <Projects></Projects>
  </div>
</template> -->
<template>
  <Background />
  <Navbar />
  <div id="home">
    <Introduction />
  </div>
  <div>
    <Projects />
  </div>
  <div id="contact">
    <Contact />
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
