import { siteBaseUrl } from '$lib/data/meta';
import { filterPosts, importPosts } from '$lib/data/blog-posts/utils';

export const prerender = true;

const staticRoutes = [
	{ path: '', priority: '1.0', changefreq: 'weekly' },
	{ path: 'about', priority: '0.8', changefreq: 'monthly' },
	{ path: 'publications', priority: '0.8', changefreq: 'monthly' }
];

export async function GET() {
	const allPosts = importPosts(false);
	const posts = filterPosts(allPosts);

	const base = siteBaseUrl.replace(/\/$/, '');

	const staticEntries = staticRoutes
		.map(
			({ path, priority, changefreq }) => `
  <url>
    <loc>${base}/${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
		)
		.join('');

	const postEntries = posts
		.map(
			(post) => `
  <url>
    <loc>${base}/${post.slug}</loc>
    <lastmod>${new Date(post.updated || post.date).toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
		)
		.join('');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries}${postEntries}
</urlset>`;

	return new Response(body, {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		}
	});
}
