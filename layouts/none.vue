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
        },
        title: "ZapChat",
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
}
</script>