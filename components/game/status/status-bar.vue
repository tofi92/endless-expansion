
<template>
    <div
        class="border-b border-x lg:mx-4 slide-top border-future-400 rounded-b p-4 flex items-center bg-slate-500 text-future-400 dark:bg-slate-800">
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