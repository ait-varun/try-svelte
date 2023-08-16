// src/lib/data/client.ts

import { WORDPRESS_BASE_URL } from "$env/static/private";
import { createClient } from "$lib/generated";

const client = createClient({
  url: `${WORDPRESS_BASE_URL}/graphql`,
});

export { client };
