export default function signUpUser(firstName, lastName) {
  const object = { firstName: firstName, lastName: lastName };
  const resolvedPromise = Promise.resolve(object);

  return resolvedPromise.then((value) => value);
}
