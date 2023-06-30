import { writable } from "svelte/store";

export let users = writable([] as any);
export let user = writable({} as any);

export const fetchUsers = async () => {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  users.set(data.users);
};

export const getUser = async (id: any) => {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await res.json();
  user.set(data);
};
