<script lang="ts">
    import { Avatar } from "@skeletonlabs/skeleton";

    export let post: any;
    let created = new Date(post.created).toLocaleString('en-US', {
                dateStyle: "medium",
                timeStyle: "short"
            })
</script>

<div class="flex flex-col w-full justify-center gap-2">
    <div class="w-full flex flex-row gap-2 max-w-[640px] mx-auto">
        <Avatar class="w-10" />
        <div class="ml-1 flex flex-1 items-center">
            <strong class="text-lg h-min">@{post.account.username}</strong>
            <span class="inline-block ml-auto" style="opacity: 0.5;">{created}</span>
        </div>
    </div>
    <div class="w-full max-w-[640px] flex-1 mx-auto">
        <div class="card p-4 mx-auto w-full rounded-tl-none flex flex-col gap-4">
            {#if post.sensitive}
                <details>
                    <summary class="p-3 bg-warning-backdrop-token rounded-xl mb-2 cursor-pointer">
                        <b>{post.spoiler_text || "This post has been marked as sensitive."}</b> (click to show more)
                    </summary>
                    <section>
                        <p class="p-3 bg-surface-50-900-token rounded-xl">{post.text}</p>
                    </section>
                </details>
            {:else}
                <section>
                    <p class="p-3 bg-surface-50-900-token rounded-xl">{post.text}</p>
                </section>
            {/if}
        </div>
    </div>
</div>

<style>
    details > summary {
        list-style: none;
    }
    details > summary::-webkit-details-marker {
        display: none;
    }
</style>