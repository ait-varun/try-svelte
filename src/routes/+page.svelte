<script lang="ts">
  import { fade } from "svelte/transition";
  import type { PageData } from "./$types";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  // Export the "data" variable as a prop with the type of PageData
  export let data: PageData;

  // Create a store and update it when necessary...
  const users = writable() as any;
  $: users.set(data.users);
  // ...and add it to the context for child components to access
  setContext("users", users);
</script>
<svelte:head>
  <title>Home</title>
</svelte:head>
<table class="w-full bg-indigo-950 text-white" transition:fade>
  <thead>
    <tr>
      <th>ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Gender</th>
      <th>View Details</th>
    </tr>
  </thead>
  <tbody>
    {#each $users as user}
      <tr class="bg-indigo-900/50 hover:bg-indigo-950">
        <td class="px-4 py-2 text-center"><a href="/user/{user.id}">{user.id}</a></td>
        <td class="px-4 py-2 text-center"><a href="/user/{user.id}">{user.firstName}</a></td>
        <td class="px-4 py-2 text-center"><a href="/user/{user.id}">{user.lastName}</a></td>
        <td class="px-4 py-2 text-center"><a href="/user/{user.id}">{user.gender}</a></td>
        <td class="px-4 py-2 text-center"
          ><a href="/user/{user.id}">View Detail</a></td
        >
      </tr>
    {/each}
  </tbody>
</table>
