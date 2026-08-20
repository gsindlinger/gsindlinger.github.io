<script>
	import GitHubIcon from '$lib/icons/socials/github.svelte';
	import LinkedInIcon from '$lib/icons/socials/linkedin.svelte';
	import EmailIcon from '$lib/icons/socials/email.svelte';
	import Scholar from '$lib/icons/socials/scholar.svelte';
</script>

<div class="socials">
	<a
		href="mailto:info@gsindlinger.com"
		target="_blank"
		rel="noopener noreferrer"
		title="Send an email"
	>
		<EmailIcon />
	</a>
	<a
		href="https://scholar.google.com/citations?user=IST0MhQAAAAJ&hl=en"
		target="_blank"
		rel="noopener noreferrer"
		title="See my Google Scholar profile"
	>
		<Scholar />
	</a>
	<a
		href="https://github.com/gsindlinger"
		target="_blank"
		rel="noopener noreferrer"
		title="See my GitHub profile"
	>
		<GitHubIcon />
	</a>
	<a
		href="https://www.linkedin.com/in/gabriel-sindlinger/"
		target="_blank"
		rel="noopener noreferrer"
		title="Connect on LinkedIn"
	>
		<LinkedInIcon />
	</a>
</div>

<style lang="scss">
	@use '../../scss/_breakpoints' as *;
	.socials {
		display: flex;
		align-items: center;
		gap: 20px;

		a {
			transition: all 0.2s ease-in-out;
			width: 40px;
			color: var(--color--text-inverse);
			fill: var(--color--text-inverse);

			&:hover {
				color: var(--color--primary);
				fill: var(--color--primary);
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}
</style>
