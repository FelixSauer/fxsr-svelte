<script lang="ts">
	import type { Page } from '$lib/models/Pages';
	import { onMount } from 'svelte';

	export let page: Page;
	let template: any;

	onMount(async () => {
		if (page.name === 'landing') {
			template = (await import('../landing/Landing.svelte')).default;
		} else if (page.name === 'about') {
			template = (await import('../about/About.svelte')).default;
		} else if (page.name === 'services') {
			template = (await import('../services/Services.svelte')).default;
		} else if (page.name === 'contact') {
			template = (await import('../contact/Contact.svelte')).default;
		} else if (page.name === 'imprint') {
			template = (await import('../imprint/Imprint.svelte')).default;
		}
	});
</script>

<svelte:component this={template} {page} />
