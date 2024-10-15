<script lang="ts">
	import Icon from '@iconify/svelte';

	interface data {
		name: string;
		description?: string;
		branch?: string;
		icon?: string;
		iconColor?: string;
		img?: string;
	}

	export let data: data;
	let iconSize: number = 40;
</script>

<div>
		{#if data.icon}
			<Icon icon={data.icon  } width={iconSize} height={iconSize} color={data.iconColor} />
		{/if}
	<span>
		{#if data.img}
			<img src={data.img} alt={data.name} />
		{/if}
		{#if !data.img}
			<h3>{data.name}</h3>
		{/if}
		<p>
			{data.description}
			{#if data.branch}
				<br />
				{data.branch}
			{/if}
		</p>
	</span>
</div>

<style lang="scss">
	div {
		height: auto;
		width: auto;
		padding: 1em;
		border: 2px solid rgb(0, 0, 0, 1);
		border-radius: 4px;
		display: flex;
		gap: 1.25em;
		align-items: flex-start;

		span {
			h3 {
				font-size: 1em;
				margin: unset;
			}

			img {
				height: 40px;
			}

			p {
				margin-top: 0.75em;
				margin-bottom: unset;
				font-size: 0.75em;

				&:last-child {
					margin-bottom: unset;
				}
			}
		}
	}
</style>
