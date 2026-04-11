<script lang="ts">
	import WaveTitle from '$lib/components/organisms/WaveTitle.svelte';
	import PublicationRow from '$lib/components/molecules/PublicationRow.svelte';
	import { publications } from '$lib/data/publications';

	// Group publications by year descending
	const byYear = publications.reduce((acc, pub) => {
		(acc[pub.year] ??= []).push(pub);
		return acc;
	}, {} as Record<number, typeof publications>);
	const years = Object.keys(byYear)
		.map(Number)
		.sort((a, b) => b - a);
</script>

<WaveTitle compact>
	<div class="container"><h1>Publications</h1></div>
</WaveTitle>

<div class="container page-content">

	{#each years as year}
		<section class="year-section">
			<h2 class="year-label">{year}</h2>
			<div class="pub-list">
				{#each byYear[year] as pub}
					<PublicationRow publication={pub} />
				{/each}
			</div>
		</section>
	{/each}
</div>

<style lang="scss">
	@use '../../../lib/scss/_breakpoints' as *;

	.page-content {
		padding-top: 2rem;
		padding-bottom: 4rem;
	}

	.year-section {
		margin-bottom: 2.5rem;
	}

	.year-label {
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--color--primary);
		letter-spacing: 0.05em;
		margin-bottom: 0.5rem;
		padding-bottom: 0.4rem;
		border-bottom: 2px solid rgba(var(--color--primary-rgb), 0.2);
		display: inline-block;
	}

	.pub-list {
		margin-top: 0.5rem;
	}
</style>
