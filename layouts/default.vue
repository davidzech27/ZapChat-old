<template>
<div class="dark bg-background text-text min-h-screen">
    <slot></slot>
</div>
</template>

<script>
export default {
    head: {
        bodyAttrs: {
            class: "overscroll-none"
        }
    }
}
</script>