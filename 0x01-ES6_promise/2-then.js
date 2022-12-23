export function handleResponseFromAPI(promise) {
  if (promise) {
    console.log("Got a response from the API");
    return ({ status: 200, body: 'success'});
  } else {
    return (new Error(""));
  }
}
