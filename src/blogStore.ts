import { writable } from "svelte/store";

export let users = writable([] as any);
export let user = writable({} as any);
export let loading = writable(false as boolean);

export const fetchUsers = async () => {
  loading.set(true);
  setTimeout(async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    loading.set(false);
    users.set(data.users);
  }, 1000);
};

export const getUser = async (id: any) => {
  loading.set(true);
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await res.json();
  loading.set(false);
  user.set(data);
};

// export const fetchUsers = async () => {
//   loading.set(true);
//   const response = await fetch("https://dummyjson.com/users");
//   const data = await response.json();
//   loading.set(false);
//   users.set(data.users);
// };

// export const getUser = async (id: any) => {
//   loading.set(true);
//   const res = await fetch(`https://dummyjson.com/users/${id}`);
//   const data = await res.json();
//   loading.set(false);
//   user.set(data);
// };
