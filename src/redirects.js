// src/redirects.js
// Client-side redirects for tutorials already migrated to raspikidd.com.
// Instrumented with console logs so you can confirm it's actually running.
// Remove the console.log lines once it's working.

console.log('[redirects] module loaded');

const MIGRATED = {
  '/docs/MakeCode-Projects/FitBit-Clone': 'https://raspikidd.com/learn/microbit/makecode/microfit/',
  '/docs/EduBlocks-Projects/FitBit-Clone': 'https://raspikidd.com/learn/microbit/edublocks/microfit/',
  '/docs/PythonProjects/FitBit-Clone': 'https://raspikidd.com/learn/microbit/python/microfit/',
};

function redirectIfMigrated(pathname, when) {
  // Guard: this file is also imported during the SSR build, where window is
  // undefined. Never touch browser APIs unless we're really in the browser.
  if (typeof window === 'undefined' || !pathname) return false;
  console.log('[redirects] check (' + when + '):', pathname);
  for (const oldPath in MIGRATED) {
    if (pathname.startsWith(oldPath)) {
      console.log('[redirects] MATCH -> replacing with', MIGRATED[oldPath]);
      window.location.replace(MIGRATED[oldPath]);
      return true;
    }
  }
  return false;
}

// 1) First client load, in case the bundle boots on a migrated URL.
if (typeof window !== 'undefined') {
  redirectIfMigrated(window.location.pathname, 'initial');
}

// 2) BEFORE each in-app route renders (so the old page never flashes).
export function onRouteUpdate({ location }) {
  redirectIfMigrated(location.pathname, 'onRouteUpdate');
}

// 3) Belt-and-braces: also AFTER render, in case onRouteUpdate is ever missed.
export function onRouteDidUpdate({ location }) {
  redirectIfMigrated(location.pathname, 'onRouteDidUpdate');
}