<script setup lang="js">

import { MotionPlugin } from '@vueuse/motion'




</script>

<template>
    <section class="projects text-red-800">
        <div class="container mx-auto ">
            <div class="flex flex-col lg:flex-row gap-x-10">
                <div v-motion :initial="{
                    opacity: 0,
                    x: 0,
                }" :visible="{
    opacity: 1,
    transition: {
        delay: 100,
    },
    x: 0,
}" class="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-10">
                    <div>

                        <div class="h2  text-textCol title " id="projects">My Latest Work</div>
                        <p class="max-w-sm mb-16"></p>
                    </div>
                    <div class=" group relative overflow-hidden   border-2 border-white/50 rounded-xl w-fit">
                        <a href="https://www.chess10.com/" target="_blank">
                            <div class="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
                            </div>
                            <img src="../assets/chess10.png" alt=""
                                class="proj1 group-hover:scale-125 transition-all duration-500">
                            <div class="absolute -bottom-full  group-hover:bottom-24 transition-all duration-500 z-50">
                                <span class="text-white"> Collaborated in a team to develop Chess 10, a groundbreaking
                                    three-dimensional chess game with re-imagined rules, which won first place among over
                                    1200 participants at the ShellHacks Hackathon.</span>
                            </div>
                            <div class="absolute -bottom-full group-hover:bottom-4 transition-all duration-700 z-50 w-full">
                                <span class="text-2xl text-white ">Chess 10 (React, Vanta.js, Typescript)</span>
                            </div>

                        </a>
                    </div>
                    <div class=" group relative overflow-hidden   border-2 border-white/50 rounded-xl w-fit">
                        <a href="https://codeclash.app/" target="_blank">
                            <div class="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
                            </div>
                            <img src="../assets/codeclash.png" alt=""
                                class="proj1 group-hover:scale-125 transition-all duration-500">
                            <div class="absolute -bottom-full group-hover:bottom-24 transition-all duration-500 z-50  ">
                                <span class="text-white ">An interactive web-based application thats hosts real-time competitive coding battles between two participants. Utilizing a selection of LeetCode problems, players will face off and the player who solves the problem first will win the game.</span>
                            </div>
                            <div class="absolute -bottom-full group-hover:bottom-4 transition-all duration-700 z-50 w-full">
                                <span class="text-2xl text-white ">Code Clash (Mithril.Js, Typescript, Oauth2,
                                    Websockets)</span>
                            </div>
                        </a>

                    </div>
                </div>
                <div v-motion :initial="{
                    opacity: 0,
                    x: 0,
                }" :visible="{
    opacity: 1,
    transition: {
        delay: 100,
    },
    x: 0,
}" class="flex-1 flex flex-col gap-y-10">
                    <div class=" group relative overflow-hidden border-2 vorder-white/50 rounded-xl w-fit">
                        <a href="https://devpost.com/software/swamp-vision" target="_blank">
                            <div class="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
                            </div>
                            <img src="../assets/Swamp.jpg" alt=""
                                class="proj1 group-hover:scale-125 transition-all duration-500">
                            <div class="absolute -bottom-full  group-hover:bottom-24 transition-all duration-500 z-50 ">
                                <span class="text-white"> Developed an innovative program aimed at detecting
                                    endangered
                                    species in Florida, leveraging the YOLO algorithm for object detection.
                                    This
                                    endeavor was significantly propelled by the implementation of various technologies and
                                    libraries including Python, PyTorch, Numpy, and Roboflow. The project was a part of the
                                    competitive Swamp Hacks IX hackathon.</span>
                            </div>
                            <div
                                class="absolute -bottom-full group-hover:bottom-4 transition-all duration-700 z-50 w-full ">
                                <span class="text-2xl text-white ">SwampVision (Python, PyTorch,
                                    Roboflow)</span>
                            </div>
                        </a>

                    </div>
                    <div class=" group relative overflow-hidden border-2 vorder-white/50 rounded-xl w-fit">
                        <a href="https://github.com/Shi-morrison/TTS-AI" target="_blank">
                            <div class="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
                            </div>
                            <img src="../assets/overtone.jpg" alt=""
                                class="proj1 group-hover:scale-125 transition-all duration-500">
                            <div class="absolute -bottom-full group-hover:bottom-24 transition-all duration-500 z-50">
                                <span class="text-white">Developed a chat text-to-speech application using OpenAI for
                                    chatbox
                                    interaction. Utilized AWS CDK in Go for creating Lambda functions and APIs, while
                                    designing
                                    the frontend using React, TailwindCSS, and Next.js, ensuring a user-friendly interface
                                    and
                                    seamless real-time communication.</span>
                            </div>
                            <div
                                class="absolute -bottom-full group-hover:bottom-4 transition-all duration-700 z-50 w-full ">
                                <span class="text-2xl text-white ">Overtone (OpenAI, AWS, Typescript)</span>
                            </div>
                        </a>


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


}

.projects {
    position: relative;
    margin-top: 78rem;
    z-index: 2;
}

@media (max-width: 640px) {
    .projects {
        position: relative;
        margin-top: 145rem;
        z-index: 2;
    }
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
    font-size: 70px;
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
    font-size: 2.5vw;
    background: url("https://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/rainbow-nebula.jpg") repeat;
    background-position: 40% 50%;
    -webkit-background-clip: text;
    position: relative;
    text-align: center;
    width: 100%;
    /* line-height: 90px; */

}

.subtitle {
    display: block;
    text-align: center;
    text-transform: uppercase;
    padding-top: 10px;
}</style>
