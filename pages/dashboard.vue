<script setup>
    const userData = useUserData()

    const profilePopup = ref(false)

    const username = ref("")
    const bio = ref("")

    function updateProfile() {
        userData.updateProfile({ username: username.value, bio: bio.value })

        profilePopup.value = false

        username.value = ""
        bio.value = ""
    }
</script>



<template>
<div>
    <div class="h-2/3 w-1/2 bg-blue absolute left-0 bottom-[-32.4%]" style="border-radius: 50% 100%;"></div>
    <div class="h-screen w-[23.3%] bg-gradient-to-r from-purple to-blue absolute"></div>
    <div class="h-2/3 w-1/4 bg-background absolute rounded-bl-full"></div>
    <div class="h-[1024px] w-1/2 bg-gradient-to-r from-purple to-blue absolute left-3/4 top-[-56px] animate-wiggle"></div>

    <button @click="$refs.find.$el.click()" class="bg-blue w-48 h-16 top-[35%] left-[33%] rounded-full absolute tracking-wider text-2xl font-light transition-opacity duration-200 hover:opacity-85">Find room</button>
    <button @click="$refs.create.$el.click()" class="gradient w-56 h-16 top-[35%] right-[33%] rounded-full absolute tracking-wider text-2xl font-light transition-opacity duration-200 hover:opacity-85">Create room</button>

    <button @click="profilePopup = true" class="bg-purple w-64 h-16 top-[62%] right-[26%] rounded-full absolute tracking-wider text-2xl font-light transition-opacity duration-200 hover:opacity-85">Update profile</button>

    <nuxt-link to="/search/find" ref="find"></nuxt-link>
    <nuxt-link to="/search/create" ref="create"></nuxt-link>

    <div v-show="profilePopup" class="h-screen w-screen bg-background bg-opacity-75 backdrop-filter backdrop-blur-md flex justify-center items-center">
        <div class="w-1/3 h-2/3 bg-background rounded-2xl border border-white border-opacity-20 grid grid-col pt-32 justify-center">
            <input type="text" placeholder="username" v-model="username" class="w-84 h-16 text-field bg-surface">
            <textarea placeholder="bio" v-model="bio" class="w-84 h-24 mt-[-4rem] text-field bg-surface resize-none pt-[1.2rem]"/>
            <button @click="updateProfile" class="w-84 h-24 mt-[-2rem] rounded-xl bg-gradient-to-tr from-blue to-purple text-4xl tracking-wider transition-opacity duration-200 hover:opacity-85">Update</button>
        </div>
    </div>
</div>
</template>

<script>
    import { useUserData } from "~/stores/useUserDataStore"
</script>