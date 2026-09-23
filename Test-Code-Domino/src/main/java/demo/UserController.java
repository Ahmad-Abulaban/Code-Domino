package demo;

public class UserController {
    @PostMapping("/api/users")
    public User createUser(UserRequest request) {
        return new User();
    }

    @GetMapping("/api/health")
    public String health() {
        return "ok";
    }
}