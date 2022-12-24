import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  let photo = uploadPhoto();
  let user = createUser();
  let lastName;
  let firstName;
 
  return Promise.all([photo, user]).then((values) => {
    let body = values[0].body;
    lastName = values[1].lastName;
    firstName = values[1].firstName;
    console.log(`${body} ${firstName} ${lastName}`);
  }).catch(() => { console.log("Signup system offline"); });
}
