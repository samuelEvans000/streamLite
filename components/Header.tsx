'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const nav = [
	{ href: '/', label: 'Home' }
];

export default function Header() {
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		function handleScroll() {
			setIsScrolled(window.scrollY > 50);
		}
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
				isScrolled
					? 'border-white/10 bg-background/80 backdrop-blur'
					: 'border-transparent bg-transparent'
			}`}
		>
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 transition-colors duration-300 md:px-8">
				<Link href="/" className="text-lg font-semibold">
					<span className="rounded bg-white px-2 py-1 text-black">Stream</span>
					<span className="ml-1">Lite</span>
				</Link>
				<nav className="flex items-center gap-4 text-sm text-gray-300">
					{nav.map((n) => (
						<Link
							key={n.href}
							href={n.href}
							className={pathname === n.href ? 'text-white' : 'hover:text-white'}
						>
							{n.label}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
}


