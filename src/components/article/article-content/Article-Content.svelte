<script lang="ts">
	import type { IContentSlot } from '$lib/models/Pages';
	import { fly } from 'svelte/transition';

	export let data: IContentSlot[] = [];
</script>

<div>
	{#each data as slot}
		<div>
			<h3>{@html slot.subtitle}</h3>
			<p>{@html slot.paragraph}</p>
			{#if slot.image}
				<img src={slot.image} alt={slot.subtitle} />
			{/if}
		</div>
	{/each}
</div>

<style lang="scss">
	div {
		display: flex;
		gap: 1em;

		div {
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
		}
	}
</style>
