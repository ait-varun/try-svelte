import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch, params }) => {
  const id = params.slug;
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  if (!response.ok) {
    throw error(404, "this user is not on server");
  }
  let user = await response.json();
  return {
    user,
  };
}) satisfies PageLoad;
