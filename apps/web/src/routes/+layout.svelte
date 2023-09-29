<script lang="ts">
	import "../app.postcss"
	import Navigation from "$lib/navigation/Navigation.svelte"
	import "../app.postcss"
	import {
		AppBar,
		AppShell,
		initializeStores,
		Drawer,
		getDrawerStore
	} from "@skeletonlabs/skeleton"
	import CreatePost from "$lib/post/CreatePost.svelte"

	initializeStores()
	const drawerStore = getDrawerStore()

	function drawerOpen(): void {
		drawerStore.open({})
	}
</script>

<Drawer>
	<Navigation />
</Drawer>
<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64" slotSidebarRight="hidden md:flex flex-col w-[400px] lg:w-[460px] p-6">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button on:click={drawerOpen} class="lg:hidden btn btn-sm mr-4">
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<strong class="text-xl uppercase text-primary-500">YAMS</strong>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	<svelte:fragment slot="sidebarRight">
		<CreatePost />
	</svelte:fragment>
	<!-- page header -->

	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (page footer) -->
	<!-- (footer) -->
</AppShell>
