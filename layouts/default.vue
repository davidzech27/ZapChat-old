<template>
<div class="dark bg-background text-text font-sans font-extralight min-h-screen">
    <slot></slot>
</div>
</template>

<script setup>

</script>

<script>
export default {
    head: {
        bodyAttrs: {
            class: "overscroll-none overflow-hidden"
        },
        title: "ZapChat",
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap');
</style>
