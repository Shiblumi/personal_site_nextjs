import '@/app/globals.css';
import ActiveSectionContext from '@/components/UI/ActiveSectionContext';

export const metadata = {
	title: 'Dirk Wilson Portfolio',
	description: 'Welcome to my swamp level.',
	icons: {
		icon: '/favicon.ico',
	},
	metadataBase: new URL('https://diwi.dev'),
	
	openGraph: {
		title: 'DIWI Portfolio',
		description: 'Welcome to my swamp level.',
		url: 'https://diwi.dev',
		siteName: 'diwi.dev',
		type: 'website',
	},
	
	twitter: {
		card: 'summary_large_image',
		title: 'DIWI Portfolio',
		description: 'Welcome to my swamp level.',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<ActiveSectionContext>{children}</ActiveSectionContext>
			</body>
		</html>
	);
}
