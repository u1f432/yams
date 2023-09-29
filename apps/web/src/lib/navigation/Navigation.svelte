<script lang="ts">
    import { getDrawerStore, LightSwitch } from "@skeletonlabs/skeleton";

    const drawerStore = getDrawerStore();

    function drawerClose(): void {
        drawerStore.close();
    }
</script>

<nav class="list-nav p-4 flex flex-col">
    <LightSwitch />
    <hr class="mb-4 mt-6" />
	<ul>
		<li><a href="/" on:click={drawerClose} >Home</a></li>
		<li><a href="/notifications" on:click={drawerClose} >Notifications</a></li>
		<li><a href="/settings" on:click={drawerClose} >Settings</a></li>
	</ul>
</nav>