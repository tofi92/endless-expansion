
<template>
    <nav class="p-4 text-future-400 items-center flex gap-8 bg-future-400 bg-opacity-20">
        <img src="@/assets/img/logo.png" class="h-7" alt="logo" />
        <ul class="flex gap-4">
            <li v-for="link in links" :key="link.to">
                <nuxt-link :to="link.to">{{ $t(link.caption) }}</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import useNav from '@/composables/useNav';
const { links } = useNav();

</script>