import { client } from "$lib/data/client";

const getBlogs = async () => {
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
  return response.posts?.nodes;
};

export { getBlogs };

const getCategories = async () => {
  const response = await client.query({
    categories: {
      nodes: {
        name: true,
        slug: true,
        count: true,
        termTaxonomyId: true,
        children: {
          nodes: {
            name: true,
            count: true,
            slug: true,
            termTaxonomyId: true,
          },
        },
      },
    },
  });
  return response.categories?.nodes;
};

export { getCategories };

const getBlog = async (slug: string) => {
  const response = await client.query({
    post: {
      __args: {
        id: slug,
        idType: "SLUG",
      },
      content: true,
      slug: true,
      title: true,
      author: {
        node: {
          name: true,
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
  });

  return response.post;
};

export { getBlog };
