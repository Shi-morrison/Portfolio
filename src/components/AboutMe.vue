<script setup lang="js">

import { MotionPlugin } from '@vueuse/motion'
import { MotionDirective as MotionDirective } from '@vueuse/motion'

import $ from 'jquery';

$(document).on("mousemove", function (e) {
    var mouseX, mouseY;
    var ww = $(window).width();
    var wh = $(window).height();
    var traX, traY;
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + 40;
    traY = ((4 * mouseY) / 570) + 50;
    console.log(traX);
    $(".title").css({ "background-position": traX + "%" + traY + "%" });
});

function contactMe() {
    window.location.href = 'mailto:shian.morrison@gmail.com ';
}



</script>

<template>
    <section class="section contacts bg-red-700" v-motion :initial="{
        opacity: 0,
        y: -100,
    }" :visible="{
    opacity: 1,
    transition: {
        delay: 100,
    },
    y: 0,
}">

        <div class="container mx-auto flex flex-col items-center justify-center">
            <h1 class="title" id="aboutme">About Me</h1>
            <p class="text-white text-2xl"> Hello! My name is Shian and I enjoy creating things that live on the
                internet. I got into programming when I was around 13 with my interest being game development. I
                eventually got into
                web development during college and have been enjoying it ever since.
                <br>
                <br>
                Fast-forward to today, and I’ve had the privilege of working at multiple internships and learning so much
                through them.
                My main focus these days is building accessible applications and continuing to learn new things, that way I
                can be a valuable asset to a company.
                <br>
                <br>
                I am also working on becoming a leader in my community by joining great organizations, such as the National
                Society of Black Engineers. I hope to some day make a huge difference in this space and become an
                inspiration to others.
                <br>
                <br>
                Here are a few technologies I’ve been working with recently:
                <br>
            <div class="flex flex-row gap-5">
                <div class="flex flex-col title">
                    <p>React</p>
                    <p>Node</p>
                </div>
                <div class="flex flex-col title">
                    <p>AWS</p>
                    <p>Typescript</p>
                </div>
            </div>

            </p>

        </div>
    </section>
</template>

<style scoped lang="scss">
.contacts {
    position: relative;
    margin-top: 40rem;
    margin-bottom: 85rem;
    z-index: 2;
}

.contact-button {
    /* padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background: linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out; */
    margin-bottom: 40rem;
}

.contact-button:hover {
    transform: translateY(-2px);
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
</style>
