export default function uploadPhoito(filename) {
  const error = new Error(`${filename} cannot be processed`);
  const promiseRejected = Promise.reject(error);
  return promiseRejected.then();
}
