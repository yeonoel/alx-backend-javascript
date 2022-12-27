export default function uploadPhoto(filename) {
  const error = new Error(`${filename} cannot be processed`);
  const promiseRejected =  Promise.reject(error);
  return promiseRejected.then(
    () => {},
    (error) => { console.error(error) }
  );
}
