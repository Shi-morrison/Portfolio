<script setup lang="js">


function contactMe() {
    window.location.href = 'mailto:shian.morrison@gmail.com';
};

</script>

<template>
    <section class="section contacts bg-red-700" v-motion :initial="{
        opacity: 0,
        y: 100,
    }" :visible="{
    opacity: 1,
    transition: {
        delay: 100,
    },
    y: 0,
}">
        <div class="container mx-auto flex flex-col items-center justify-center">
            <h1 class="title" id="contact">Contact Me</h1>
            <p class="title"> If you have any questions or would like to get in touch, please contact me through email. I
                will be
                happy to respond as soon as I am available. </p>
            <button @click="contactMe" class="contact-button text-center ">Contact Me</button>
        </div>
    </section>
</template>

<style scoped lang="scss">
.contacts {
    position: relative;
    margin-top: 220rem;
    z-index: 2;
}

.contact-button {
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background: linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
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
