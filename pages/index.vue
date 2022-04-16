<script setup>
    const { $router } = useNuxtApp()

    const userData = useUserData()

    onMounted(async () => {
        await userData.getProfile()
        const isAuthenticated = userData.isAuthenticated

        if (isAuthenticated) {
            $router.push("/dashboard")
        }
        else {
            $router.push("/signin")
        }    
    })
</script>

<template>
<div class="bg-gradient-to-r from-green to-yellow
            h-screen flex justify-center pt-72
            text-9xl text-text font-black">
    <span class="animate-pulse">ZapChat</span>
</div>
</template>




<script>
    import { useUserData } from "~/stores/useUserDataStore"

    export default {
        layout: "none"
    }
</script>