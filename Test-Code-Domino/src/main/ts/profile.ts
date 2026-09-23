import axios from "axios";

export async function saveProfile(data: unknown) {
    return axios.post("/api/users", data);
}