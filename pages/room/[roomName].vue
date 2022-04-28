<script setup>
const { $router, $refs } = useNuxtApp()

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

const topic1 = ref("")
const topic2 = ref("")
const topic3 = ref("")

const editRoomPopup = ref(false)

onBeforeMount(async () => {
	await room.getRoom(roomName)
	setInterval(() => {
		room.getRoom(roomName)
	}, 1500)
})

onMounted(async () => {
	await userData.getProfile()
	const isAuthenticated = userData.isAuthenticated

	if (!isAuthenticated) {
		$router.push("/signin")
	}
})

function sendMessage(topicNumber) {
	if (topicText["topic" + topicNumber] !== "") {
		room.sendMessage({ topicNumber: topicNumber, text: topicText["topic" + topicNumber] })
	}

	topicText["topic" + topicNumber] = ""
}

function updateRoom() {
	room.updateRoom({ topic1: topic1.value, topic2: topic2.value, topic3: topic3.value })

	editRoomPopup.value = false

	topic1.value = ""
	topic2.value = ""
	topic3.value = ""
}
</script>

<template>
	<div v-if="room.isLoaded && room.exists" class="grid grid-cols-3">
		<div class="min-h-screen flex flex-col">
			<div class="w-full h-24 bg-surface tracking-widest font-normal text-4xl flex z-10">
				<span class="mx-auto self-center">{{ roomData.topic1.name }}</span>
			</div>

			<div class="h-[37.55rem] px-6 z-5 overflow-y-scroll" ref="topic1messages">
				<div
					v-for="message in roomData.topic1.messages"
					:key="message.sentAt"
					class="bg-surface my-6 p-4 rounded-xl grid grid-col"
				>
					<input
						type="text"
						:placeholder="message.sentBy"
						disabled
						class="bg-transparent text-subtext"
					/>
					<span class="mt-3">{{ message.text }}</span>
					<span class="text-subtext justify-self-end">Sent at {{ message.sentAt }}</span>
				</div>
			</div>

			<div class="w-1/3 h-24 bg-surface bg-opacity-50 absolute bottom-0 z-10 flex">
				<input
					@keyup.enter="sendMessage(1)"
					type="text"
					:placeholder="'Message ' + roomData.topic1.name"
					v-model="topicText.topic1"
					class="w-[26rem] h-16 text-field self-center mx-auto bg-surface focus:bg-background opacity-80"
				/>
			</div>

			<div
				class="h-48 w-48 left-0 bottom-0 absolute rounded-tr-full bg-gradient-to-r from-purple to-blue"
			></div>
		</div>
		<div class="min-h-screen flex flex-col bg-surface z-10">
			<div class="w-full h-24 gradient tracking-widest font-normal text-4xl flex">
				<span class="mx-auto self-center">{{ roomData.topic2.name }}</span>
			</div>

			<div class="h-[37.55rem] px-6 z-5 overflow-y-scroll" ref="topic2messages">
				<div
					v-for="message in roomData.topic2.messages"
					:key="message.sentAt"
					class="bg-background my-6 p-4 rounded-xl grid grid-col"
				>
					<input
						type="text"
						:placeholder="message.sentBy"
						disabled
						class="bg-transparent text-subtext"
					/>
					<span class="mt-3">{{ message.text }}</span>
					<span class="text-subtext justify-self-end">Sent at {{ message.sentAt }}</span>
				</div>
			</div>

			<div class="w-1/3 h-24 absolute bottom-0 z-10 flex">
				<input
					@keyup.enter="sendMessage(2)"
					type="text"
					:placeholder="'Message ' + roomData.topic2.name"
					v-model="topicText.topic2"
					class="w-[26rem] h-16 text-field self-center mx-auto bg-surface focus:bg-background"
				/>
			</div>
		</div>
		<div class="min-h-screen flex flex-col">
			<div class="w-full h-24 tracking-widest font-normal text-4xl flex z-10">
				<span class="mx-auto self-center">{{ roomData.topic3.name }}</span>
			</div>

			<div class="h-[37.55rem] px-6 z-5 overflow-y-scroll" ref="topic3messages">
				<div
					v-for="message in roomData.topic3.messages"
					:key="message.sentAt"
					class="bg-surface my-6 p-4 rounded-xl grid grid-col"
				>
					<input
						type="text"
						:placeholder="message.sentBy"
						disabled
						class="bg-transparent text-subtext"
					/>
					<span class="mt-3">{{ message.text }}</span>
					<span class="text-subtext justify-self-end">Sent at {{ message.sentAt }}</span>
				</div>
			</div>

			<div class="w-1/3 h-24 bg-surface bg-opacity-50 absolute bottom-0 z-10 flex">
				<input
					@keyup.enter="sendMessage(3)"
					type="text"
					:placeholder="'Message ' + roomData.topic3.name"
					v-model="topicText.topic3"
					class="w-[26rem] h-16 text-field self-center mx-auto bg-surface bg-opacity-60 focus:bg-opacity-100"
				/>
			</div>

			<div
				class="h-1/3 w-1/4 right-0 top-0 absolute bg-gradient-to-r from-purple to-blue"
			></div>
			<div
				class="h-2/3 w-1/3 -right-2.5 -top-2.5 absolute bg-background"
				style="border-radius: 50% 100%"
			></div>
		</div>

		<button
			@click="editRoomPopup = true"
			v-if="profile.username === roomData.administrator.username"
			class="absolute cursor-pointer top-4 right-3 py-2 px-4 rounded-full bg-surface bg-opacity-15 hover:bg-opacity-10 z-10"
		>
			Edit room
		</button>

		<div
			v-show="editRoomPopup"
			@onclick="editRoomPopup.value = false"
			class="absolute h-screen w-screen bg-background bg-opacity-75 backdrop-filter backdrop-blur-md flex justify-center items-center z-10"
		>
			<div
				class="w-1/3 h-2/3 bg-background rounded-2xl border border-white border-opacity-20 grid grid-col pt-32 justify-center"
			>
				<input
					type="text"
					placeholder="Topic 1"
					v-model="topic1"
					class="w-84 h-16 text-field bg-surface"
				/>
				<input
					type="text"
					placeholder="Topic 2"
					v-model="topic2"
					class="w-84 h-16 text-field bg-surface"
				/>
				<input
					type="text"
					placeholder="Topic 3"
					v-model="topic3"
					class="w-84 h-16 text-field bg-surface"
				/>
				<button
					@click.stop="updateRoom"
					class="w-84 h-24 mt-6 mb-10 rounded-xl bg-gradient-to-tr from-blue to-purple text-4xl tracking-wider transition-opacity duration-200 hover:opacity-85"
				>
					Update
				</button>
			</div>
		</div>
	</div>
	<div
		v-else-if="!room.exists"
		class="h-screen flex justify-center pt-72 px-24 text-9xl text-text font-light tracking-wide"
	>
		Room doesn't exist yet.
	</div>
	<div
		v-else
		class="gradient h-screen flex justify-center pt-72 text-9xl text-text font-light tracking-wide"
	>
		<span class="animate-pulse">Loading...</span>
	</div>
</template>

<script>
import { useUserData } from "~/stores/useUserDataStore"
import { useRoom } from "~/stores/useRoomStore"
import { storeToRefs } from "pinia"
</script>
