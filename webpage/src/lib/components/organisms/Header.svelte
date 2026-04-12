<script lang="ts">
	import { base } from '$app/paths';
	import PageStar from "$lib/icons/page-star.svelte";
	import UserSquare from "$lib/icons/user-square.svelte";
</script>

<header>
	<nav class="container">
		<a class="logo" href={`${base}/`} aria-label="Site logo">
			<div>
				Johannes Gabriel Sindlinger
			</div>
		</a>
		<div class="links">
			<a href={`${base}/projects`} class="header-item">
				<div class="header-icon"><PageStar /></div>
				<span>publications</span>
			</a>
			<a href={`${base}/about`} class="header-item">
				<div class="header-icon"><UserSquare /></div>
				<span>cv</span>
			</a>
		</div>
	</nav>
</header>

<style lang="scss">
	@use '../../scss/_breakpoints' as *;

	header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1000;
		padding: 30px 0;

		@include for-phone-only {
			padding: 20px 0;
		}

		background: transparent;

		.container {
			display: flex;
			align-items: center;
			gap: 30px;

			@include for-phone-only {
				padding-left: 1.3rem;
				padding-right: 1.3rem;
			}
		}

		.logo {
			flex: 1;
			font-family: var(--font--title);
		}

		a {
			color: var(--color--primary-tint);
		}

		.header-item {
			display: flex;
			align-items: center;
			gap: 8px;
			text-decoration: none;
			color: var(--color--primary-tint);
			font-weight: 500;

			&:hover {
				filter: drop-shadow(0px 0px 5px var(--color--primary));
			}

			@include for-phone-only {
				flex-direction: column;
				gap: 2px;
			}
		}

		.header-icon {
			margin-top: 4px;
			width: 22px;
			height: 22px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: var(--color--primary-tint);
			transition: color 0.3s ease;

			:global(svg) {
				width: 100%;
				height: 100%;
			}

			:global(svg path) {
				stroke: var(--color--primary-tint);
			}
		}

		.links {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 50px;

			@include for-phone-only {
				gap: 20px;
			}

			a {
				text-decoration: none;
			}
		}
	}
</style>
