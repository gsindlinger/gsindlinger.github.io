<script lang="ts">
	import type { Publication } from '$lib/data/publications';

	export let publication: Publication;

	const venueColors: Record<Publication['venueType'], string> = {
		preprint: 'preprint',
		conference: 'conference',
		workshop: 'workshop',
		journal: 'journal'
	};

	function boldMyName(authors: string): string {
		return authors.replace(
			/Johannes(?:\s+Gabriel)?\s+Sindlinger/g,
			'<span style="text-decoration: underline;">$&</span>'
		);
	}
</script>

<article class="publication-row">
	<div class="venue-badge {venueColors[publication.venueType]}">
		{publication.venueShort}
	</div>
	<div class="pub-content">
		<h3 class="pub-title">{publication.title}</h3>
		{#if publication.authors}
			<p class="pub-authors">{@html boldMyName(publication.authors)}</p>
		{/if}
		<p class="pub-description">{publication.description}</p>
		<div class="pub-links">
			{#if publication.links.paper}
				<a
					href={publication.links.paper}
					class="pub-link paper"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline
							points="14,2 14,8 20,8"
						/></svg
					>
					Paper
				</a>
			{/if}
			{#if publication.links.code}
				<a
					href={publication.links.code}
					class="pub-link code"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><polyline points="16,18 22,12 16,6" /><polyline points="8,6 2,12 8,18" /></svg
					>
					Code
				</a>
			{/if}
			{#if publication.links.demo}
				<a
					href={publication.links.demo}
					class="pub-link demo"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"><polygon points="5,3 19,12 5,21" /></svg
					>
					Demo
				</a>
			{/if}
			{#if publication.links.project}
				<a
					href={publication.links.project}
					class="pub-link project"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path
							d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
						/></svg
					>
					Project
				</a>
			{/if}
		</div>
	</div>
</article>

<style lang="scss">
	@use '../../scss/_breakpoints' as *;

	.publication-row {
		display: grid;
		grid-template-columns: 180px 1fr;
		padding: 1.5rem 0;
		border-bottom: 1px solid rgba(var(--color--text-rgb), 0.08);
		align-items: start;
		transition: background 0.2s ease;

		&:last-child {
			border-bottom: none;
		}

		@include for-phone-only {
			grid-template-columns: 1fr;
			gap: 0.75rem;
		}
	}

	.venue-badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.35rem 0.75rem;
		border-radius: 6px;
		font-size: 0.8rem;
		font-weight: 700;
		text-align: center;
		letter-spacing: 0.02em;
		line-height: 1.3;
		width: fit-content;
		height: fit-content;
		margin-top: 0.2rem;

		&.conference {
			background-color: rgba(var(--color--primary-rgb), 0.12);
			color: var(--color--primary);
			border: 1px solid rgba(var(--color--primary-rgb), 0.3);
		}

		&.workshop {
			background-color: rgba(var(--color--secondary-rgb), 0.12);
			color: var(--color--secondary);
			border: 1px solid rgba(var(--color--secondary-rgb), 0.3);
		}

		&.preprint {
			background-color: rgba(var(--color--text-rgb), 0.07);
			color: var(--color--text-shade);
			border: 1px solid rgba(var(--color--text-rgb), 0.15);
		}

		&.journal {
			background-color: rgba(var(--color--yellow-rgb), 0.15);
			color: #8a6a00;
			border: 1px solid rgba(var(--color--yellow-rgb), 0.4);
		}
	}

	.pub-content {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.pub-title {
		font-size: 1.05rem;
		font-weight: 700;
		font-family: var(--font--default);
		color: var(--color--text);
		line-height: 1.4;
		margin: 0;
	}

	.pub-authors {
		font-size: 0.85rem;
		color: var(--color--text-shade);
		margin: 0;
		font-style: italic;
	}

	.pub-description {
		font-size: 0.9rem;
		color: rgba(var(--color--text-rgb), 0.8);
		line-height: 1.6;
		margin: 0.2rem 0 0;
	}

	.pub-links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.6rem;
	}

	.pub-link {
		display: inline-flex;
		align-items: center;
		gap: 0.3rem;
		padding: 0.25rem 0.7rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.2s ease;
		border: 1.5px solid transparent;

		svg {
			width: 13px;
			height: 13px;
			flex-shrink: 0;
		}

		&.paper {
			background-color: var(--color--primary-tint);
			color: var(--color--primary);
			border-color: rgba(var(--color--primary-rgb), 0.25);

			&:hover {
				background-color: var(--color--primary);
				color: white;
			}
		}

		&.code {
			background-color: rgba(var(--color--text-rgb), 0.06);
			color: var(--color--text-shade);
			border-color: rgba(var(--color--text-rgb), 0.15);

			&:hover {
				background-color: var(--color--text);
				color: var(--color--text-inverse);
			}
		}

		&.demo {
			background-color: var(--color--secondary-tint);
			color: var(--color--secondary);
			border-color: rgba(var(--color--secondary-rgb), 0.25);

			&:hover {
				background-color: var(--color--secondary);
				color: white;
			}
		}

		&.project {
			background-color: rgba(var(--color--text-rgb), 0.06);
			color: var(--color--text-shade);
			border-color: rgba(var(--color--text-rgb), 0.15);

			&:hover {
				background-color: var(--color--primary);
				color: white;
				border-color: transparent;
			}
		}
	}
</style>
