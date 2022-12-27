export default function signUpUser(firstName, lastName) {
  const resolvedPromise = Promise.resolve({ fisrtName: firstName, lastName: lastName });
  resolvedPromise.then((value) => {
    return value;
  });
}
