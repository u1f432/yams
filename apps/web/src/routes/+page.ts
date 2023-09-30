import api from '$lib/api/index.js';

export async function load({ fetch }) {
    const posts = await api<any[]>(fetch, "/posts")
    return {
        posts: posts
    }
}