const MIGRATED = {
  '/docs/MakeCode-Projects/FitBit-Clone': 'https://raspikidd.com/learn/microbit/makecode/microfit/',
  '/docs/EduBlocks-Projects/FitBit-Clone': 'https://raspikidd.com/learn/microbit/edublocks/microfit/',
  '/docs/Python-Projects/FitBit-Clone': 'https://raspikidd.com/learn/microbit/python/microfit/',
  // add each migrated project's old /docs path here as you go
}
export function onRouteDidUpdate({ location }) {
  for (const [oldPath, newUrl] of Object.entries(MIGRATED)) {
    if (location.pathname.startsWith(oldPath)) {
      window.location.replace(newUrl)
      break
    }
  }
}