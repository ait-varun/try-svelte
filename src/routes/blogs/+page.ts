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
          name: true,
          url: true,
        },
      },
      title: true,
      slug: true,
      id: true,
      excerpt: true,
      date: true,
      content: true,
      categories: {
        nodes: {
          name: true,
          uri: true,
          slug: true,
          count: true,
        },
      },
      featuredImage: {
        node: {
          mediaItemUrl: true,
          sourceUrl: true,
          status: true,
        },
      },
    },
  },
});

export let __blogs = response.posts;
