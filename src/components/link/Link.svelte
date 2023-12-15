<script lang="ts">
	import Icon from '@iconify/svelte';

	export let target: string = '';
	export let label: string = '';
	export let iconName: string = '';
	export let disable: boolean = false;

	function handleClick(): string {
		return target.includes('http') ? target : '#' + target;
	}

	function isDisabled(disable: boolean) {
		return disable ? 'disabled' : null;
	}
</script>

<a href={handleClick()} class={isDisabled(disable)}>
	{#if iconName}
		<Icon icon={iconName} />
	{/if}
	<span>{label}</span>
</a>

<style lang="scss">
	a {
		padding: 0.25rem 0.5rem 0.25rem 0;
		text-decoration: none;
		color: inherit;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
		font-size: 1em;

		svg {
			font-size: 1.2em;
		}
	}
</style>
