<template>
    <div class="min-h-screen w-full flex flex-col">
        <site-nav-bar></site-nav-bar>
        <div class="flex-grow p-3">
            <slot />
        </div>

        <site-footer></site-footer>
    </div>
</template>


<script setup lang="ts">

useHead({
    bodyAttrs: {
        class: "dark:text-slate-50"
    }
})

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200&display=swap');

html {
    font-family: "Exo 2";
    background: #1e1e1e url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAG0lEQVQYV2P8//+/FCMj4zMGJMCIzIGxKRQEAJgPBAbJqUVTAAAAAElFTkSuQmCC) repeat;
}
</style>