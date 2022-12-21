export default function getFullResponseFromAPI (success) {
  return new Promise((resolve, reject) => {
    if (success === 'true') {
      const successObject = {
        status: 200,
        body: 'Success'
      };
      resolve(successObject);
    } else {
      const errorObject = {
        Error: 'The fake API is not working currently'
      };
      reject(errorObject);
    }
  });
}
