<script setup>
    const profilePopup = ref(false)

    function updateProfile() {

    }
</script>



<template>
<div class="h-screen w-screen backdrop-blur-lg z-10">
    <div class="h-2/3 w-1/2 bg-blue absolute left-0 bottom-[-32.4%]" style="border-radius: 50% 100%;"></div>
    <div class="h-screen w-[23.3%] bg-gradient-to-r from-purple to-blue absolute"></div>
    <div class="h-2/3 w-1/4 bg-background absolute rounded-bl-full"></div>
    <div class="h-[1024px] w-1/2 bg-gradient-to-r from-purple to-blue absolute left-3/4 top-[-56px] animate-wiggle z-10"></div>

    <button @click="$refs.find.$el.click()" class="bg-blue w-48 h-16 top-[35%] left-[33%] rounded-full absolute tracking-wider text-2xl font-light transition-opacity duration-200 hover:opacity-85">Find room</button>
    <button @click="$refs.create.$el.click()" class="gradient w-56 h-16 top-[35%] right-[33%] rounded-full absolute tracking-wider text-2xl font-light transition-opacity duration-200 hover:opacity-85">Create room</button>

    <button @click="$refs.update.$el.click()" class="bg-purple w-64 h-16 top-[62%] right-[26%] rounded-full absolute tracking-wider text-2xl font-light z-0 transition-opacity duration-200 hover:opacity-85">Update profile</button>

    <nuxt-link to="/search/find" ref="find"></nuxt-link>
    <nuxt-link to="/search/create" ref="create"></nuxt-link>
    <nuxt-link to="/a" ref="update"></nuxt-link>
</div>
</template>