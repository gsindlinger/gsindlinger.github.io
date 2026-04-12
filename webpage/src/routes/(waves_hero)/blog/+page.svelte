<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import BlogPostCard from '$lib/components/molecules/BlogPostCard.svelte';
	import WaveTitle from '$lib/components/organisms/WaveTitle.svelte';
	import type { BlogPost } from '$lib/utils/types';

	export let data: {
		posts: BlogPost[];
	};

	let { posts } = data;

	const templatePosts = [
		{
			title: 'Example research post title',
			excerpt:
				'A short summary goes here so you can preview how a future article card will look on the blog overview page.',
			slug: '#',
			readingTime: '6 min read',
			tags: ['NLP', 'Attribution']
		},
		{
			title: 'Another post with a slightly longer heading',
			excerpt:
				'This card acts as a visual template only. It lets you keep the layout visible until there are real posts to publish.',
			slug: '#',
			readingTime: '9 min read',
			tags: ['AI Safety', 'Notes']
		}
	] satisfies Pick<BlogPost, 'title' | 'excerpt' | 'slug' | 'readingTime' | 'tags'>[];
</script>

<WaveTitle compact>
	<div class="container">
		<h1>Blog</h1>
	</div>
</WaveTitle>

<section class="blog-page">
	<div class="container blog-content">
		<h2>Coming soon</h2>
		<p>
			This section is reserved for future writing on NLP, AI research, and related projects. For
			now, I’m keeping it tucked away until there is actual content worth publishing.
		</p>
		<p class="note">
			The preview cards below are only there as a visual template, so the intended blog layout stays
			visible while the section remains unpublished.
		</p>
		<div class="preview-grid" aria-label="Blog template preview">
			{#each posts.length > 0 ? posts.slice(0, 2) : templatePosts as post}
				<div class="preview-card">
					<BlogPostCard
						title={post.title}
						coverImage={post.coverImage}
						excerpt={post.excerpt}
						readingTime={post.readingTime}
						slug={post.slug}
						tags={post.tags}
						showImage={false}
					/>
				</div>
			{/each}
		</div>
		<Button href="/">Back to home</Button>
	</div>
</section>

<style lang="scss">
	@use '../../../lib/scss/_breakpoints' as *;

	.blog-page {
		padding: 2rem 0 4rem;
	}

	.blog-content {
		min-height: 46vh;
		max-width: 760px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 0.75rem;

		h2 {
			margin: 0;
		}

		p {
			max-width: 34rem;
			margin: 0;
			line-height: 1.6;
		}

		.note {
			font-size: 0.95rem;
			color: var(--color--text-shade);
		}

		.preview-grid {
			width: 100%;
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 1.25rem;
			margin: 0.5rem 0 1rem;
		}

		.preview-card {
			width: 100%;
			opacity: 0.92;
		}

		@include for-phone-only {
			min-height: 40vh;

			.preview-grid {
				grid-template-columns: 1fr;
			}
		}
	}
</style>
