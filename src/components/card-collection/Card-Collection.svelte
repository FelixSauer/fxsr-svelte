<script lang="ts">
	import type { ICardCollection } from '$lib/models/CardCollection';
	import Card from '../card/Card.svelte';

	export let data: ICardCollection[] = [];
</script>

<div>
	<slot />
	<span>
		{#each data as item}
			<Card data={item} />
		{/each}
	</span>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-wrap: wrap;

		span {
			display: flex;
			gap: 1em;
			flex-wrap: wrap;

			&:nth-child(2n) {
				flex-basis: 100%;
			}
		}
	}
</style>
