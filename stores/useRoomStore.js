import { defineStore, acceptHMRUpdate } from "pinia"

const [apiGet, apiPost] = [useApiGet(), useApiPost()]

export const useRoom = defineStore("room", {
	state: () => ({
		room: {}
	}),
	getters: {
		isLoaded() {
			return JSON.stringify(this.room) !== "{}"
		},
		exists() {
			return this.room !== 404
		}
	},
	actions: {
		async getRoom(roomName) {
			const newRoom = await apiGet("/room/" + roomName)
			this.room = newRoom
			if (this.exists) {
				return true
			} else {
				return false
			}
		},
		async updateRoom(data) {
			await apiPost("/room/" + this.room.name + "/update", data)
		},
		async sendMessage({ topicNumber, text }, username) {
			this.room["topic" + topicNumber].messages.push({ text: text, sentBy: username })
			await apiPost("/room/" + this.room.name + "/send", { topicNumber, text })
		},
		async createRoom(roomName) {
			const roomCreateStatus = await apiPost("/room/create", { roomName: roomName })

			if (roomCreateStatus === "OK") {
				return true
			} else {
				return false
			}
		}
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useRoom, import.meta.hot))
}
