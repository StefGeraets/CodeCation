import type { Post } from '$lib/types.js';
const scrollDemo: Post = {
	slug: 'scroll-demo',
	excerpt: 'Scroll Demo purposes',
	date: '10-10-2023',
	categories: ['css'],
	title: 'Css Driven Scroll Animations That Look Awesome',
	thumbnail: '/images/1-small.jpg',
	mainImage: '/images/1-big.jpg',
	published: true
};

export async function load({ fetch }) {
	const response = await fetch('api/posts');
	const posts: Post[] = await response.json();
	posts.splice(2, 0, scrollDemo);
	return { posts };
}
