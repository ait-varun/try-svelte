<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  let user = {} as any;
  onMount(async () => {
    const id = $page.params.slug;
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    user = await res.json();
  });
</script>

<table class="w-full">
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
    <tr class="bg-gray-100 hover:bg-gray-200">
      <td class="px-4 py-2 text-center">{user.id}</td>
      <td class="px-4 py-2 text-center">{user.firstName}</td>
      <td class="px-4 py-2 text-center">{user.birthDate}</td>
      <td class="px-4 py-2 text-center"
        >{user.address && user.address.address}</td
      >
      <td class="px-4 py-2 text-center"
        >{user.company && user.company.address.address}</td
      >
      <td class="px-4 py-2 text-center"
        >{user.company && user.company.department}</td
      >
      <td class="text-center">
        <img src={user.image} alt="" class="block mx-auto w-20 h-20" />
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
