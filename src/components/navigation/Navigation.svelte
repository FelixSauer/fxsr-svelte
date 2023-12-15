<script lang="ts">
	import { onMount } from 'svelte';
	import FxButton from '../button/Button.svelte';
	import type { MenuItem } from '$lib/models/MenuItem';
	import { navigationIsVisible } from '$lib/store';
	import { fly } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import Typewriter from 'svelte-typewriter';

	let menu: MenuItem[] = [];
	let flyIn: boolean = false;

	async function fetchMainMenu() {
		const res = await fetch(`/api/menumain`);
		menu = await res.json();
	}

	navigationIsVisible.subscribe((value) => {
		flyIn = value;
	});

	function menuClick() {
		!flyIn ? navigationIsVisible.set(true) : navigationIsVisible.set(false);
	}

	onMount(() => {
		fetchMainMenu();
	});
</script>

<nav>
	<div class="nav-bar">
		<div
			role="button"
			class="menu-button"
			tabindex="0"
			on:mousedown={() => {
				menuClick();
			}}
		>
			{#if flyIn}
				<Icon icon="line-md:menu-to-close-alt-transition" />
			{:else}
				<Icon icon="line-md:menu-fold-left" />
			{/if}
		</div>
		<span>
			<Typewriter interval="75">
				<h1>~ felixsauer</h1>
			</Typewriter>
		</span>
	</div>

	{#if flyIn}
		<div
			on:click_outside={() => {
				navigationIsVisible.set(false);
			}}
			on:click={() => {
				navigationIsVisible.set(false);
			}}
			on:keydown={() => {
				navigationIsVisible.set(false);
			}}
			role="button"
			tabindex="0"
			class="main-menu"
			in:fly={{ x: 1000, duration: 750 }}
			out:fly={{ x: 1000, duration: 750 }}
		>
			{#each menu as item}
				<FxButton
					on:click_outside={() => {
						navigationIsVisible.set(false);
					}}
					target={item.target}
					label={item.label}
					iconName={item.icon}
					alignRight={item.alignRight}
					disable={item.disable}
					internal={item.internal}
				/>
			{/each}
		</div>
	{/if}
</nav>

<style lang="scss">
	@import '../../app.scss';

	nav {
		display: flex;
		position: fixed;
		top: 0;
		right: 0;
		height: 100%;
		background-color: white;
		z-index: 1000;

		.nav-bar {
			display: flex;
			height: 100%;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;

			.menu-button {
				height: auto;
				width: auto;
				padding: 0.5rem 0.75rem;
				font-size: 2.5em;
				cursor: pointer;
			}

			span {
				padding: 2rem 0.75rem;
				writing-mode: vertical-rl;
				transform: rotate(180deg);

				h1,
				p {
					font-size: 2.5em;
					margin: 0;
				}
			}
		}

		.main-menu {
			display: grid;
			flex-direction: column;
			font-family: Lato, sans-serif;
			font-size: 3.5em;
			gap: 0.75em;
			margin: 0.75em 0;
			padding: 0 0.5em;
			position: absolute;
			top: 0;
			justify-items: end;
			transform: translateX(-100%);
			width: 30vw;
			z-index: 1000;
			background-color: white;
			box-shadow: 0px 0px 15px 15px #fff;
		}
	}
</style>
