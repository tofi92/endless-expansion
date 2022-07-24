<template>
    <div class="h-full">

        <div class="absolute transition-opacity bg-black top-0 left-0 h-full w-full bg-opacity-50 lg:hidden"
            :class="{ 'opacity-100': navBarShown, 'opacity-0': !navBarShown }">

        </div>


        <transition name="slide-down">
            <nav class="py-4 bg-future-400 bg-opacity-20 text-future-400 border-future-400
         border-r border-l border-b rounded-b h-min absolute top-0 left-0 w-full
         lg:border-l-0 lg:border-y lg:rounded-r lg:h-auto lg:relative lg:w-auto" v-show="navBarShown" id="game-nav">
                <ul class="flex flex-col items-center lg:items-start" @click="hideNavbarWhenClicked">
                    <li v-for="link in links" :key="link.caption"
                        class="px-4 py-2 hover:bg-opacity-50 hover:bg-future-400 transition-colors"
                        style="background-size: 200% 100%;">
                        <nuxt-link :to="link.to">
                            <div class="text-future-400 ">
                                {{ $t(link.caption) }}
                            </div>
                        </nuxt-link>
                    </li>
                </ul>
            </nav>
        </transition>

    </div>

</template>

<script setup lang="ts">
import useGameNav from '@/composables/useGameNav';
const { links } = useGameNav();


const navBarShown = ref(true);


const onSwipeUp = () => {
    navBarShown.value = false;
}

const onSwipeDown = () => {
    navBarShown.value = true;
}

function hideNavbarWhenClicked() {
    const isBigScreen = !window.matchMedia("(max-width: 1024px)").matches;
    if (!isBigScreen) {
        navBarShown.value = false;
    }
}

useTouch(null, null, onSwipeUp, onSwipeDown);

onMounted(() => {
    const isBigScreen = !window.matchMedia("(max-width: 1024px)").matches;
    if (isBigScreen) {
        document.getElementById("game-nav").classList.add("slide-left");
    }

    navBarShown.value = isBigScreen ? true : false;
})





</script>