import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: any = (async ({ fetch, params }: any) => {
  const id = params.slug;
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  if (!response.ok) {
    throw error(404, "User not found");
  }
  let user = await response.json();
  return {
    user,
  };
}) satisfies PageLoad;
