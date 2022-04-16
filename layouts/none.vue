<template>
<div>
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