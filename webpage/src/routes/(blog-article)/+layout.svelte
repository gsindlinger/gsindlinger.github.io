<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import dateformat from 'dateformat';

	import { image, keywords, siteBaseUrl, title } from '$lib/data/meta';
	import type { BlogPost } from '$lib/utils/types';
	import RelatedPosts from '$lib/components/organisms/RelatedPosts.svelte';
	import Image from '$lib/components/atoms/Image.svelte';

	export let data: { post: BlogPost };
	$: ({ post } = data);

	let metaKeywords = keywords;

	$: {
		if (post?.tags?.length) {
			metaKeywords = post.tags.concat(metaKeywords);
		}
		if (post?.keywords?.length) {
			metaKeywords = post.keywords.concat(metaKeywords);
		}
	}

	function absoluteUrl(path: string) {
		return new URL(path.replace(/^\//, ''), siteBaseUrl).toString();
	}

	$: canonicalUrl = new URL($page.url.pathname.replace(/^\//, ''), siteBaseUrl).toString();
	$: pageTitle = post ? `${post.title} - ${title}` : title;
	$: socialImage = post?.coverImage ? absoluteUrl(post.coverImage) : undefined;
	$: articleSchema =
		post &&
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: post.title,
			description: post.excerpt,
			url: canonicalUrl,
			datePublished: post.date,
			...(post.updated ? { dateModified: post.updated } : {}),
			...(socialImage ? { image: [socialImage] } : {}),
			author: {
				'@type': 'Person',
				name: 'Johannes Gabriel Sindlinger',
				url: siteBaseUrl
			},
			publisher: {
				'@type': 'Person',
				name: 'Johannes Gabriel Sindlinger',
				url: siteBaseUrl
			},
			...(post.tags?.length ? { keywords: post.tags.join(', ') } : {})
		});
</script>

<svelte:head>
	<meta name="keywords" content={metaKeywords.join(', ')} />
	<meta name="robots" content="index,follow,max-image-preview:large" />

	<meta name="description" content={post?.excerpt ?? ''} />
	<meta property="og:description" content={post?.excerpt ?? ''} />
	<meta name="twitter:description" content={post?.excerpt ?? ''} />
	<link rel="canonical" href={canonicalUrl} />

	<title>{pageTitle}</title>
	<meta property="og:title" content={pageTitle} />
	<meta name="twitter:title" content={pageTitle} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={canonicalUrl} />
	<meta name="twitter:card" content={socialImage ? 'summary_large_image' : 'summary'} />
	<meta property="article:published_time" content={post?.date ?? ''} />
	<meta property="article:modified_time" content={post?.updated ?? post?.date ?? ''} />
	<meta property="og:image" content={socialImage ?? image} />
	<meta name="twitter:image" content={socialImage ?? image} />

	{#if articleSchema}
		<script type="application/ld+json">{@html articleSchema}</script>
	{/if}
</svelte:head>

<div class="article-layout">
	<Header />

	<div id="header-background"></div>

	<main>
		<article id="article-content">
			<div class="header">
				{#if post}
					<h1>{post.title}</h1>
					<div class="note">Published on {dateformat(post.date, 'UTC:dd mmmm yyyy')}</div>
					{#if post.updated}
						<div class="note">Updated on {dateformat(post.updated, 'UTC:dd mmmm yyyy')}</div>
					{/if}
					{#if post.readingTime}
						<div class="note">{post.readingTime}</div>
					{/if}
					{#if post.tags?.length}
						<div class="tags">
							{#each post.tags as tag}
								<Tag>{tag}</Tag>
							{/each}
						</div>
					{/if}
				{/if}
			</div>
			{#if post && post.coverImage}
				<div class="cover-image">
					<Image src={post.coverImage} alt={post.title} />
				</div>
			{/if}
			<div class="content">
				<slot />
			</div>
		</article>

		{#if post.relatedPosts && post.relatedPosts.length > 0}
			<div class="container">
				<RelatedPosts posts={post.relatedPosts} />
			</div>
		{/if}
	</main>

	<Footer />
</div>

<style lang="scss">
	@use '../../lib/scss/_mixins' as *;

	.header-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 300px;
		background: linear-gradient(60deg, var(--color--waves-start) 0%, var(--color--waves-end) 100%);
	}

	.article-layout {
		--body-background-color: var(--color--post-page-background);
		background-color: var(--color--post-page-background);
	}

	#article-content {
		--main-column-width: 65ch;
		position: relative;
		padding-top: 40px;
		padding-bottom: 80px;
		padding-right: 15px;
		padding-left: 15px;

		@include for-iphone-se {
			padding-left: 0;
			padding-right: 0;
		}

		@include for-tablet-portrait-up {
			padding-right: 20px;
			padding-left: 20px;
		}

		@include for-tablet-landscape-up {
			padding-right: 30px;
			padding-left: 30px;
		}

		display: flex;
		flex-direction: column;
		gap: 30px;

		.header {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			gap: 10px;
			width: min(var(--main-column-width), 100%);
			margin: 0 auto;

			.note {
				font-size: 90%;
				color: rgba(var(--color--text-rgb), 0.8);
			}
		}

		.cover-image {
			width: min(var(--main-column-width), 100%);
			margin: 0 auto;
			max-height: 400px;
			box-shadow: var(--image-shadow);
			border-radius: 6px;

			img {
				width: 100%;
				height: 100%;
				max-height: 400px;
				object-fit: cover;
			}
		}

		:global(.cover-image img) {
			max-height: 400px;
			object-fit: cover;
		}

		.content {
			display: grid;
			grid-template-columns:
				1fr
				min(var(--main-column-width), 100%)
				1fr;

			:global(> *) {
				grid-column: 2;
			}

			:global(> .full-bleed) {
				grid-column: 1 / 4;
				width: 100%;
				max-width: 1600px;
				margin-left: auto;
				margin-right: auto;
			}
		}

		.tags {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 5px;
			flex-wrap: wrap;
		}
	}
</style>
