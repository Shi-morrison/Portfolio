<script setup lang="ts">

</script>

<template>
    <div class="background-container">
        <div class="stars"></div>
        <div class="twinkling"></div>
        <div class="clouds"></div>
    </div>
</template>

<style scoped lang="scss">
/* ============================================================================================== 
SED Innovations
https://sed.am
https://mkrtchyan.ga
================================================================================================= */


@keyframes move-twink-back {
    from {
        background-position: 0 0;
    }

    to {
        background-position: -10000px 5000px;
    }
}

@-webkit-keyframes move-twink-back {
    from {
        background-position: 0 0;
    }

    to {
        background-position: -10000px 5000px;
    }
}

@-moz-keyframes move-twink-back {
    from {
        background-position: 0 0;
    }

    to {
        background-position: -10000px 5000px;
    }
}

@-ms-keyframes move-twink-back {
    from {
        background-position: 0 0;
    }

    to {
        background-position: -10000px 5000px;
    }
}

@keyframes move-clouds-back {
    from {
        background-position: 0 0;
    }

    to {
        background-position: 10000px 0;
    }
}

@-webkit-keyframes move-clouds-back {
    from {
        background-position: 0 0;
    }

    to {
        background-position: 10000px 0;
    }
}

@-moz-keyframes move-clouds-back {
    from {
        background-position: 0 0;
    }

    to {
        background-position: 10000px 0;
    }
}

@-ms-keyframes move-clouds-back {
    from {
        background-position: 0;
    }

    to {
        background-position: 10000px 0;
    }
}

.background-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    /* This ensures the background stays behind other content */
}

.stars,
.twinkling,
.clouds {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: auto;

}

.stars {
    background: #000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
    z-index: auto;
}

.twinkling {
    background: transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
    z-index: auto;

    -moz-animation: move-twink-back 200s linear infinite;
    -ms-animation: move-twink-back 200s linear infinite;
    -o-animation: move-twink-back 200s linear infinite;
    -webkit-animation: move-twink-back 200s linear infinite;
    animation: move-twink-back 200s linear infinite;
}
</style>
