<script lang="ts">
	import Post from "$lib/post/Post.svelte";
	import posts from "$lib/stores/posts";
	import type { PageData } from "./$types";
	export let data: PageData

	posts.set(data.posts)
</script>

<div class="flex flex-col gap-6">
	{#each $posts as post (post.uuid)}
		<Post {post} />
	{/each}
</div>