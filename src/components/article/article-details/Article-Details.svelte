<script lang="ts">
	import type { IPage, data } from '$lib/models/Pages';
	import { fly } from 'svelte/transition';

	export let page: IPage;
</script>

<div>
	<span in:fly={{ x: -1000, duration: 750 }}>{page.content.date}</span>
	<span in:fly={{ x: -1000, duration: 750 }}>{page.content.author}</span>
</div>

<style lang="scss">
	div {
		grid-column: 2 / 15;
		grid-row: 3 / 3;
		display: flex;
		gap: 1em;
		font-size: 1em;
		align-items: flex-end;
		height: 100%;
		border-bottom: 1px solid rgb(0, 0, 0, 0.25);
		padding-bottom: 0.5em;
	}
</style>
