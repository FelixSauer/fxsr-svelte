<script lang="ts">
	import type { IPage } from '$lib/models/Pages';
	import { sectionIsVisible } from '$lib/store';
	import { fly } from 'svelte/transition';
	import ArticleContent from '../../article/article-content/Article-Content.svelte';

	export let page: IPage;
	let isVisible: boolean;

	sectionIsVisible.subscribe((value) => {
		return (isVisible = value === page.htmlTarget ? true : false);
	});
</script>

{#if isVisible}
	<article>
		<h1 in:fly={{ x: 1000, duration: 750 }}>{page.content.title}</h1>
		<div in:fly={{ x: -1000, duration: 750 }}>
			<ArticleContent data={page.content.slots} />
		</div>
	</article>
{/if}
