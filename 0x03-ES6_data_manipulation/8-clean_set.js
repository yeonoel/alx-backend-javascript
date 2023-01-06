export default function cleanSet(set, startString) {
  let str = '';
  const arr = [];

  if (startString && typeof startString === 'string') {
    for (const elem of set) {
      if (elem && elem.startsWith(startString)) {
        arr.push(elem.slice(startString.length));
      }
    }
    str = arr.join('-');
  }
  return str;
}
