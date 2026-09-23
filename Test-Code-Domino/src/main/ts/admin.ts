import axios from "axios";

export async function createAdmin(data: unknown) {
    return axios.post("/api/users", data);
}