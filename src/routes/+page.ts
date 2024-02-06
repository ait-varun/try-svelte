import type { PageLoad } from "./$types";

/**
 * Loads users data from a remote API.
 *
 * @param {object} fetch - The fetch function used to make the API request.
 * @returns {Promise<object>} - A Promise that resolves to an object containing the users data.
 */
export const load = (async ({ fetch }) => {
  // Make API request to fetch users data
  const response = await fetch(`https://dummyjson.com/users/`);
  let data = await response.json();
  let users = data.users;
  return {
    users,
  };
}) satisfies PageLoad;
