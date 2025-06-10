import http from "../http";

export async function fetchUsers() {
  const { data } = await http.get("/users");
  return data;
}
