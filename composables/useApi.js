import axios from "axios"
axios.defaults.baseURL = "/api"
axios.defaults.useCredentials = true

export const useApiGet = () => {
    return async (url) => {
        try {
            return (await axios.get(url)).data
        }
        catch (err) {
            return err.response.status
        }
    }
}

export const useApiPost = () => {
    return async (url, data) => {
        try {
            return (await axios.post(url, data)).data
        }
        catch (err) {
            return err.response.status
        }
    }
}