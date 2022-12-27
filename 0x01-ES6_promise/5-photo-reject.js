export default function uploadPhoito(filename) {
  const fileName = filename;
  const error = new Error(`${fileName} cannot be processed`);
  const promiseRejected =  Promise.reject(error);
  return promiseRejected.then((null, error) => { console.error(error) });
}
