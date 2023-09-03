<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, onMounted, onUnmounted } from 'vue';
const isNavbarVisible = ref(false);
const isMobile = ref(window.innerWidth <= 768);  // Use 768px as breakpoint, can be adjusted

let hideTimeout: number | null = null;

// Toggle Navbar
const toggleNavbar = () => {
    if (isMobile.value) {
        isNavbarVisible.value = !isNavbarVisible.value;
    }
};

// Update Mobile status on window resize
const updateMobileStatus = () => {
    isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
    window.addEventListener('resize', updateMobileStatus);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateMobileStatus);
});

const showNavbar = () => {
    if (!isMobile.value) {
        isNavbarVisible.value = true;
        if (hideTimeout) {
            clearTimeout(hideTimeout);
        }
    }
};

const hideNavbar = () => {
    if (!isMobile.value) {
        if (hideTimeout) {
            clearTimeout(hideTimeout);
        }
        hideTimeout = setTimeout(() => {
            isNavbarVisible.value = false;
        }, 500); // This gives the user 500ms to move to the navbar after leaving the hover-trigger
    }
};
const clearHideTimeout = () => {
    if (hideTimeout) {
        clearTimeout(hideTimeout);
    }
};
</script>

<template>
    <!-- Hover trigger for large screens -->
    <div v-if="!isMobile" @mouseenter="showNavbar" @mouseleave="hideNavbar" class="hover-trigger"></div>

    <!-- Hamburger button -->
    <button v-if="isMobile" class="hamburger hamburger--collapse absolute top-4 right-0 z-10" type="button"
        :class="{ 'is-active': isNavbarVisible }" @click="toggleNavbar">
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </button>

    <transition name="slide-fade-right">
        <nav v-show="isNavbarVisible" @mouseenter="clearHideTimeout" @mouseleave="hideNavbar"
            class="p-4 absolute right-0 h-full">

            <ul class="flex flex-col space-y-8 text-primary h-full justify-center items-center">
                <li><a href="#home" class=" hvr-bob hover:text-white">
                        <Icon icon="ic:baseline-home" width="35" />


                    </a></li>
                <li><a href="#projects" class=" hvr-bob hover:text-white">
                        <Icon icon="eos-icons:project" width="35" />
                    </a></li>
                <li><a href="#contact" class="hvr-bob hover:text-white">
                        <Icon icon="material-symbols:android-contacts" width="35" />
                    </a></li>
                <li><a href="https://www.linkedin.com/in/shianmorrison1/" target="_blank" rel="noopener noreferrer"
                        class="hvr-bob hover:text-white">
                        <svg class="h-6 w-6 hover:opacity-80" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg></a>
                </li>
                <li><a href="https://github.com/Shi-morrison" target="_blank" rel="noopener noreferrer"
                        class="hvr-bob hover:text-white">
                        <svg class="h-6 w-6 hover:opacity-80 " xmlns="http://www.w3.org/2000/svg" width="98" height="96"
                            viewBox="0 0 98 96">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                                fill="currentColor" />
                        </svg></a>
                </li>

            </ul>
        </nav>
    </transition>
</template>

<style scoped> /* Hamburger button styles */
 .hamburger {
     background: none;
     /* Remove background */
     border: none;
     /* Remove border if any */
 }

 /* Starting state for entering and leaving */
 .slide-fade-right-enter,
 .slide-fade-right-leave-to {
     transform: translateX(100%);
     opacity: 0;
 }

 /* Ending state for entering */
 .slide-fade-right-enter-to {
     transform: translateX(0);
     opacity: 1;
 }

 /* Starting state for leaving */
 .slide-fade-right-leave {
     transform: translateX(0);
     opacity: 1;
 }

 /* Transitions */
 .slide-fade-right-enter-active,
 .slide-fade-right-leave-active {
     transition: opacity 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
 }

 .hover-trigger {
     width: 50px;
     height: 50%;
     /* Adjust based on the height of your navbar */
     position: fixed;
     right: 0;
     top: 25%;
     /* Adjust to align it with the top or center of your navbar */
     z-index: 8;
     background-color: transparent;

 }

 /* Use media query to hide the hamburger on larger screens */
 @media (min-width: 769px) {

     /* Adjust 769px to the breakpoint you want */
     .hamburger {
         display: none;
     }
 }

 nav {
     z-index: 9;
     /* or a value higher than any other z-index in your project */
 }
</style>
