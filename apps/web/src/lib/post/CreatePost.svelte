<script lang="ts">
    import { goto } from "$app/navigation";
    import { Avatar } from "@skeletonlabs/skeleton";
    import accounts from "$lib/stores/accounts";
    import posts from "$lib/stores/posts";
	import api from "$lib/api"
    import { getToastStore } from '@skeletonlabs/skeleton';

    const toastStore = getToastStore();	

    let currentAccount = $accounts[0] || {
        username: "Oh no",
        uuid: "nope"
    }

    let post = {
        text: "",
        spoiler_text: "",
        sensitive: false,
        account_uuid: currentAccount.uuid
    }

    async function sendPost() {
        let body = {...post}
        if (body.spoiler_text) body.sensitive = true
        body.spoiler_text = body.spoiler_text.trim()
        body.text = body.text.trim()
        body.account_uuid = currentAccount.uuid

        try {
            const resp = await api<any>(fetch, "/posts", {
                method: "POST",
                body: body
            })
            $posts.unshift(resp)
            posts.set($posts)
            post = {
                text: "",
                spoiler_text: "",
                sensitive: false,
                account_uuid: currentAccount.uuid
            }
            toastStore.trigger({
                message: "Post successfuly posted!",
                background: 'variant-filled-success'
            })
            goto("/")
        } catch (e: any) {
            console.error(e)
            toastStore.trigger({
                message: e.body.body.message ? `Error: ${e.body.body.message.join(", ")}` : e.body.message,
                background: 'variant-filled-error',
                autohide: false
            })
        }
    }
</script>

<div class="flex flex-col md:flex-row w-full justify-center gap-2">
    <div class="w-full md:w-auto flex flex-row md:flex-col gap-2 max-w-[640px] mx-auto md:mx-0">
        <Avatar class="w-12" />
        <div class="ml-1 md:hidden w-full flex justify-center flex-col">
            <select bind:value={currentAccount} class="select w-full">
                {#each $accounts as account}
                    <option value={account}>{account.username}</option>
                {/each}
            </select>
        </div>
    </div>
    <div class="w-full max-w-[640px] flex-1 mx-auto md:mx-0">
        <select bind:value={currentAccount} class="select w-full hidden md:block">
            {#each $accounts as account}
                <option value={account}>{account.username}</option>
            {/each}
        </select>
        <div class="card p-4 mx-auto w-full rounded-tl-none md:mt-2 flex flex-col">
            <section>
                <label class="label">
                    <input bind:value={post.spoiler_text} class="input bg-warning-backdrop-token rounded-xl p-2 mb-2" placeholder="Optional content warning" />
                </label>
                <label class="label">
                    <textarea bind:value={post.text} class="textarea p-3 rounded-xl resize-none" rows="5" placeholder="Write what's on your mind..." />
                </label>
            </section>
            <button on:click={() => sendPost()} disabled={post.text ? false : true} class="btn bg-primary-600 mt-3 text-white ml-auto">Send</button>
        </div>
    </div>
</div>