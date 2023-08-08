<script lang="ts">
  import { setContext } from "svelte";
  import type { PageData } from "./$types";
  import { writable } from "svelte/store";
  // Declare a variable called data of type PageData
  export let data: PageData;
  const user = writable() as any;
  $: user.set(data.user);
  // ...and add it to the context for child components to access
  setContext("user", user);
</script>

<svelte:head>
  <title>User Data</title>
</svelte:head>
<table class="w-full bg-indigo-950 text-white">
  <thead>
    <tr>
      <th>ID</th>
      <th>First Name</th>
      <th>Birth Date</th>
      <th>Address</th>
      <th>Company Address</th>
      <th>Department</th>
      <th>Image</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-indigo-900/50 hover:bg-indigo-950">
      <td class="px-4 py-2 text-center">{$user.id}</td>
      <td class="px-4 py-2 text-center">{$user.firstName}</td>
      <td class="px-4 py-2 text-center">{$user.birthDate}</td>
      <td class="px-4 py-2 text-center"
        >{$user.address && $user.address.address}</td
      >
      <td class="px-4 py-2 text-center">{$user.company?.address.address}</td>
      <td class="px-4 py-2 text-center"
        >{$user.company && $user.company.department}</td
      >
      <td class="text-center">
        <img src={$user.image} alt="" class="block mx-auto w-20 h-20" />
      </td>
      <td class="px-4 py-2 text-center"><a href="/">All Users</a></td>
    </tr>
  </tbody>
</table>

<!-- async function fetchUser(id: string) {
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await response.json();
  return data;
}

async function load() {
  let userId = $page.params.slug;
  user = await fetchUser(userId);
}

onMount(load); -->
