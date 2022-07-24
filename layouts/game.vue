
<template>
    <main class="min-h-screen w-full flex flex-col relative" v-if="authStore.token">
        <game-status-bar />
        <section class="flex gap-4 flex-grow">
            <game-nav-bar></game-nav-bar>
            <div class="flex-grow p-3">
                <slot />
            </div>
        </section>


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
        class: "bg-slate-300 dark:bg-slate-600 dark:text-slate-50"
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
</style>