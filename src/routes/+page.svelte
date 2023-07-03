<script lang="ts">
  // Import the fade function from the "svelte/transition" module
  import { fade } from "svelte/transition";
  // Import the PageData type from the "./$types" module
  import type { PageData } from "./$types";

  // Export the "data" variable as a prop with the type of PageData
  export let data: PageData;
  // Export the "users" variable and assign it the value of "data.users"
  export let users = data.users;
</script>

<table class="w-full bg-gray-300" transition:fade>
  <thead>
    <tr>
      <th>ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Gender</th>
      <th>View Detail</th>
    </tr>
  </thead>
  <tbody>
    {#each users as user}
      <tr class="bg-gray-100 hover:bg-gray-200">
        <td class="px-4 py-2 text-center">{user.id}</td>
        <td class="px-4 py-2 text-center">{user.firstName}</td>
        <td class="px-4 py-2 text-center">{user.lastName}</td>
        <td class="px-4 py-2 text-center">{user.gender}</td>
        <td class="px-4 py-2 text-center"
          ><a href="/user/{user.id}">View Detail</a></td
        >
      </tr>
    {/each}
  </tbody>
</table>
