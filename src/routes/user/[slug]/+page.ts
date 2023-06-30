import type { PageLoad } from "./$types";

export const load = (async ({ fetch, params }) => {
  const id = params.slug;
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  let user = await response.json();
  return {
    user,
  };
}) satisfies PageLoad;
