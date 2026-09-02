// src/redirects.js
// Client-side redirects for tutorials already migrated to raspikidd.com.
// Instrumented with console logs so you can confirm it's actually running.
// Remove the console.log lines once it's working.

console.log('[redirects] module loaded');

const MIGRATED = {
  '/docs/MakeCode-Projects/FitBit-Clone': 'https://raspikidd.com/learn/microbit/makecode/microfit/',
  '/docs/EduBlocks-Projects/FitBit-Clone': 'https://raspikidd.com/learn/microbit/edublocks/microfit/',
  '/docs/Python-Projects/FitBit-Clone': 'https://raspikidd.com/learn/microbit/python/microfit/',
  '/docs/MakeCode-Projects/Rock-Paper-Scissors': 'https://raspikidd.com/learn/microbit/makecode/rock-paper-scissors/',
  '/docs/EduBlocks-Projects/Rock-Paper-Scissors': 'https://raspikidd.com/learn/microbit/edublocks/rock-paper-scissors/',
  '/docs/Python-Projects/Rock-Paper-Scissors': 'https://raspikidd.com/learn/microbit/python/rock-paper-scissors/',
};

// Docusaurus can generate lowercased slugs for some docs (depending on
// whether a doc sets an explicit `slug` in its frontmatter), so the real
// runtime pathname doesn't always match the source folder/file casing
// exactly (e.g. Rock-Paper-Scissors -> /rock-paper-scissors/ at runtime).
// Compare case-insensitively so casing drift like this can't silently
// break a redirect again.
function redirectIfMigrated(pathname, when) {
  // Guard: this file is also imported during the SSR build, where window is
  // undefined. Never touch browser APIs unless we're really in the browser.
  if (typeof window === 'undefined' || !pathname) return false;
  console.log('[redirects] check (' + when + '):', pathname);
  const lowerPathname = pathname.toLowerCase();
  for (const oldPath in MIGRATED) {
    if (lowerPathname.startsWith(oldPath.toLowerCase())) {
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
//    Only hook this one in. Also firing a redirect from onRouteDidUpdate
//    sends a second, competing cross-origin navigation shortly after the
//    first one already kicked off -- the browser can abort the first
//    navigation mid-flight, landing on the correct URL but with a blank
//    page (this is the bug that was added here vs. the working version).
export function onRouteUpdate({ location }) {
  redirectIfMigrated(location.pathname, 'onRouteUpdate');
}
