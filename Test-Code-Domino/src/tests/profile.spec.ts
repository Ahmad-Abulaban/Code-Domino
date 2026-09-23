import axios from "axios";

test("saves a profile", async () => {
    await axios.post("/api/users", { name: "Grace" });
});