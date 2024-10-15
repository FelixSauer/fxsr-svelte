<script lang="ts">
	import '../app.scss';
	import Footer from '../components/footer/Footer.svelte';
	import Navigation from '../components/navigation/Navigation.svelte';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
		integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
	<title>>_ felix sauer</title>
</svelte:head>

<Navigation />

<slot />

<Footer />
