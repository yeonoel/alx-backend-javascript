export default function signUpUser(firstName, lastName) {
  Promise.resolve({ fisrtName: firstName, lastName: lastName }).then(
    (value) => {
      return value;
    };
}
