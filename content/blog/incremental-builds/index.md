---
title: Incremental Builds
date: "2020-04-29"
description: An account of what I learned when I investigated incemental builds.
---

Since I was using an old template I went ahead and updated all dependencies only to find that Helmet was now a named export.

(I really need to update this template by building my own from scratch.)

Found the official documentation [here](https://www.gatsbyjs.org/docs/page-build-optimizations-for-incremental-data-changes/)! 

So I need to set an environment variable in my build command:
```js
GATSBY_EXPERIMENTAL_PAGE_BUILD_ON_DATA_CHANGES=true
``` 

Let's see how this is handled in Gatsby.

```js
"scripts": {
  "build": "gatsby build GATSBY_EXPERIMENTAL_PAGE_BUILD_ON_DATA_CHANGES=true",
  "develop": "gatsby develop",
  "dev": "gatsby develop",
  "format": "prettier --write \"**/*.{js,jsx,json,md}\"",
  "start": "npm run develop",
  "serve": "gatsby serve",
  "clean": "gatsby clean",
  "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\" && exit 1"
}
```

OK, 5 seconds later I'd say that was a longer build than usual.

Adding `--log-pages` and `--write-to-file`.

Nother to remark on in the log. Let's push this sucker.