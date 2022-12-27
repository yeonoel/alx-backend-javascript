import signUpUser from '4-user-promise';
import uploadPhoto from '5-photo-reject';

export default function handleProfileSignup(firstname, lastname, filename) {
  const userPromise = signUpUser(firstname, lastname);
  const photoRejected = uploadPhoto(filename);
  const promises = [userPromise, photoRejected];
  const array = Promise.allSettled(promises);
  return array.then((results) => results);
}
