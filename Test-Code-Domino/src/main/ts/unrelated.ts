import axios from "axios";

export async function loadHealth() {
    return axios.get("/api/health");
}