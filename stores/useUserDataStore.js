import { defineStore, acceptHMRUpdate } from "pinia"

const [apiGet, apiPost] = [useApiGet(), useApiPost()]


export const useUserData = defineStore("userData", {
    state: () => ({
        profile: {}
    }),
    getters: {
        isLoaded() {
            return JSON.stringify(this.profile) !== "{}"
        },
        isAuthenticated() {
            return this.profile !== 401
        }
    },
    actions: {
        async getProfile() {
            if (!this.isLoaded) this.profile = await apiGet("/profile")
        },
        async updateProfile(data) {
            this.profile = await apiPost("/profile/update", data)
        }
    }
})


if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserData, import.meta.hot))
}