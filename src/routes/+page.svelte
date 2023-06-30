<script lang="ts">
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import { users, fetchUsers, loading } from "../blogStore";

  let searchTerm = "";
  let filteredUsers = [] as any[];

  $: {
    if (searchTerm) {
      filteredUsers = $users.filter((user: any) =>
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      filteredUsers = [...$users];
    }
  }
  onMount(async () => fetchUsers());
</script>

<div>
  <input
    class="w-full rounded-md text-lg p-2 outline-none"
    bind:value={searchTerm}
    placeholder="Search user"
  />
</div>
{#if $loading}
  <p class="px-4 py-2" transition:fly={{ y: -20, duration: 1000 }}>
    loading....
  </p>
{:else}
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
      {#each filteredUsers as user}
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
{/if}
