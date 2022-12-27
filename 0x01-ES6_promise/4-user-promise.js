export default function signUpUser(firstName, lastName) {
  const object = { this.firstName: firstName, this.lastName: lastName };
  const resolvedPromise = Promise.resolve(object);
  return resolvedPromise.then((value) => value);
}
