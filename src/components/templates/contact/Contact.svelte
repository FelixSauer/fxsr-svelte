<script lang="ts">
	import type { Page } from '$lib/models/Pages';
	import { sectionIsVisible } from '$lib/store';
	import { fly } from 'svelte/transition';
	export let page: Page;
	let isVisible: boolean;

	sectionIsVisible.subscribe((value) => {
		return (isVisible = value === page.htmlTarget ? true : false);
	});
</script>

{#if isVisible}
	<article>
		<h1 in:fly={{ x: -1000, duration: 750 }}>{page.content.title}</h1>
		<!-- <h2 in:fly={{ x: 1000, duration: 750 }}>{page.content.firstSubtitle}</h2> -->
		<span>
			<h3 in:fly={{ x: -1000, duration: 750 }}>{page.content.firstSubtitle}</h3>
			<p in:fly={{ x: 1000, duration: 750 }}>{page.content.firstText}</p>
		</span>
		<span>
			<h3 in:fly={{ x: -1000, duration: 750 }}>{page.content.secondSubtitle}</h3>
			<p in:fly={{ x: 1000, duration: 750 }}>{page.content.secondText}</p>
		</span>
		<span>
			<h3 in:fly={{ x: -1000, duration: 750 }}>{page.content.secondSubtitle}</h3>
			<p in:fly={{ x: 1000, duration: 750 }}>{page.content.secondText}</p>
		</span>
	</article>
{/if}

<style lang="scss">
	article {
		display: grid;
		grid-template-columns: repeat(16, 1fr);
		grid-template-rows: repeat(12, 1fr);
		gap: 0.75rem;
		height: 100%;
		width: 100%;
		grid-column: 2 / 16;
		grid-row: 2 / 12;
		overflow: visible;

		span {
			grid-column: 2 / 8;
			grid-row: 4 / 12;

			&:last-child {
				grid-column: 9 / 16;
				grid-row: 4 / 12;
			}
		}

		h1 {
			grid-column: 2 / 16;
			grid-row: 2 / 2;
			font-size: 4.2em;
			margin: 0;
		}

		h2 {
			font-size: 2em;
			margin: 0;
		}

		h3 {
			font-size: 3em;
			margin: 0;
		}

		p {
			font-size: 1.25em;
		}
	}
</style>
