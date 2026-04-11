<script lang="ts">
	import { newsItems } from '$lib/data/news';
</script>

<section id="news">
	<h2>News</h2>
	<div class="news-list">
		{#each newsItems as item}
			<div class="news-item">
				<span class="date">{item.date}</span>
				<p class="content">
					{#if item.link}
						<a href={item.link} target="_blank" rel="noopener noreferrer">{item.content}</a>
					{:else}
						{item.content}
					{/if}
				</p>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	@use '../../scss/_breakpoints' as *;

	#news {
		padding: 1.5rem 0 2rem;

		h2 {
			font-family: var(--font--title);
			font-size: 1.8rem;
			font-weight: 700;
			margin-bottom: 2rem;
			color: var(--color--text);
			position: relative;
			display: inline-block;

			&::after {
				content: '';
				position: absolute;
				bottom: -6px;
				left: 0;
				width: 100%;
				height: 3px;
				background: linear-gradient(90deg, var(--color--primary) 0%, var(--color--secondary) 100%);
				border-radius: 2px;
			}
		}
	}

	.news-list {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.news-item {
		display: grid;
		grid-template-columns: 140px 1fr;
		gap: 0.3rem;
		padding: 0.9rem 0;
		border-bottom: 1px solid rgba(var(--color--text-rgb), 0.08);
		align-items: baseline;

		&:last-child {
			border-bottom: none;
		}

		@include for-phone-only {
			grid-template-columns: 1fr;
			gap: 0.3rem;
		}
	}

	.date {
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--color--primary);
		white-space: nowrap;
		font-variant-numeric: tabular-nums;
		letter-spacing: 0.01em;
	}

	.content {
		font-size: 0.95rem;
		line-height: 1.6;
		color: var(--color--text);
		margin: 0;

		a {
			color: var(--color--primary);
			text-decoration: underline;
			text-underline-offset: 3px;

			&:hover {
				color: var(--color--secondary);
			}
		}
	}
</style>
