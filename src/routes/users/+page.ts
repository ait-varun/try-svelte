import { createClient } from "../../generated/users";

const client = createClient({
  url: "https://api.mocki.io/v2/c4d7a195/graphql",
});

const response = await client.query({
  users: {
    id: true,
    email: true,
    name: true,
  },
});

export let __users = response.users;
