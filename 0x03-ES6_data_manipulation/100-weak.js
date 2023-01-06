export const weakMap = new WeakMap();
let count = 1;

export function queryAPI(endpoint) {
  weakMap.set(endpoint, count);
  count++;

  const numberOfQueries = weakMap.get(endpoint);
  if (numberOfQueries >= 5) {
    throw new Error('Endpoint load is high');
  }
}
