import Link from 'next/link';

const sections: { title?: string; links: string[] }[] = [
	{
		links: ['FAQ', 'Investor Relations', 'Privacy', 'Speed Test']
	},
	{
		links: ['Help Center', 'Jobs', 'Cookie Preferences', 'Legal Notices']
	},
	{
		links: ['Account', 'Ways to Watch', 'Corporate Information', 'Only on StreamLite']
	},
	{
		links: ['Media Center', 'Terms of Use', 'Contact Us']
	}
];

export default function Footer() {
	return (
		<footer className="border-t border-white/10 bg-background/90 py-12 text-sm text-gray-400">
			<div className="mx-auto max-w-6xl px-4 md:px-8">
				<div className="mt-8 grid gap-6 text-xs sm:grid-cols-2 md:grid-cols-4">
					{sections.map((section, sectionIndex) => (
						<ul key={sectionIndex} className="space-y-3">
							{section.links.map((link) => (
								<li key={link}>
									<Link href="#" className="hover:underline">
										{link}
									</Link>
								</li>
							))}
						</ul>
					))}
				</div>
				<div className="mt-10">
					<button className="rounded border border-white/20 px-3 py-1 text-xs text-gray-300 hover:text-white">
						English
					</button>
					<p className="mt-4 text-xs text-gray-500">StreamLite © {new Date().getFullYear()}</p>
				</div>
			</div>
		</footer>
	);
}


