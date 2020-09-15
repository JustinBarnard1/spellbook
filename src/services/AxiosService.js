import Axios from "axios";

export const api = Axios.create({
    baseURL: "https://www.dnd5eapi.co/api/",
    timeout: 10000
})

export const sandbox = Axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/justinbarnard1/spells",
    timeout: 3000
})