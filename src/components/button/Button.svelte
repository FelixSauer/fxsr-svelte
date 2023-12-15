<script lang="ts">
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';

	export let target: string = '';
	export let label: string = '';
	export let iconName: string = '';
	export let disable: boolean = false;
	export let internal: boolean = false;
	export let alignRight: boolean = false;
	export let icon: boolean = false;

	function handleClick() {
		if (internal) {
			const element = document.querySelector('#' + target);
			element?.scrollIntoView({ behavior: 'smooth' });
		} else {
			goto(target);
		}
	}
</script>

<button name={label} on:click={handleClick} disabled={disable} class:alignRight>
	{#if iconName}
		<Icon icon={iconName} />
	{/if}
	{#if label && !icon}
		<span>{label}</span>
	{/if}
</button>

<style lang="scss">
	@import './../../app.scss';
	button {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
		width: auto;
		//font-family: 'Latolight', sans-serif;
		background-color: $color_white;
		border: unset;
		padding: 0.25em 0.5em;
		cursor: pointer;

		&:hover {
			background-color: grey;
			color: $color_white;
		}

		&:active {
			background-color: $color_dark_gray;
			color: $color_white;
		}

		&:focus {
			background-color: $color_dark_gray;
			color: $color_white;
		}

		&:disabled {
			cursor: not-allowed;
			text-decoration: line-through;
		}
	}

	.alignRight {
		justify-content: flex-end;
	}
</style>
