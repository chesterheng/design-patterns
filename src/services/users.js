import { publicFetch } from "../lib/fetch";

const getUsers = () => publicFetch.get("/users");

const getUserPosts = (userId) => publicFetch.get(`/users/${userId}/posts`);

export { getUsers, getUserPosts };
