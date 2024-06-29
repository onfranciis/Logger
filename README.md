# Logger

This codebase contains a logger written in TypeScript. It's simple to use, just import it's class and create a new instance

```js
import Log from "./logger";

const Logger = new Log().log;

Logger("error", "This is an error!");
Logger("warn", ["This", "is", "a", "warning"]);
Logger("info", {
  service: "Logger",
  version: 1,
  author: "Francis Onukwu",
});
```

<br>

## Guide

- The first argument of the log method takes a string of `"error", "warn" or "info"`.
- The second argument is the value you want to log.
- It has an object as its optional third parameter, you can specify if you want a verbose log or not

```js
{verbose: <boolean>}
```

<br>

### ‼ Note

- Verbose is disabled by default for production environments.
- It automatically creates log files in a chronological order and saves them to `./logs`

<br>

For support and enquiries - [hello@onfranciis.dev](mailto:hello@onfranciis.dev)
