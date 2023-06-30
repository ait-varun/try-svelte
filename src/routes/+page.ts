import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
  const response = await fetch(`https://dummyjson.com/users/`);
  let data = await response.json();
  let users = data.users;
  return {
    users,
  };
}) satisfies PageLoad;
