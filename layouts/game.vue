
<template>
    <main class="w-full h-full flex flex-col relative" v-if="authStore.token">
        <game-status-bar />
        <section class="flex gap-4 flex-grow h-full">
            <div class="pt-3">
                <game-nav-bar></game-nav-bar>
            </div>

            <div class="flex-grow p-3 min-h-full">
                <div class="h-full bg-future-400 bg-opacity-20 rounded p-4 border border-future-400 entrance">
                    <slot />
                </div>

            </div>
        </section>

        <game-chat />
        <site-footer></site-footer>
    </main>
    <div class="min-h-screen w-full flex bg-black bg-opacity-50" v-else>
        <div class="m-auto flex flex-col items-center">
            <loader></loader>
            <p>Loading...</p>
        </div>

    </div>
</template>


<script setup lang="ts">
import { useAuthStore } from '../stores/authStore';
useHead({
    bodyAttrs: {
        class: "dark:text-slate-50 h-screen w-full"
    }
})

const authStore = useAuthStore();

useMsal();


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200&display=swap');

html {
    font-family: "Exo 2";
    background: #1e1e1e url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAG0lEQVQYV2P8//+/FCMj4zMGJMCIzIGxKRQEAJgPBAbJqUVTAAAAAElFTkSuQmCC) repeat;
}

#__nuxt {
    @apply w-full;
    @apply h-full;
}
</style>