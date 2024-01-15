# isdevjs

check if js environment is dev or prod

### Returns boolean

```js
import isDev from "isdevjs";

console.log(isDev());
```

### Have it return values or function

```js
import isDev from "isdevjs";

const func = isDev(
  () => "dev",
  () => "prod"
);

func();

const domain = isDev(window.location.hostname, "site.com");
```
