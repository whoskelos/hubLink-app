import axios from "axios";
let token;
if (window.localStorage.getItem("loggedUser")) {
    token = JSON.parse(window.localStorage.getItem("loggedUser")).token;
} else {
    console.log("aun no hay token");
}
const instance = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "x-access-token": `${token}`,
    },
});

export default instance;
