import api from '$lib/api/index.js';

export async function load({ fetch }) {
    const accounts = await api<any[]>(fetch, "/accounts")
    return {
        accounts: accounts
    }
}