# home-site

This repo is a statically generated website served at https://gecotoolbox.io.

This site is automatically build and deployed when you push to master.
It runs `npm build`, tars the assets and posts them to a [robb-j/http-tar-unpacker](https://github.com/robb-j/http-tar-unpacker/) instance.

## translations

The contents is translated into english, spanish, french, greek and italian,
each has its own directory.
If you don't navigate to a specific language, it redirects you to english.

## dev commands

```bash
# Serve assets locally
# -> Serves on http://localhost:8080
npm run serve

# Build assets for production
# -> Puts them into dist
npm run build

# Lint javascript code
# -> Uses eslint
npm run lint
```

---

> This project was set up by [puggle](https://npm.im/puggle)
