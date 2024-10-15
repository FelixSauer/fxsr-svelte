<script lang="ts">
	import type { IPage } from '$lib/models/Pages';
	import type { Skill } from '$lib/models/Skills';
	import type { Certs } from '$lib/models/Certs';
	import type { ICardCollection } from '$lib/models/CardCollection';

	import { sectionIsVisible } from '$lib/store';
	import { beforeUpdate, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import ArticleContent from '../../article/article-content/Article-Content.svelte';
	import CardCollection from '../../card-collection/Card-Collection.svelte';

	export let page: IPage;
	let isVisible: boolean;
	let skillsData: Skill[] = [];
	let certsData: Certs[] = [];
	let cardCollectionData: ICardCollection[] = [];

	sectionIsVisible.subscribe((value) => {
		return (isVisible = value === page.htmlTarget ? true : false);
	});

	async function fetchSkills() {
		let response = await fetch(`/api/skills`);
		skillsData = await response.json();
	}

	async function fetchCerts() {
		let response = await fetch(`/api/certs`);
		certsData = await response.json();
	}

	async function fetchCustomers() {
		let response = await fetch(`/api/customers`);
		cardCollectionData = await response.json();
	}

	beforeUpdate(() => {
		isVisible = true;
	});

	onMount(async () => {
		await fetchSkills();
		await fetchCerts();
		await fetchCustomers();
	});
</script>

{#if isVisible}
	<article>
		<h1 in:fly={{ x: 1000, duration: 750 }}>{page.content.title}</h1>
		<div in:fly={{ x: -1000, duration: 750 }}>
			<ArticleContent data={page.content.slots} />
		</div>
		<div>
			<CardCollection data={skillsData}>
				<h3>Experience and skills</h3>
			</CardCollection>
		</div>
		<div>
			<CardCollection data={certsData}>
				<h3>Certifications and trainings</h3>
			</CardCollection>
		</div>
		<div>
			<CardCollection data={cardCollectionData}>
				<h3>Employers and customers</h3>
			</CardCollection>
		</div>
	</article>
{/if}
