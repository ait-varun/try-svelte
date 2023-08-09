import { createClient } from "../../generated/blogs";

const client = createClient({
  url: "https://sellandtec1dev.wpengine.com/graphql",
});

const response = await client.query({
  posts: {
    nodes: {
      author: {
        node: {
          avatar: {
            url: true,
          },
          firstName: true,
        },
      },
    },
  },
});

export let __blogs = response.posts;
