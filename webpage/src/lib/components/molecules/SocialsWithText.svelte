<script>
	import GitHubIcon from '$lib/icons/socials/github.svelte';
	import LinkedInIcon from '$lib/icons/socials/linkedin.svelte';
	import EmailIcon from '$lib/icons/socials/email.svelte';
	import Scholar from '$lib/icons/socials/scholar.svelte';
</script>

<div class="socials-with-text-container">
	<div class="socials-with-text">
		<a
			href="mailto:info@gsindlinger.com"
			target="_blank"
			rel="noopener noreferrer"
			title="Send an email"
		>
			<EmailIcon />
			<span>Email</span>
		</a>
	</div>

	<div class="socials-with-text">
		<a href="#" target="_blank" rel="noopener noreferrer" title="See my Google Scholar profile">
			<Scholar />
			<span>Scholar</span>
		</a>
	</div>

	<div class="socials-with-text">
		<a
			href="https://github.com/gsindlinger"
			target="_blank"
			rel="noopener noreferrer"
			title="See my GitHub profile"
		>
			<GitHubIcon />
			<span>GitHub</span>
		</a>
	</div>

	<div class="socials-with-text">
		<a
			href="https://www.linkedin.com/in/gsindlinger/"
			target="_blank"
			rel="noopener noreferrer"
			title="Connect on LinkedIn"
		>
			<LinkedInIcon />
			<span>LinkedIn</span>
		</a>
	</div>
</div>

<style lang="scss">
	@use '../../scss/_breakpoints' as *;

	.socials-with-text-container {
		position: relative;
		display: flex;
		width: 100%;
		justify-content: space-evenly;
		font-size: 1rem;
		z-index: 2;

		@include for-phone-only {
			gap: 20px;
			justify-content: flex-start;
		}
	}
	.socials-with-text {
		display: flex;
		gap: 20px;
		font-size: 0.9rem;

		a :global(svg) {
			width: 32px;
			height: 32px;
		}

		a {
			text-decoration: none;
			display: flex;
			align-items: center;
			transition: all 0.2s ease-in-out;
			color: var(--color--text);
			fill: var(--color--text);

			&:hover {
				color: var(--color--primary);
				fill: var(--color--primary);
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}

			span {
				margin-left: 8px;
			}

			@include for-tablet-portrait-down {
				flex-direction: column;
				gap: 5px;

				span {
					margin-left: 0;
				}
			}

			@include for-phone-only {
				flex-direction: column;
				gap: 5px;

				span {
					margin-left: 0;
					font-size: 0.8rem;
				}

				:global(svg) {
					width: 22px;
					height: 22px;
				}
			}
		}
	}
</style>
