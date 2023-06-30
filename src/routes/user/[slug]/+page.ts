import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

// Defining the 'load' function as an asynchronous function that takes in an object with 'fetch' and 'params' properties
export const load = (async ({ fetch, params }) => {
  // Extracting the 'slug' property from the 'params' object and assigning it to the 'id' variable
  const id = params.slug;

  // Sending a fetch request to the specified URL with the 'id' variable interpolated
  const response = await fetch(`https://dummyjson.com/users/${id}`);

  // Checking if the response is not okay (i.e., status code is not in the 200-299 range)
  if (!response.ok) {
    // Throwing an error with the status code and a custom message
    throw error(404, "this user is not on server");
  }

  // Parsing the response body as JSON and assigning it to the 'user' variable
  let user = await response.json();

  // Returning an object with the 'user' property
  return {
    user,
  };
}) satisfies PageLoad;
