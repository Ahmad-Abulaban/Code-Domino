# Code Domino

Code Domino is an offline IntelliJ IDEA plugin that stops Spring Boot endpoint changes from spreading into stale Axios callers.

## What it supports

- Java Spring Boot `@GetMapping`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`, and `@PatchMapping`
- TypeScript and JavaScript Axios literal calls using the same HTTP method
- Safe endpoint baselines keyed by relative file path, Java method name, and HTTP method
- Exact usage navigation and range-verified one-click repairs with IntelliJ Undo support
- Test detection for `.test.`, `.spec.`, `/test/`, and `/tests/` paths

The plugin works completely offline. It does not use an LLM, external API, database, login, or network service.

## Architecture

`SpringRouteScanner` and `AxiosUsageScanner` use small regex-based parsers over IntelliJ `VirtualFile` content. `CodeDominoProjectService` owns the baseline, scans, ripple results, safe-change streak, and fix lifecycle. UI updates are listener-driven; scanning runs in a background task, while document edits run inside `WriteCommandAction`.

## Build and run

```bash
./gradlew test
./gradlew buildPlugin
./gradlew runIde
```

The installable ZIP is written to `build/distributions/`.

## Demo

Open `Test-Code-Domino/` in IntelliJ, then follow the exact steps in [`Test-Code-Domino/README.md`](Test-Code-Domino/README.md).

## Intentional MVP limitations

- Only literal Axios calls are supported; interpolated template URLs containing `${...}` are skipped.
- Only Java Spring mapping annotations and Axios are supported.
- The parser intentionally avoids Java PSI to keep the plugin lightweight and compatible with Community Edition.
- Class-level `@RequestMapping` composition, Fetch, Kotlin/Python/Node backends, DTO synchronization, OpenAPI synchronization, and CI mode are not included.

## Roadmap

- `fetch` support
- Kotlin/Python/Node backend support
- DTO field synchronization
- OpenAPI-free cross-repository synchronization
- CI mode