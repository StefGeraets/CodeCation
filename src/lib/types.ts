export type Categories = 'javascript' | 'css' | 'frameworks' | 'ui-ux' | 'infrastructure';

export interface Post {
	title: string;
	slug: string;
	excerpt: string;
	date: string;
	categories: Categories[];
	published: boolean;
	thumbnail: string;
	mainImage: string;
}
