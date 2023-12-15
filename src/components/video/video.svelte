<script lang="ts">
	import clip from '$lib/assets/istockphoto.mp4';
</script>

<video autoplay muted src={clip} loop />

<style lang="scss">
	video {
		position: fixed;
		min-width: 100%;
		min-height: 100%;
		object-fit: cover;
		z-index: -1;
	}
</style>
