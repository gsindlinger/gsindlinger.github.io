import { siteBaseUrl } from '$lib/data/meta';

export const prerender = true;

const staticRoutes = ['', 'publications', 'about'];

export async function GET() {
	const base = siteBaseUrl.replace(/\/$/, '');

	const staticEntries = staticRoutes
		.map(
			(path) => `  <url>
    <loc>${base}/${path}${path ? '/' : ''}</loc>
  </url>`
		)
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries}
</urlset>`;

	return new Response(body, {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		}
	});
}
