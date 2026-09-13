<script lang="ts">
	import { base } from '$app/paths';
	import { newsItems } from '$lib/data/news';
</script>

<section id="news">
	<h2>News</h2>
	<div class="news-list">
		{#each newsItems as item}
			<div class="news-item">
				<span class="date">{item.date}</span>
				<div class="content">
					<p>{@html item.content}</p>
					{#if item.links?.length}
						<p class="attachments">
							{#each item.links as link}
								<a
									class="attachment"
									href={`${base}${link.href}`}
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
										aria-hidden="true"
										><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline
											points="7 10 12 15 17 10"
										/><line x1="12" y1="15" x2="12" y2="3" /></svg
									>
									{link.label}
								</a>
							{/each}
						</p>
					{/if}
				</div>
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

		p {
			margin: 0;
		}

		:global(a) {
			color: var(--color--primary);
			text-decoration: underline;
			text-underline-offset: 3px;

			&:hover {
				color: var(--color--secondary);
			}
		}
	}

	.attachments {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.5rem !important;
	}

	.attachment {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		font-size: 0.8rem;
		font-weight: 600;
		padding: 0.2rem 0.6rem;
		border: 1px solid rgba(var(--color--primary-rgb), 0.35);
		border-radius: 999px;
		text-decoration: none !important;
		transition: background 0.15s ease, border-color 0.15s ease;

		&:hover {
			background: rgba(var(--color--primary-rgb), 0.1);
			border-color: var(--color--primary);
		}

		svg {
			width: 0.9em;
			height: 0.9em;
		}
	}
</style>
