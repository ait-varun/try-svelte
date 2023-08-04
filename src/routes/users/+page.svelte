<script lang="ts">
  import { __users } from "./+page";

  export let users:any = __users
</script>

<div>
  <ul>
    {#each users as user}
      <li class="px-4 py-2 text-white">
        User name: {user.name} & Email: {user.email}
      </li>
    {/each}
  </ul>
</div>

<!-- <script lang="ts">
  import { onMount } from "svelte";
  import { createClient } from "./../../generated/users";

  let users: any = []; // initialize an empty array to store the queried users
  let isLoading = true;
  onMount(async () => {
    const client = createClient({
      url: "https://api.mocki.io/v2/c4d7a195/graphql",
    });

    const response = await client.query({
      // store the query response in a variable
      users: {
        id: true,
        email: true,
        name: true,
      },
    });

    users = response.users;
    isLoading = false;
    console.log(users);
  });
</script>

<div>
  {#if isLoading}
    <p class="px-4 py-2 text-white">Loading...</p>
  {:else if users.length > 0}
    <ul>
      {#each users as user}
        <li class="px-4 py-2 text-white">
          User name: {user.name} & Email: {user.email}
        </li>
      {/each}
    </ul>
  {:else}
    <p class="px-4 py-2 text-white">NO DATA</p>
  {/if}
</div> -->
