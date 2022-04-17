<script setup>
    const mode = useRoute().params.mode[0].toUpperCase() + useRoute().params.mode.slice(1)

    const text = ref("")
    const roomAlreadyExists = ref(false)

    const { $router } = useNuxtApp()

    const room = useRoom()

    async function handleInput() {
        if (mode === "Find") {
            $router.push("/room/" + text.value)
        }
        else if (mode === "Create") {
            if (await room.createRoom(text.value)) {
                $router.push("/room/" + text.value)
            }
            else {
                text.value = ""
                roomAlreadyExists.value = true
            }
        }
    }
</script>

<template>
<div>
    <div>
        <div class="w-5/12 h-64 bottom-0 bg-gradient-to-t from-blue to-purple absolute"></div>
        <div class="w-1/2 h-96 bottom-2 -left-12 bg-background absolute" style="border-radius: 50% 100%;"></div>
        <div class="w-3/4 h-96 -bottom-64 -right-13 bg-gradient-to-r from-blue to-purple absolute" style="border-radius: 100% 50%;"></div>
    </div>
    <div class="flex justify-center pt-1/5">
        <input type="text" :placeholder="!roomAlreadyExists ? mode + ' room' : 'Room already exists!'" v-model="text" class="w-7/12 h-16 text-field bg-surface">
        <button class="ml-2.5 w-28 h-16 bg-surface rounded-xl text-xl text-center tracking-wider hover:bg-opacity-75" @click="handleInput">{{ mode }}</button>
    </div>
</div>
</template>

<script>
    import { useRoom } from "~/stores/useRoomStore"
</script>