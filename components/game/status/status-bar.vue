
<template>
    <div
        class="border-b border-x lg:mx-4 slide-top border-future-400 rounded-b p-4 flex items-center text-future-400 bg-future-400 bg-opacity-20">
        <div class="flex w-full items-center">
            <ul class="flex gap-4 flex-grow">
                <li>
                    Test
                </li>
            </ul>
            <nuxt-link to="/game/profile"><i class="fal fa-user-circle"></i> {{ authStore.account.name }}</nuxt-link>
        </div>

    </div>

</template>

<script setup lang="ts">
import { useAuthStore } from '../../../stores/authStore';
const authStore = useAuthStore();

</script>