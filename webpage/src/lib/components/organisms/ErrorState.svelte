<script>
	import Button from '$lib/components/atoms/Button.svelte';
	import WaveTitle from '$lib/components/organisms/WaveTitle.svelte';
	import Error from '$lib/icons/error.svelte';

	export let title = 'Oh no! 404!';
	export let message =
		"It seems like coffee was spilled all over this page, and now it can't be displayed.";
	export let actionLabel = 'Start over';
	export let actionHref = '/';
</script>

<WaveTitle compact>
	<div class="container">
		<h1>{title}</h1>
	</div>
</WaveTitle>

<section class="error-page">
	<div class="container error-content">
		<div class="svg-wrapper">
			<Error />
		</div>
		<p>{message}</p>
		<Button href={actionHref}>{actionLabel}</Button>
	</div>
</section>

<style lang="scss">
	@use '../../scss/_breakpoints' as *;

	.error-page {
		background: var(--color--page-background);
		position: relative;
		padding: 2rem 0 4rem;
	}

	.error-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 50vh;
		text-align: center;
		max-width: 760px;
		gap: 0.75rem;

		p {
			max-width: 34rem;
			margin: 0 0 0.75rem;
			line-height: 1.6;
		}

		.svg-wrapper {
			width: min(320px, 70vw);
			margin-bottom: -2rem;
			margin-top: -50px;

			:global(svg) {
				filter: drop-shadow(2px 6px 0px rgba(0, 0, 0, 0.1));
			}
		}

		@include for-phone-only {
			min-height: 42vh;
			padding-top: 0.5rem;
			margin-top: -20px;

			p {
				max-width: 28rem;
			}
		}
	}
</style>
