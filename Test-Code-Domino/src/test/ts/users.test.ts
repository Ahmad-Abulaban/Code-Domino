import axios from "axios";

test("creates a user", async () => {
    await axios.post("/api/users", { name: "Ada" });
});