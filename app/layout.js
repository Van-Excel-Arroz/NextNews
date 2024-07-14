import './globals.css';
import MainHeader from '@/components/main-header';

export const metadata = {
	title: 'Next.js Page Routing & Rendering',
	description: 'Learn how to route to different pages.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<main id="page">
					<MainHeader />
					{children}
				</main>
			</body>
		</html>
	);
}
