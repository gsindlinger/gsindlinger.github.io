// Base values for meta tags
// So they can be added as suffixes on different pages
// Via <svelte:head>

export const siteBaseUrl = 'https://gsindlinger.github.io/';

export const keywords = [
	'Johannes Gabriel Sindlinger',
	'Gabriel Sindlinger',
	'AI Researcher',
	'KI Forscher',
	'Artificial Intelligence',
	'Natural Language Processing',
	'Data Attribution',
	'Large Language Models',
	'Copyright',
	'AI Safety',
	'Influence Functions',
	'PhD Student',
];

export const description =
	'I am a PhD student at IT University of Copenhagen studying Data Attribution for Large Language Models and its implications for copyright & AI safety.';

export const title = 'Johannes Gabriel Sindlinger';

export const image = new URL('images/site-preview.png', siteBaseUrl).toString();
