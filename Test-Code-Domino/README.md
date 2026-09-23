# Code Domino test project

This is a small offline fixture for testing the Code Domino IntelliJ plugin.
It does not need a running Spring Boot server, Node.js, npm, or a database.
The plugin scans the source files directly.

## Open it

1. Install the Code Domino plugin in IntelliJ IDEA.
2. Open this `demo-project` folder in IntelliJ IDEA.
3. Open the **Code Domino** tool window.

## Test the ripple repair

1. Click **Set Safe Baseline**.
2. Open `src/main/java/demo/UserController.java`.
3. Change:

   ```java
   @PostMapping("/api/users")
   ```

   to:

   ```java
   @PostMapping("/api/customers")
   ```

4. Click **Scan Ripple**.
5. Confirm that one endpoint changed and five Axios usages are affected.
6. Double-click an affected usage to open its exact URL.
7. Click **Fix the Ripple**.
8. Confirm that the five `/api/users` literals now use `/api/customers`.
9. Confirm that `src/main/ts/unrelated.ts` still uses `/api/health`.
10. Use IntelliJ **Undo** to restore the original URLs.

## Files that demonstrate the behavior

- `src/main/java/demo/UserController.java` — Spring endpoints
- `src/main/ts/users.ts` — main caller
- `src/main/ts/admin.ts` — another caller
- `src/main/ts/profile.ts` — another caller
- `src/test/ts/users.test.ts` — test caller
- `src/tests/profile.spec.ts` — spec caller
- `src/main/ts/unrelated.ts` — unrelated endpoint that must not change

If the demo has already been repaired, use IntelliJ **Undo**, or change
`/api/customers` back to `/api/users` in the controller and caller files before
starting the test again.