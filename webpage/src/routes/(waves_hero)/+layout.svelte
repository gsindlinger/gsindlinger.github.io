<script>
	import { page } from '$app/stores';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';

	import { description, image, keywords, title, siteBaseUrl } from '$lib/data/meta';

	const defaultRobots = 'index,follow,max-image-preview:large';

	/** @type {Record<string, { title: string; description: string; robots: string }>} */
	const routeMeta = {
		'/': {
			title,
			description,
			robots: defaultRobots
		},
		'/about': {
			title: 'CV – Johannes Gabriel Sindlinger',
			description:
				'Curriculum vitae of Johannes Gabriel Sindlinger, PhD student in NLP at the IT University of Copenhagen.',
			robots: defaultRobots
		},
		'/publications': {
			title: 'Publications – Johannes Gabriel Sindlinger',
			description:
				'Research publications by Johannes Gabriel Sindlinger on Data Attribution, Large Language Models, NLP, and AI Safety.',
			robots: defaultRobots
		},
		'/blog': {
			title: `Blog – ${title}`,
			description:
				'Blog posts by Johannes Gabriel Sindlinger on NLP, AI research, data attribution, and related projects.',
			robots: 'noindex,nofollow'
		},
		'/404': {
			title: `404 – ${title}`,
			description: 'The page you are looking for could not be found.',
			robots: 'noindex,nofollow'
		}
	};

	$: pathname = $page.url.pathname;
	$: currentMeta = routeMeta[pathname] ?? routeMeta['/'];
	$: canonicalUrl = new URL(pathname.replace(/^\//, ''), siteBaseUrl).toString();
	$: structuredData = JSON.stringify({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				name: title,
				url: siteBaseUrl,
				inLanguage: 'en'
			},
			{
				'@type': 'Person',
				name: title,
				url: siteBaseUrl,
				jobTitle: 'PhD Student',
				affiliation: {
					'@type': 'CollegeOrUniversity',
					name: 'IT University of Copenhagen'
				},
				sameAs: ['https://github.com/gsindlinger', 'https://www.linkedin.com/in/gsindlinger/'],
				knowsAbout: keywords.slice(2)
			}
		]
	});
</script>

<svelte:head>
	<link rel="canonical" href={canonicalUrl} />
	<meta name="keywords" content={keywords.join(', ')} />
	<meta name="robots" content={currentMeta.robots} />

	<meta name="description" content={currentMeta.description} />
	<meta property="og:description" content={currentMeta.description} />
	<meta name="twitter:description" content={currentMeta.description} />

	<title>{currentMeta.title}</title>
	<meta property="og:title" content={currentMeta.title} />
	<meta name="twitter:title" content={currentMeta.title} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />

	<meta property="og:image" content={image} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:card" content="summary_large_image" />
	<script type="application/ld+json">{@html structuredData}</script>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
	@use '../../lib/scss/_mixins' as *;

	main {
		z-index: 1;
	}
</style>
