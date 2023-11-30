import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "c09912c9fcf34e0ab34761f6a37fa09e",
    },
});