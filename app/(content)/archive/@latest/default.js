import { getLatestNews } from '@/lib/news';
import NewsList from '@/components/news-list';

export default function LatestNewsPage(params) {
	const latestNews = getLatestNews();

	return (
		<>
			<h2>Latest News Page</h2>
			<NewsList news={latestNews} />
		</>
	);
}
