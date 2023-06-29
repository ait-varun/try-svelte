<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  let users = [] as any[];
  onMount(async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    users = data.users;
  });
</script>

<table class="w-full" transition:fly={{ y: 20, duration: 1000 }}>
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
