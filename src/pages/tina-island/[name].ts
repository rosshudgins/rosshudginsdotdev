export const prerender = false;

// This route is used by Tina CMS island previews and cannot be pre-rendered
// at build time without explicit static paths.
// Disabling prerender allows Astro to treat it as a server route.
