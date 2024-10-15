<script lang="ts">
	import type { IPage } from '$lib/models/Pages';
	import { onMount } from 'svelte';
	import TemplateWrapper from '../components/templates/wrapper/Wrapper.svelte';
	import { navigationIsVisible, sectionIsVisible } from '$lib/store';
	import { Jumper } from 'svelte-loading-spinners';
	import { page } from '$app/stores';

	let pages: IPage[] = [];
	let currentPage = 1;
	let navActive: boolean = false;

	navigationIsVisible.subscribe((value) => {
		navActive = value;
	});

	async function fetchPages() {
		let response = await fetch(`/api/pages`);
		const fetchedPages = await response.json();
		pages = [...pages, ...fetchedPages];
		currentPage++;
	}

	function scrollHandler() {
		const observer: IntersectionObserver = new IntersectionObserver((element) => {
			const fadeInTopPoint: number = window.innerHeight * 0.6;
			const fadeInBottomPoint: number = window.innerHeight * 0.3;
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

<main class:nav-active={navActive}>
	{#each pages as page}
		<section id={page.htmlTarget}>
			<TemplateWrapper {page} />
		</section>
	{/each}
</main>

<style lang="scss">
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
</style>
