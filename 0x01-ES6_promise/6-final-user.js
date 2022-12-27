import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoRejected = uploadPhoto(fileName);
  const promises = [userPromise, photoRejected];
  const array = Promise.allSettled(promises);
  return array.then((results) => {
    const response = [];
    results.forEach((item) => {
      if (item.status === 'fulfilled') {
        response.push({ status: item.status, value: item.value });
      } else {
        response.push({ status: item.status, value: `Error: ${item.reason.message}` });
      }
    });
    return response;
  });
}
