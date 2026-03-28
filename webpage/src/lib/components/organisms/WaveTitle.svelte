<script>
	import Waves from './Waves.svelte';
</script>

<div class="wave-header">
	<div id="wave-background"></div>
	<Waves />
</div>



<style lang="scss">
	@use '../../scss/_breakpoints' as *;


	.wave-header {
		position: absolute;
		top: 0;
		left: 0;
		padding-top: 90px;
		background: linear-gradient(60deg, var(--color--waves-start) 0%, var(--color--waves-end) 100%);
		width: 100%;
		height: 60vh;
		z-index: -3;
	}

	#wave-background {
		width: 100%;
		height: calc(60vh - 90px); // 60vh for the header and 90px for the waves
	}

	


</style>
