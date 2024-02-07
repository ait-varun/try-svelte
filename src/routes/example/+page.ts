import { createClient } from "./../../generated";

export async function load() {
  const client = createClient({
    url: "https://countries.trevorblades.com",
  });

  const response = await client.query({
    country: {
      __args: {
        code: "BR",
      },
      name: true,
      native: true,
      capital: true,
      emoji: true,
      currency: true,
      languages: {
        code: true,
        name: true,
      },
    },
  });

  return {
    country: response.country,
  };
}
