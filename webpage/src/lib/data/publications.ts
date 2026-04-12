export interface Publication {
	title: string;
	venue: string;
	venueShort: string;
	venueType: 'preprint' | 'conference' | 'workshop' | 'journal';
	year: number;
	description: string;
	links: {
		paper?: string;
		code?: string;
		demo?: string;
		project?: string;
	};
	authors?: string;
}

export const publications: Publication[] = [
	{
		title: 'TrendTracker: Temporal, network-based exploration of long-term Twitter trends',
		venue: "ASONAM '23",
		venueShort: "ASONAM '23",
		venueType: 'conference',
		year: 2023,
		description:
			'A web application for interactive exploration of social media trends using hashtag co-occurrence networks, enabling temporal analysis, multi-perspective trend investigation, and trend comparison — demonstrated on a German political Twitter dataset.',
		links: {
			paper: 'https://dl.acm.org/doi/10.1145/3625007.3627335'
		},
		authors: 'John Ziegler, Johannes Sindlinger, Marina Walther, Michael Gertz '
	}
];
