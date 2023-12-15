<script lang="ts">
	function typerWriter() {
		const logoText = 'fxsr';
		const deltaFirstName = 'elix';
		const deltaLastName = 'aue';

		function typeWriter() {
			const logo = document.getElementById('logo')?.innerHTML;
			logo.innerHTML = logoText.replace('f', 'f' + deltaFirstName);
		}
	}
</script>

<span>f</span>
<span>x</span>
<span>s</span>
<span>r</span>

<style lang="scss">
</style>
