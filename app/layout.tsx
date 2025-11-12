import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
	title: 'StreamLite',
	description: 'A simplified streaming dashboard built with Next.js 14'
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-background">
				<Header />
				<main className="min-h-[calc(100vh-64px)]">{children}</main>
				<Footer />
			</body>
		</html>
	);
}


