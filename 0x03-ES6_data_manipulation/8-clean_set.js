export default function cleanSet(set, startString) {
  const clenedSet = new Set();
  for (const elem of set) {
    if (elem.startsWith(startString)) {
      clenedSet.add(elem.slice(startString.length));
    }
  }
  return [...clenedSet].join('-');
}
