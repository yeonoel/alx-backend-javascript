export default function signUpUser(firstName, lastName) {
  const obj = { firstName, lastName };
  const resolvedPromise = Promise.resolve(obj);
  return resolvedPromise.then(() => obj);
}
