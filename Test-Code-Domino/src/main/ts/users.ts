import axios from "axios";

export async function createUser(data: unknown) {
    return axios.post("/api/users", data);
}