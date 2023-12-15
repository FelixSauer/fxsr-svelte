<script lang="ts">
	import { onMount } from 'svelte';
	import type { Page } from '$lib/models/Pages';
	import TemplateWrapper from '../components/templates/wrapper/Wrapper.svelte';
	import { navigationIsVisible, sectionIsVisible } from '$lib/store';
	import { Jumper } from 'svelte-loading-spinners';

	let pages: Page[] = [];
	let currentPage = 1;
	let navActive: boolean = false;

	navigationIsVisible.subscribe((value) => {
		navActive = value;
	});

	async function fetchPages() {
		const response = await fetch(`/api/pages`);
		const fetchedPages = await response.json();
		pages = [...pages, ...fetchedPages];
		currentPage++;
	}

	function scrollHandler() {
		const observer = new IntersectionObserver((element) => {
			const fadeInTopPoint = window.innerHeight * 0.6;
			const fadeInBottomPoint = window.innerHeight * 0.3;
			const leafs: any[] = [];

			element.map((entry) => leafs.push([entry.target.id, entry.boundingClientRect]));

			leafs.forEach((leaf) => {
				if (leaf[1].top <= fadeInTopPoint && leaf[1].bottom >= fadeInBottomPoint) {
					sectionIsVisible.set(leaf[0]);
				}

				if (leaf[1].top >= fadeInBottomPoint && leaf[1].bottom <= fadeInBottomPoint) {
					sectionIsVisible.set(leaf[0]);
				}
			});
		});

		document.querySelectorAll('section').forEach((section) => {
			observer.observe(section);
		});
	}

	onMount(async () => {
		await fetchPages();
		scrollHandler();
	});
</script>

<svelte:window on:scroll={scrollHandler} />

{#await pages}
	<Jumper size="60" color="#FF3E00" unit="px" duration="1s" />
{:then a}
	<main class:nav-active={navActive}>
		{#each pages as page}
			<section id={page.htmlTarget}>
				<TemplateWrapper {page} />
			</section>
		{/each}
	</main>
{/await}

<style lang="scss">
	main {
		display: grid;
		width: 100%;
		height: 100%;
	}

	.nav-active {
		animation: fadeBackground 2s;
		filter: blur(5px);

		@keyframes fadeBackground {
			from {
				filter: blur(0);
			}
			to {
				filter: blur(5px);
			}
		}
	}
	section {
		min-height: 100vh;
		margin-bottom: 50px;
	}
</style>
