import { getBlogs, getCategories } from "$lib/data/queries";

export const load = async () => {
  const blogs = await getBlogs();
  const categories = await getCategories();
  return { blogs, categories };
};
