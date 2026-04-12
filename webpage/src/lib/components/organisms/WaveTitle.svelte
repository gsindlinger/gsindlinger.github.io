<script>
	import Waves from './Waves.svelte';

	export let compact = false;
</script>

<section class="wave-header" class:compact>
	<div class="wave-title-slot">
		<slot />
	</div>
	<Waves {compact} />
</section>

<style lang="scss">
	@use '../../scss/_breakpoints' as *;

	.wave-header {
		position: relative;
		padding-top: 90px;
		background: linear-gradient(60deg, var(--color--waves-start) 0%, var(--color--waves-end) 100%);
		width: 100%;
	}

	.wave-title-slot {
		display: flex;
		align-items: center;
		padding: 2.5rem 0 6.5rem;

		:global(h1) {
			font-family: var(--font--title);
			font-size: 2.4rem;
			font-weight: 700;
			color: var(--color--primary-tint);
			margin: 0;
		}

		@include for-phone-only {
			padding: 1.5rem 0 1rem;

			:global(h1) {
				font-size: 1.8rem;
			}
		}
	}
</style>
