<script lang="ts">
	import { onMount } from 'svelte';
	import FxLink from '../link/Link.svelte';
	import type { MenuItem } from '$lib/models/MenuItem';

	let menu: MenuItem[] = [];

	async function fetchFooterMenu() {
		const res = await fetch(`/api/menufooter`);
		menu = await res.json();
	}

	onMount(() => {
		fetchFooterMenu();
	});
</script>

<footer>
	<ul>
		{#each menu as item}
			<li>
				<FxLink
					target={item.target}
					label={item.label}
					iconName={item.icon}
					disable={item.disable}
				/>
			</li>
		{/each}
	</ul>
</footer>

<style lang="scss">
	footer {
		display: grid;
		grid-template-columns: repeat(16, 1fr);
		gap: 0.75rem;
		position: fixed;
		bottom: 0;
		width: 100vw;
		background-color: white;

		ul {
			display: flex;
			grid-column: 2 / 16;
			flex-direction: row;
			list-style: none;
			padding: unset;
			margin: unset;

			li {
				display: flex;
				flex-direction: row;
				align-items: center;
				padding: 0.5em 1.5em 0.5em 0;
			}
		}
	}
</style>
