<script setup>
    const roomName = useRoute().params.roomName

    const userData = useUserData()
    const { profile } = storeToRefs(userData)

    const room = useRoom()
    const { room: roomData } = storeToRefs(room)

    const topicText = reactive({
        topic1: "",
        topic2: "",
        topic3: ""
    })

    onBeforeMount(async () => {
        room.getRoom(roomName)
        userData.getProfile()
    })

    function sendMessage(topicNumber) {
        if (topicText["topic" + topicNumber] !== "") {
            room.sendMessage({ topicNumber, text: topicText["topic" + topicNumber] })
        }
        
        topicText["topic" + topicNumber] = ""
    }
</script>

<template>
<div v-if="room.isLoaded" class="grid grid-cols-3">
    <div class="min-h-screen flex overflow-y-scroll">
        <div class="w-full h-24 bg-surface tracking-widest font-normal text-4xl flex">
            <span class="mx-auto self-center">{{ roomData.topic1.name}}</span>
        </div>
        
        
        <div class="w-1/3 h-24 bg-surface bg-opacity-50 absolute bottom-0 z-10 flex">
            <input @keyup.enter="sendMessage(1)" type="text" :placeholder="'Message ' + roomData.topic1.name" v-model="topicText.topic1" class="w-[26rem] h-16 text-field self-center mx-auto bg-surface focus:bg-background opacity-80">
        </div>

        <div class="h-48 w-48 left-0 bottom-0 absolute rounded-tr-full bg-gradient-to-r from-purple to-blue"></div>
    </div>
    <div class="min-h-screen flex overflow-y-scroll bg-surface">
        <div class="w-full h-24 gradient tracking-widest font-normal text-4xl flex">
            <span class="mx-auto self-center">{{ roomData.topic2.name}}</span>
        </div>



        <div class="w-1/3 h-24 absolute bottom-0 z-10 flex">
            <input @keyup.enter="sendMessage(2)" type="text" :placeholder="'Message ' + roomData.topic2.name" v-model="topicText.topic2" class="w-[26rem] h-16 text-field self-center mx-auto bg-surface focus:bg-background">
        </div>
    </div>
    <div class="min-h-screen flex overflow-y-scroll">
        <div class="w-full h-24 tracking-widest font-normal text-4xl flex z-10">
            <span class="mx-auto self-center">{{ roomData.topic3.name}}</span>
        </div>

        <div class="w-1/3 h-24 bg-surface bg-opacity-50 absolute bottom-0 z-10 flex">
            <input @keyup.enter="sendMessage(3)" type="text" :placeholder="'Message ' + roomData.topic3.name" v-model="topicText.topic3" class="w-[26rem] h-16 text-field self-center mx-auto bg-surface bg-opacity-60 focus:bg-opacity-100">
        </div>

        <div class="h-1/3 w-1/4 right-0 top-0 absolute bg-gradient-to-r from-purple to-blue"></div>
        <div class="h-2/3 w-1/3 -right-2.5 -top-2.5 absolute bg-background" style="border-radius: 50% 100%;"></div>
    </div>
    
</div>
<div v-else class="gradient
            h-screen flex justify-center pt-72
            text-9xl text-text font-light tracking-wide">
    <span class="animate-pulse">Loading...</span>
</div>
</template>

<script>
    import { useUserData } from "~/stores/useUserDataStore"
    import { useRoom } from "~/stores/useRoomStore"
    import { storeToRefs } from "pinia"
</script>
