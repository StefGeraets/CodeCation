import { posts } from '$lib/data/posts';

const scrollDemo = {
	slug: 'scroll-demo',
	title: 'Scroll Demo',
	thumbnail: '/images/1-small.jpg'
};

export function load() {
	const list = posts.map((post) => ({
		slug: post.slug,
		title: post.title,
		thumbnail: post.thumbnail
	}));
	list.splice(2, 0, scrollDemo);
	return {
		postList: list
	};
}
