# Mitosis Astro.js Starter

![Screenshot](https://github.com/user-attachments/assets/17a6b237-cc02-4e5f-b844-1852866d498e)

> Notice the inconsistent spacing between the `<input />` box and the text. That is why it would be great to preview most (if not all) generated components at once!

This repo contains

- A starter [Mitosis](https://mitosis.builder.io/) component (`src/MyAwesomeComponent.lite.tsx`)
- An [Astro.js](https://astro.build/) app which has initialized with React.js, Vue.js, Svelte and Solid.js integration
- Scripts for development with hot-reload and wiring up the compiled Mitosis component to the Astro.js app

### Development

1. Run the Mitosis development script in terminal 1

This script would `watch` for changes in `./src`. When a change occurs, it compiles the Mitosis component to downstream components and copies `cp` to `./test-app/src` for the Astro.js app to use.

```
npm run start
```

2. Start the Astro.js test app in another terminal

```
cd test-app/
npm run start
```

3. Update codes in `./src` 🔥
