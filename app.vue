<template>
    <Html :lang="locale">

    <Body>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </Body>

    </Html>
</template>


<script setup lang="ts" >
import { InitApp } from "@/utils/initApp";
InitApp();
const locale = useState<string>("locale.i18n");
</script>