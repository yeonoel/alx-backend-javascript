export default function uploadPhoto(filename) {
  const error = new Error(`${fileName} cannot be processed`);
  const promiseRejected =  Promise.reject(error);
  return promiseRejected.then(
    () => {},
    (error) => { console.error(error) }
  );
}
