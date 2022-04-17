<template>
<div class="dark bg-background text-text font-sans font-extralight min-h-screen">
    <slot></slot>
</div>
</template>

<script>
export default {
    head: {
        bodyAttrs: {
            class: "overscroll-none overflow-hidden"
        }
    }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap');
</style>
