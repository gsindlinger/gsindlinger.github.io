export interface NewsItem {
	date: string;
	content: string;
	link?: string;
}

export const newsItems: NewsItem[] = [
	{
		date: 'Sep 1, 2025',
		content:
			'Started as a new PhD student in NLPnorth Lab at the IT University of Copenhagen, working on Data Attribution for Large Language Models.'
	}
];
