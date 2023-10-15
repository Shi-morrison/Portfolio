<script >

export default {
    name: "typeWiriter",
    data: () => {
        return {
            typeValue: "",
            typeStatus: false,
            displayTextArray: ["Developer", "Engineer", "Designer", "Leader"],
            typingSpeed: 100,
            erasingSpeed: 100,
            newTextDelay: 2000,
            displayTextArrayIndex: 0,
            charIndex: 0,
        };
    },
    props: {},
    created() {
        setTimeout(this.typeText, this.newTextDelay + 200);
    },
    methods: {
        typeText() {
            if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
                if (!this.typeStatus) this.typeStatus = true;
                this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
                    this.charIndex
                );
                this.charIndex += 1;
                setTimeout(this.typeText, this.typingSpeed);
            } else {
                this.typeStatus = false;
                setTimeout(this.eraseText, this.newTextDelay);
            }
        },
        eraseText() {
            if (this.charIndex > 0) {
                if (!this.typeStatus) this.typeStatus = true;
                this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
                    0,
                    this.charIndex - 1
                );
                this.charIndex -= 1;
                setTimeout(this.eraseText, this.erasingSpeed);
            } else {
                this.typeStatus = false;
                this.displayTextArrayIndex += 1;
                if (this.displayTextArrayIndex >= this.displayTextArray.length)
                    this.displayTextArrayIndex = 0;
                setTimeout(this.typeText, this.typingSpeed + 1000);
            }
        },
    },
};


</script>

<template >
    <div class="sp-container">
        <div class="sp-content">
            <h2 class="frame-5">
                <span class=" text-xl ">
                    <p>Hi my name is</p>

                </span>
                <span>Shian</span>
                <span>Morrison,</span>
                <div class="newline">
                    <span>I</span>
                    <span>Am</span>
                    <span>A</span>
                    <span>
                        <span class="typed-text changing-text">{{ typeValue }}</span>
                        <span class="blinking-cursor">|</span>
                        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
                    </span>
                </div>
                <img src="../assets/Headshotcopy.jpg" alt="" class=" object-cover mx-auto rounded-full  image ">
                <span class=" text-xl ">
                    <p>As a passionate computer science student with a love for creating and
                        developing, I
                        strive to make
                        important applications that positively impact the lives of many.</p>

                </span>

            </h2>

        </div>
    </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Barlow');

.image {
    width: 30rem;
    position: relative;
    text-align: center;
    margin-top: 20px;
}

h1 {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    z-index: 1000;

    span.typed-text {
        color: #d2b94b;
    }
}

// Cursor blinking CSS Starts...
.blinking-cursor {
    font-size: 6rem;
    color: #2c3e50;
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
}

@keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #2c3e50;
    }
}

@-moz-keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #2c3e50;
    }
}

@-webkit-keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #2c3e50;
    }
}

@-ms-keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #2c3e50;
    }
}

@-o-keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #2c3e50;
    }
}

// Cursor blinking CSS Ends...

.container {
    width: 100%;
    position: relative;
    overflow: hidden;
}

a {
    text-decoration: none;
}



.sp-container {
    position: relative;
    top: 0px;
    left: 0px;
    /* width: 100%; */
    /* height: 100%; */
    z-index: 2;
    background: -webkit-radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3) 35%, rgba(0, 0, 0, 0.7));
    background: -moz-radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3) 35%, rgba(0, 0, 0, 0.7));
    background: -ms-radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3) 35%, rgba(0, 0, 0, 0.7));
    background: radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3) 35%, rgba(0, 0, 0, 0.7));
    margin: 500px;
    margin-bottom: 1000px;

}

.sp-content {
    /* position: relative; */
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;

    z-index: 1000;
}

.sp-container h2 {
    /* position: absolute; */
    top: 50%;
    line-height: 100px;
    height: 90px;
    margin-top: -50px;
    font-size: 90px;
    width: 100%;
    text-align: center;
    color: transparent;

}


s .sp-container h2.frame-5 {
    -webkit-animation: none;
    -moz-animation: none;
    -ms-animation: none;
    animation: none;
    color: transparent;
    text-shadow: 0px 0px 1px #fff;
}

.sp-container h2.frame-5 span {
    -webkit-animation: blurFadeIn 3s ease-in 1s backwards;
    -moz-animation: blurFadeIn 3s ease-in 1s backwards;
    -ms-animation: blurFadeIn 3s ease-in 1s backwards;
    animation: blurFadeIn ease-in 3s 1s backwards;
    color: transparent;
    text-shadow: 0px 0px 1px #fff;
    margin-left: 1rem;
}

.changing-text {
    color: #1d3557 !important;
    opacity: 1;

}

.newline {
    display: flex;
    flex-direction: row;
    justify-content: center;
}


/**/

@-webkit-keyframes blurFadeInOut {
    0% {
        opacity: 0;
        text-shadow: 0px 0px 40px #fff;
        -webkit-transform: scale(1.3);
    }

    20%,
    75% {
        opacity: 1;
        text-shadow: 0px 0px 1px #fff;
        -webkit-transform: scale(1);
    }

    100% {
        opacity: 0;
        text-shadow: 0px 0px 50px #fff;
        -webkit-transform: scale(0);
    }
}

@-webkit-keyframes blurFadeIn {
    0% {
        opacity: 0;
        text-shadow: 0px 0px 40px #fff;
        -webkit-transform: scale(1.3);
    }

    50% {
        opacity: 0.5;
        text-shadow: 0px 0px 10px #fff;
        -webkit-transform: scale(1.1);
    }

    100% {
        opacity: 1;
        text-shadow: 0px 0px 1px #fff;
        -webkit-transform: scale(1);
    }
}

@-webkit-keyframes fadeInBack {
    0% {
        opacity: 0;
        -webkit-transform: scale(0);
    }

    50% {
        opacity: 0.4;
        -webkit-transform: scale(2);
    }

    100% {
        opacity: 0.2;
        -webkit-transform: scale(5);
    }
}

@-webkit-keyframes fadeInRotate {
    0% {
        opacity: 0;
        -webkit-transform: scale(0) rotate(360deg);
    }

    100% {
        opacity: 1;
        -webkit-transform: scale(1) rotate(0deg);
    }
}

/**/

@-moz-keyframes blurFadeInOut {
    0% {
        opacity: 0;
        text-shadow: 0px 0px 40px #fff;
        -moz-transform: scale(1.3);
    }

    20%,
    75% {
        opacity: 1;
        text-shadow: 0px 0px 1px #fff;
        -moz-transform: scale(1);
    }

    100% {
        opacity: 0;
        text-shadow: 0px 0px 50px #fff;
        -moz-transform: scale(0);
    }
}

@-moz-keyframes blurFadeIn {
    0% {
        opacity: 0;
        text-shadow: 0px 0px 40px #fff;
        -moz-transform: scale(1.3);
    }

    100% {
        opacity: 1;
        text-shadow: 0px 0px 1px #fff;
        -moz-transform: scale(1);
    }
}

@-moz-keyframes fadeInBack {
    0% {
        opacity: 0;
        -moz-transform: scale(0);
    }

    50% {
        opacity: 0.4;
        -moz-transform: scale(2);
    }

    100% {
        opacity: 0.2;
        -moz-transform: scale(5);
    }
}

@-moz-keyframes fadeInRotate {
    0% {
        opacity: 0;
        -moz-transform: scale(0) rotate(360deg);
    }

    100% {
        opacity: 1;
        -moz-transform: scale(1) rotate(0deg);
    }
}

/**/

@keyframes blurFadeInOut {
    0% {
        opacity: 0;
        text-shadow: 0px 0px 40px #fff;
        transform: scale(1.3);
    }

    20%,
    75% {
        opacity: 1;
        text-shadow: 0px 0px 1px #fff;
        transform: scale(1);
    }

    100% {
        opacity: 0;
        text-shadow: 0px 0px 50px #fff;
        transform: scale(0);
    }
}

@keyframes blurFadeIn {
    0% {
        opacity: 0;
        text-shadow: 0px 0px 40px #fff;
        transform: scale(1.3);
    }

    50% {
        opacity: 0.5;
        text-shadow: 0px 0px 10px #fff;
        transform: scale(1.1);
    }

    100% {
        opacity: 1;
        text-shadow: 0px 0px 1px #fff;
        transform: scale(1);
    }
}

@keyframes fadeInBack {
    0% {
        opacity: 0;
        transform: scale(0);
    }

    50% {
        opacity: 0.4;
        transform: scale(2);
    }

    100% {
        opacity: 0.2;
        transform: scale(5);
    }
}

@keyframes fadeInRotate {
    0% {
        opacity: 0;
        transform: scale(0) rotate(360deg);
    }

    100% {
        opacity: 1;
        transform: scale(1) rotate(0deg);
    }
}
</style>
