<script setup lang="js">

import { MotionPlugin } from '@vueuse/motion'




</script>

<template>
    <section class="projects text-red-800">
        <div class="container mx-auto ">
            <div>

                <div class="h2  text-textCol title " id="experience">Work Experience</div>
                <p class="max-w-sm mb-16"></p>
            </div>
            <div class="flex flex-col lg:flex-row gap-x-10">
                <div v-motion :initial="{
                    opacity: 0,
                    x: -100,
                }" :visible="{
    opacity: 1,
    transition: {
        delay: 100,
    },
    x: 0,
}" class="flex-1 flex flex-row gap-20 mb-10 lg:mb-10 ">


                    <div class=" flex flex-col items-center ">

                         <p class="title">Junior Software Engineer @ Almma.AI: <br> January 2024 - June 2025</p>

                        <br>
                        <p class="text-white text-2xl">•
                            Developed and deployed secure authentication mechanisms using Azure AD B2C, ensuring user data protection and
compliance with modern security standards into Capable Almma
                            <br>•

                           Designed and optimized RESTful APIs to collect, store, and process user data in Azure Cosmos DB, enabling
scalable and efficient data management for analytics.
                            <!-- <br>•
                            Introduced a multi prompt feature to the chat application, allowing the inclusion of multiple sub-prompts within a
single parent prompt, thereby increasing the app’s functionality and user interaction flexibility. -->
                            <!-- <br>•
                            Utilized .NET and C# to develop REST APIs for software applications. -->
                        </p>

                    </div>
                    <div class=" flex flex-col items-center ">

                        <p class="title">Software Development Intern @ Amazon Web Services: <br> June 2024 - Septemper 2024</p>

                        <br>
                        <p class="text-white text-2xl">•
                            Engineered an operations automation tool that streamlined manual tasks for on-call engineers by automating log
retrieval, custom log queries, and metric graph generation, reducing operational inefficiencies by 30%.
                            <br>•

                            Delivered a fully deployed automation solution that enhanced operational workflows, resulting in measurable
reductions in manual effort and improved system monitoring capabilities.
                            <!-- <br>•
                            Introduced a multi prompt feature to the chat application, allowing the inclusion of multiple sub-prompts within a
single parent prompt, thereby increasing the app’s functionality and user interaction flexibility. -->
                            <!-- <br>•
                            Utilized .NET and C# to develop REST APIs for software applications. -->
                        </p>

                    </div>
                </div>

            </div>
        </div>

    </section>
</template>

<style scoped lang="scss">
@media (max-width: 640px) {
    .group:hover .group-hover\:bg-black\/70 {
        background: transparent !important;
    }

    .group-hover\:scale-125 {
        transform: scale(1) !important;
    }

    .absolute {
        position: static !important;
    }

    .-bottom-full {
        bottom: auto !important;
    }

    .left-12 {
        left: auto !important;
    }
}

.projects {
    position: relative;
    margin-top: 20rem;
    z-index: 2;
}

@mixin center() {
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
}


@import url(https://fonts.googleapis.com/css?family=Raleway:400,,800,900);

html {
    width: 100%;
    height: 100%;
}

body {
    background: -webkit-linear-gradient(rgb(235, 236, 231), rgb(255, 255, 255));
    background: linear-gradient(rgb(235, 236, 231), rgb(255, 255, 255));
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: 'Raleway', sans-serif;
}

.container {
    position: absolute;
    @include center();
}

.title {

    font-weight: 800;
    color: transparent;
    font-size: 30px;
    background: url("https://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/rainbow-nebula.jpg") repeat;
    background-position: 40% 50%;
    -webkit-background-clip: text;
    position: relative;
    text-align: center;
    line-height: 90px;

}


.proj {

    font-weight: 800;
    color: transparent;
    font-size: 40px;
    background: url("https://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/rainbow-nebula.jpg") repeat;
    background-position: 40% 50%;
    -webkit-background-clip: text;
    position: relative;
    text-align: center;
    /* line-height: 90px; */

}

.subtitle {
    display: block;
    text-align: center;
    text-transform: uppercase;
    padding-top: 10px;
}

@media (max-width: 640px) {
    .projects {
        position: relative;
        margin-top: 55rem;
        z-index: 2;
    }
}
</style>
