<script>
	export let compact = false;
</script>

<div class="waves-container" class:compact>
	<svg
		class="waves"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 24 150 28"
		preserveAspectRatio="none"
		shape-rendering="auto"
	>
		<defs>
			<path
				id="gentle-wave"
				d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
			/>
		</defs>
		<g class="parallax">
			<use
				xlink:href="#gentle-wave"
				x="48"
				y="0"
				fill="rgba(var(--color--page-background-rgb),0.7)"
			/>
			<use
				xlink:href="#gentle-wave"
				x="48"
				y="3"
				fill="rgba(var(--color--page-background-rgb),0.5)"
			/>
			<use
				xlink:href="#gentle-wave"
				x="48"
				y="5"
				fill="rgba(var(--color--page-background-rgb),0.3)"
			/>
			<use xlink:href="#gentle-wave" x="48" y="7" fill="var(--color--page-background)" />
		</g>
	</svg>
</div>

<style lang="scss">
	@use '../../scss/_breakpoints' as *;
	.waves-container {
		position: relative;
		width: 100%;
		line-height: 0; // removes gap below SVG

		@include for-phone-only {
			padding-bottom: 1rem;
		}

		&.compact {
			@include for-phone-only {
				padding-bottom: 5rem;
			}
		}
	}

	.waves {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 100px;
		z-index: 1;
		display: block;

		@include for-phone-only {
			height: 80px;
		}

		.waves-container.compact & {
			height: 70px;

			@include for-phone-only {
				height: 50px;
			}
		}
	}

	/* Animation */
	.parallax > use {
		@media screen and (prefers-reduced-motion: no-preference) {
			animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
		}
	}
	.parallax > use:nth-child(1) {
		animation-delay: -2s;
		animation-duration: 7s;
	}
	.parallax > use:nth-child(2) {
		animation-delay: -3s;
		animation-duration: 10s;
	}
	.parallax > use:nth-child(3) {
		animation-delay: -4s;
		animation-duration: 13s;
	}
	.parallax > use:nth-child(4) {
		animation-delay: -5s;
		animation-duration: 20s;
	}
	@keyframes move-forever {
		0% {
			transform: translate3d(-90px, 0, 0);
		}
		100% {
			transform: translate3d(85px, 0, 0);
		}
	}
</style>
