import Link from 'next/link';

export default function NewsList({ news }) {
	return (
		<ul className="news-list">
			{news.map(newsItem => (
				<li key={newsItem.id}>
					<Link href={`/news/${newsItem.slug}`}>
						<img
							src="https://images.unsplash.com/photo-1438109519352-a52c41243c1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
							alt={newsItem.title}
						/>
						<span>{newsItem.title}</span>
					</Link>
				</li>
			))}
		</ul>
	);
}
