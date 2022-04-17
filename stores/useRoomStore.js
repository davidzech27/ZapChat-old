import { defineStore, acceptHMRUpdate } from "pinia"

const [apiGet, apiPost] = [useApiGet(), useApiPost()]

export const useRoom = defineStore("room", {
    state: () => ({
        room: {}
    }),
    getters: {
        isLoaded() {
            return JSON.stringify(this.room) !== "{}"
        }
    },
    actions: {
        async getRoom(roomName) {
            this.room = await apiGet("/room/" + roomName)
        },
        async updateRoom(data) {
            await apiPost("/room/" + this.room.name + "/update", data)
        },
        async sendMessage({ topicNumber, message }) {
            this.room["topic" + topicNumber].messages.push(await apiPost("/room/" + this.room.name + "/send", { topicNumber, message }))
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useRoom, import.meta.hot))
}