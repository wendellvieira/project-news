export interface iArticleHead {
	source: {
		id: string;
		name: string;
	};
	author: string;
	title: string;
	description?: string;
	url: string;
	urlToImage?: string;
	publishedAt: Date;
	content?: string;
}

export interface iSource {
	id: string;
	name: string;
	description: string;
	url: string;
	category: string;
	language: string;
	country: string;
}

export interface QueryTopHead {
	q?: string;
	sources?: string;
	category?: string;
	language?: string;
	country?: string;
}
