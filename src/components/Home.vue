<script setup lang="ts">

</script>

<template>
    <video autoplay loop muted>
        <source src="../assets/testvid.mov" type="video/mp4" />

    </video>
</template>

<style scoped>
video {
    z-index: -1000;
    left: 50%;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    object-fit: cover;
}
</style>
