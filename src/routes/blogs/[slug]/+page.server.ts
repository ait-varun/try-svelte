import { getBlog } from "$lib/data/queries";

export const load = async ({ params }) => {
  const { slug } = params;
  const blog = await getBlog(slug);
  return { blog };
};
