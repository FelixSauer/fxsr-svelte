<script>
	import Typewriter from 'svelte-typewriter';
</script>

<header>
	<Typewriter text="fxsr" cursor cursorStyle="|" delay={1000} loop scrambleSlowdown>
		<h1>~ felixsauer</h1>
	</Typewriter>
</header>

<style lang="scss">
	header {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: repeat(8, 1fr);
		gap: 1rem;
		height: 4em;
		grid-column: 2 / 12;
		grid-row: 2 / 12;
		h1 {
			font-size: 3em;
			font-weight: 400;
		}
	}
</style>
