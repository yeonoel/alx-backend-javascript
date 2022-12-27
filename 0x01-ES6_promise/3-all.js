import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  let lastName;
  let firstName;
  let body;
  return Promise.all([photo, user]).then((values) => {
    body = values[0].body;
    lastName = values[1].lastName;
    firstName = values[1].firstName;
    console.log(`${body} ${firstName} ${lastName}`);
  }).catch(() => { console.log('Signup system offline'); });
}
