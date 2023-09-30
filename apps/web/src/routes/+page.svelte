<script lang="ts">
	import Post from "$lib/post/Post.svelte";
	import type { PageData } from "./$types";
	export let data: PageData
</script>

<div class="flex flex-col gap-6">
	{#each data.posts as post}
		<Post {post} />
	{/each}
</div>