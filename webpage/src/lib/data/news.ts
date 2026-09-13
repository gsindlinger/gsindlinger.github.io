export interface NewsLink {
	label: string;
	href: string;
}

export interface NewsItem {
	date: string;
	/** Plain text, may contain inline anchor tags. */
	content: string;
	/** Downloads or related pages, rendered as separate links below the text. */
	links?: NewsLink[];
}

/** Newest first — add new entries at the top. */
export const newsItems: NewsItem[] = [
	{
		date: 'Sep 11, 2026',
		content:
			'Attended <a href="https://mlss2026.is.tuebingen.mpg.de" target="_blank" rel="noopener noreferrer">MLSS 2026</a> in Tübingen, Germany, with many interesting lectures from leading researchers, and presented my ongoing work as a poster.',
		links: [{ label: 'Poster (PDF)', href: '/files/poster-mlss-2026.pdf' }]
	},
	{
		date: 'Sep 8, 2026',
		content:
			'Gave a talk on our recent work on data attribution at the <a href="https://is.mpg.de/sf" target="_blank" rel="noopener noreferrer">Social Foundations of Computation</a> group of the Max Planck Institute for Intelligent Systems in Tübingen, Germany.',
		links: [{ label: 'Slides (PDF)', href: '/files/talk-mpi-social-foundations-2026.pdf' }]
	},
	{
		date: 'Sep 1, 2025',
		content:
			'Started as a PhD student in NLPnorth Lab at the IT University of Copenhagen, working on Data Attribution for Large Language Models.'
	}
];
