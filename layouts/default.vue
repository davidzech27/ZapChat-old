<template>
<div class="min-h-screen">
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