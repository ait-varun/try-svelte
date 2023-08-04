import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
  // Make API request to fetch users data
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  let posts = data;
  return {
    posts,
  };
}) satisfies PageLoad;
